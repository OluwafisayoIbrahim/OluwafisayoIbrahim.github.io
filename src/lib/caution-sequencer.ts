// Port of firmware/c_caution/sequencer.h and the project's 1 ms NE555/CD4017 test rig.
// Arduino Uno / ATmega328P: D2 clock, D8 enable, D9 reset, D10 active-low red supply.
export type CautionState = "boot" | "arm" | "red" | "finish" | "gap" | "green" | "end" | "fault";
export interface CautionSample { state: CautionState; redGroup: number; greenMask: number; cycles: number; }
export class CautionSequencer {
  state: CautionState = "boot";
  private now = -1;
  private start = 0;
  private lastEdge = 0;
  private edges = 0;
  private cycles = 0;
  private greenMask = 0;
  private sawHigh = false;
  private previousClock = false;
  private enabled = false;
  private clock = false;
  private remaining = 0;
  private counter = 0;
  private timerRun = false;
  private reset = true;
  private redSupply = false;
  private enter(state: CautionState) {
    this.state = state; this.start = this.now; this.lastEdge = this.now;
    if (state === "arm") this.sawHigh = false;
    if (state === "red") this.edges = 0;
    this.greenMask = state === "green" ? 1 : 0;
  }
  advance(targetMs: number): CautionSample {
    while (this.now < Math.floor(targetMs)) this.step();
    return { state: this.state, redGroup: this.redSupply ? this.counter : -1, greenMask: this.greenMask, cycles: this.cycles };
  }
  private step() {
    ++this.now;
    // 4.7 kΩ + 10 kΩ + 10 µF: first high 161 ms, subsequent high 102 ms / low 69 ms.
    const previous = this.clock;
    if (!this.timerRun) { this.enabled = false; this.clock = false; }
    else if (!this.enabled) { this.enabled = true; this.clock = true; this.remaining = 161; }
    else if (--this.remaining === 0) { this.clock = !this.clock; this.remaining = this.clock ? 102 : 69; }
    if (this.reset) this.counter = 0;
    else if (!previous && this.clock) this.counter = (this.counter + 1) % 10;
    const rising = !this.previousClock && this.clock;
    const falling = this.previousClock && !this.clock;
    this.previousClock = this.clock;
    const elapsed = this.now - this.start;
    switch (this.state) {
      case "boot": if (elapsed >= 100) this.enter("arm"); break;
      case "arm":
        if (rising) this.sawHigh = true;
        if (this.sawHigh && falling) this.enter("red");
        else if (elapsed >= 3000) this.enter("fault"); break;
      case "red":
        if (rising) { ++this.edges; this.lastEdge = this.now; if (this.edges >= 30) { this.enter("finish"); break; } }
        if (this.now - this.lastEdge >= 1000) this.enter("fault"); break;
      case "finish": if (falling) this.enter("gap"); else if (elapsed >= 1000) this.enter("fault"); break;
      case "gap": if (elapsed >= 300) this.enter("green"); break;
      case "green": {
        const index = Math.floor(elapsed / 250);
        if (index >= 12) this.enter("end"); else this.greenMask = 1 << index;
        break;
      }
      case "end": if (elapsed >= 500) { ++this.cycles; this.enter("arm"); } break;
      case "fault": if (elapsed >= 3000) this.enter("boot"); break;
    }
    this.timerRun = ["arm", "red", "finish"].includes(this.state);
    this.reset = !["red", "finish"].includes(this.state);
    this.redSupply = !this.reset;
  }
}
