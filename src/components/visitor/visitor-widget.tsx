import { DottedGlobe } from "@/components/visitor/dotted-globe";
import { LocalClock } from "@/components/visitor/local-clock";
import { LocationSelector } from "@/components/visitor/location-selector";
import type { VisitorWidgetContent } from "@/types/visitor";

export function VisitorWidget({ locations }: VisitorWidgetContent) {
  return (
    <>
      <DottedGlobe locations={locations} />
      <LocalClock />
      <LocationSelector locations={locations} />
    </>
  );
}
