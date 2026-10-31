export interface CityFact {
  text: string;
  source: string;
  sourceName: string;
}
// Locally stored facts, checked against the linked cultural and institutional sources.
export const cityTrivia: Readonly<Record<string, readonly CityFact[]>> = {
  "1850147": [
    {
      text: "Tokyo was once called Edo. An imperial edict renamed it Tokyo, meaning 'eastern capital', in 1868.",
      source: "https://museumcollection.tokyo/en/works/6244159/",
      sourceName: "Tokyo Museum Collection",
    },
    {
      text: "Tokyo Skytree reaches 634 metres into the sky.",
      source: "https://www.tokyo-skytree.jp/about/outline/",
      sourceName: "Tokyo Skytree",
    },
    {
      text: "Japan's first railway began running in 1872 between Shimbashi in Tokyo and Yokohama.",
      source: "https://www.english.metro.tokyo.lg.jp/w/000-101-007591",
      sourceName: "Tokyo Metropolitan Government",
    },
  ],
  "2147714": [
    {
      text: "The Sydney Opera House design competition was won in 1957 by Jørn Utzon, a then little-known architect from Denmark.",
      source: "https://www.sydneyoperahouse.com/our-story/jorn-utzon",
      sourceName: "Sydney Opera House",
    },
    {
      text: "Sydney Harbour Bridge opened on 19 March 1932, linking the harbour's northern and southern shores in one span.",
      source:
        "https://www.nma.gov.au/defining-moments/resources/sydney-harbour-bridge-opens",
      sourceName: "National Museum of Australia",
    },
    {
      text: "The Sydney Opera House's sweeping roof shells are covered with more than a million tiles.",
      source:
        "https://majorprojects.planningportal.nsw.gov.au/prweb/PRRestService/mp/01/getContent?AttachRef=MP07_0142%2120190821T023142.022+GMT",
      sourceName: "NSW Government",
    },
  ],
  "2332459": [
    {
      text: "Lagos Island's Eyo festival features a traditional masquerade procession, historically held to honour royalty and notable members of the community.",
      source: "https://nico.gov.ng/eyo-festival-of-lagos/",
      sourceName: "National Institute for Cultural Orientation",
    },
    {
      text: "Felabration began with an idea from Yeni Kuti in 1998: a festival celebrating her father Fela Kuti's life and music. It grew into a week-long event at the New Afrika Shrine.",
      source: "https://www.felabration.net/about",
      sourceName: "Felabration",
    },
    {
      text: "You can walk above the treetops in Lagos: Lekki Conservation Centre is home to Africa's longest canopy walkway.",
      source:
        "https://ncfnigeria.org/lekki-conservation-centre-the-green-soul-of-lagos-metropolis/",
      sourceName: "Nigerian Conservation Foundation",
    },
  ],
  "2643743": [
    {
      text: "Big Ben is the name of the great bell inside the Elizabeth Tower, rather than the tower's official name.",
      source:
        "https://www.parliament.uk/about/living-heritage/building/palace/architecture/palacestructure/towers-of-parliament/",
      sourceName: "UK Parliament",
    },
    {
      text: "The world's first underground railway opened in London in 1863, long before modern electric Tube trains.",
      source:
        "https://library.ltmuseum.co.uk/Portal/Default/en-GB/RecordView/Index/108",
      sourceName: "London Transport Museum",
    },
    {
      text: "The Great Fire of London began in a baker's shop on a street called Pudding Lane in 1666.",
      source:
        "https://www.london-fire.gov.uk/museum/london-fire-brigade-history-and-stories/fires-and-incidents-that-changed-history/the-great-fire-of-london/",
      sourceName: "London Fire Brigade",
    },
  ],
  "5128581": [
    {
      text: "The Statue of Liberty was a gift from France and was dedicated in New York Harbor in 1886.",
      source:
        "https://www.mcny.org/story/myths-surrounding-origin-statue-liberty",
      sourceName: "Museum of the City of New York",
    },
    {
      text: "The Brooklyn Bridge was the world's longest suspension bridge when it opened on 24 May 1883.",
      source:
        "https://www.nyc.gov/html/dot/html/pr2024/brooklyn-bridge-glow-up.shtml",
      sourceName: "NYC Department of Transportation",
    },
    {
      text: "Central Park covers 843 acres in the middle of Manhattan.",
      source:
        "https://www.nyc.gov/site/nypd/bureaus/patrol/precincts/central-park-precinct.page",
      sourceName: "City of New York",
    },
  ],
  "6167865": [
    {
      text: "Toronto's CN Tower rises 553.33 metres above the city.",
      source: "https://www.mint.ca/en-us/blog/2026-04-history-of-the-cn-tower",
      sourceName: "Royal Canadian Mint",
    },
    {
      text: "The CN Tower introduced its famous glass floor in 1994, letting visitors look down through the floor beneath their feet.",
      source: "https://www.mint.ca/en-us/blog/2026-04-history-of-the-cn-tower",
      sourceName: "Royal Canadian Mint",
    },
    {
      text: "The CN Tower held the title of world's tallest freestanding structure for more than 30 years.",
      source: "https://www.mint.ca/en-us/blog/2026-04-history-of-the-cn-tower",
      sourceName: "Royal Canadian Mint",
    },
  ],
};
