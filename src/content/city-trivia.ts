export interface CityFact {
  text: string;
  source: string;
  sourceName: string;
}
// Short, sourced trivia. Each city has a pool so refreshes can show a different fact.
export const cityTrivia: Readonly<Record<string, readonly CityFact[]>> = {
  "2759794": [
    {
      text: "Amsterdam's famously narrow houses reflect an old tax rule: owners were taxed on how wide their frontage was.",
      source:
        "https://www.iamsterdam.com/en/see-and-do/attractions-and-sights/weird-and-wonderful-houses",
      sourceName: "I amsterdam",
    },
    {
      text: "The one-metre-wide facade at Amsterdam's Singel 7 is deceptive—it's actually the back of the house.",
      source:
        "https://www.iamsterdam.com/en/see-and-do/attractions-and-sights/weird-and-wonderful-houses",
      sourceName: "I amsterdam",
    },
    {
      text: "Amsterdam's old houses used picture plaques to identify their owners or trades when many people couldn't read.",
      source:
        "https://www.iamsterdam.com/en/see-and-do/attractions-and-sights/weird-and-wonderful-houses",
      sourceName: "I amsterdam",
    },
  ],
  "3067696": [
    {
      text: "Prague's Old Town Astronomical Clock dates from 1410 and still stages its procession of twelve apostles.",
      source:
        "https://prague.eu/en/objevujte/old-town-hall-with-astronomical-clock-staromestska-radnice-s-orlojem",
      sourceName: "Prague City Tourism",
    },
    {
      text: "Prague's Klementinum has a continuous record of daily temperature measurements stretching back to 1775.",
      source: "https://prague.eu/cs/fakta-a-zajimavosti/",
      sourceName: "Prague City Tourism",
    },
  ],
  "360630": [
    {
      text: "Cairo's Hanging Church isn't hanging from ropes: it was built above the ruins of a Roman fortress.",
      source: "https://egymonuments.gov.eg/monuments/the-hanging-church/",
      sourceName: "Egypt Ministry of Tourism and Antiquities",
    },
    {
      text: "The ceiling of Cairo's Hanging Church was designed to resemble Noah's Ark.",
      source: "https://egymonuments.gov.eg/monuments/the-hanging-church/",
      sourceName: "Egypt Ministry of Tourism and Antiquities",
    },
  ],
  "1261481": [
    {
      text: "Delhi's flower-shaped Lotus Temple is made from 27 marble-clad petals, arranged in groups of three.",
      source: "https://delhitourism.gov.in/dt/efilm/docs/GlimpsesofDelhi.pdf",
      sourceName: "Delhi Tourism",
    },
    {
      text: "An ancient water reservoir hides among central Delhi's streets: Agrasen ki Baoli, reached by a long flight of stone steps.",
      source:
        "https://www.delhitourism.gov.in/dt/explore_the_city/agrasen_ki_baoli.html",
      sourceName: "Delhi Tourism",
    },
  ],
  "1835848": [
    {
      text: "Seoul's grassy Haneul Park used to be a landfill. The old rubbish site became an ecological park.",
      source: "https://english.seoul.go.kr/haneul-park-seoul/",
      sourceName: "Seoul Metropolitan Government",
    },
    {
      text: "Seoul removed roads covering Cheonggyecheon to bring the stream back into daylight. The restored waterway reopened in 2005.",
      source:
        "https://english.seoul.go.kr/seoul-views/meaning-of-seoul/1-history/",
      sourceName: "Seoul Metropolitan Government",
    },
  ],
  "1880252": [
    {
      text: "Singapore's Merlion is half lion and half fish: its fish body recalls the island's fishing-village beginnings.",
      source:
        "https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/marina-bay/merlion-park/",
      sourceName: "Singapore Tourism Board",
    },
    {
      text: "Some of Singapore's Supertrees harvest sunlight: solar cells on their canopies help power their nighttime lighting.",
      source:
        "https://www.gardensbythebay.com.sg/en/about-us/our-gardens-story/sustainability-efforts.html",
      sourceName: "Gardens by the Bay",
    },
  ],
  "2158177": [
    {
      text: "Melbourne Central shopping centre was built around a historic shot tower, enclosing it in a 20-storey glass cone.",
      source: "https://www.melbournecentral.com.au/centre-info/our-heritage",
      sourceName: "Melbourne Central",
    },
    {
      text: "Melbourne Central's giant Marionette Watch stages a little show: Australian animals dance to Waltzing Matilda on the hour.",
      source: "https://www.melbournecentral.com.au/centre-info/our-heritage",
      sourceName: "Melbourne Central",
    },
  ],
  "2306104": [
    {
      text: "Accra's Kwame Nkrumah Mausoleum is shaped like upside-down swords, an Akan symbol of peace.",
      source: "https://visitghana.com/kwame-nkrumah-memorial-park-2/",
      sourceName: "Ghana Tourism Authority",
    },
    {
      text: "The museum at Accra's Kwame Nkrumah Memorial Park sits underground so it doesn't compete visually with the mausoleum.",
      source: "https://visitghana.com/kwame-nkrumah-memorial-park-2/",
      sourceName: "Ghana Tourism Authority",
    },
  ],
  "2761369": [
    {
      text: "Vienna's Perzy snow globes grew out of an experiment to improve lighting for surgery.",
      source:
        "https://schneekugel.at/geschichte?___from_store=vienna_de&___store=vienna_en",
      sourceName: "Original Vienna Snow Globes",
    },
    {
      text: "Vienna's famous Sacher-Torte was created by a 16-year-old apprentice, Franz Sacher, for Prince Metternich's guests.",
      source: "https://www.sacher.com/en/world-of-sacher/sacher-history/",
      sourceName: "Hotel Sacher",
    },
  ],
  "2950159": [
    {
      text: "Berlin's bright pink pipes aren't decoration. They carry groundwater away from construction sites.",
      source: "https://www.visitberlin.de/en/blog/mysteries-berlin",
      sourceName: "visitBerlin",
    },
    {
      text: "Berlin's Kurfürstendamm skips house numbers 1–10 and 77–89. A street renaming explains the first gap; the second remains a mystery.",
      source: "https://www.visitberlin.de/en/blog/mysteries-berlin",
      sourceName: "visitBerlin",
    },
  ],
  "3117735": [
    {
      text: "You can eat at a record-holding restaurant in Madrid: Botín, founded in 1725, is recognised by Guinness as the world's oldest restaurant.",
      source: "https://www.esmadrid.com/en/restaurants/botin",
      sourceName: "Madrid Tourism",
    },
    {
      text: "Madrid's symbol pairs an unlikely duo: a bear reaching up to a strawberry tree.",
      source: "https://www.esmadrid.com/en/things-you-can-only-do-madrid",
      sourceName: "Madrid Tourism",
    },
  ],
  "3169070": [
    {
      text: "Rome's Pantheon is as tall inside as its dome is wide—just over 43 metres.",
      source: "https://www.turismoroma.it/it/node/1107",
      sourceName: "Rome Tourism",
    },
    {
      text: "A first-century basilica was hidden beneath Rome's railway until it was discovered in 1917 near Porta Maggiore.",
      source: "https://www.turismoroma.it/en/node/43102",
      sourceName: "Rome Tourism",
    },
  ],
  "3369157": [
    {
      text: "Cape Town has a time signal you can hear: the Noon Gun is a cannon fired from the slopes of Signal Hill.",
      source:
        "https://www.capetown.travel/discover-cape-towns-signature-yellow-frames/",
      sourceName: "Cape Town Tourism",
    },
    {
      text: "Cape Town has beach-going penguins: an African penguin colony lives at Boulders Beach.",
      source:
        "https://www.capetown.travel/get-to-know-the-african-penguins-at-boulders-beach/",
      sourceName: "Cape Town Tourism",
    },
  ],
  "4887398": [
    {
      text: "Chicago engineers reversed the flow of the Chicago River in 1900, sending its water away from Lake Michigan.",
      source:
        "https://www.choosechicago.com/press-media/toolkit/chicago-facts/",
      sourceName: "Choose Chicago",
    },
    {
      text: "Chicago's shiny 'Bean' looks seamless, but Cloud Gate was made from 168 stainless-steel plates welded together.",
      source:
        "https://www.choosechicago.com/blog/arts-culture-entertainment/10-things-you-shouldnt-miss-at-chicagos-millennium-park-campus/",
      sourceName: "Choose Chicago",
    },
    {
      text: "Chicago turns its river green to celebrate St Patrick's Day.",
      source:
        "https://cdn.choosechicago.com/uploads/2019/08/Chicago_Fun_Facts_2c08cc8b-5ce1-4eb1-aba1-4eb4b0c0ca8b.pdf",
      sourceName: "Choose Chicago",
    },
  ],
  "4930956": [
    {
      text: "Boston cream pie is actually a sponge cake filled with custard. The dessert originated at Boston's Parker House.",
      source: "https://www.omnihotels.com/media-center/recent-news/110120",
      sourceName: "Omni Parker House",
    },
    {
      text: "Charles Dickens gave a private reading of A Christmas Carol at Boston's Parker House in 1867.",
      source:
        "https://www.omnihotels.com/hotels/boston-parker-house/property-details/history",
      sourceName: "Omni Parker House",
    },
    {
      text: "Boston opened the United States' first subway in 1897, underneath busy Tremont Street.",
      source:
        "https://content.boston.gov/sites/default/files/file/document_files/2017/03/go_boston_2030_-_1_plan_overview_spreads.pdf",
      sourceName: "City of Boston",
    },
  ],
  "184745": [
    {
      text: "At Nairobi's Sheldrick elephant nursery, a keeper sleeps beside each baby elephant so it has company through the night.",
      source:
        "https://www.sheldrickwildlifetrust.org/projects/orphans/raise-an-orphan-elephant",
      sourceName: "Sheldrick Wildlife Trust",
    },
    {
      text: "Baby elephants at Nairobi's Sheldrick nursery get sunscreen on their ears on sunny days—and umbrellas when it rains.",
      source:
        "https://www.sheldrickwildlifetrust.org/projects/orphans/raise-an-orphan-elephant",
      sourceName: "Sheldrick Wildlife Trust",
    },
    {
      text: "Nairobi's rescued baby elephants attend 'bush school': daily outings to learn to forage, play and take mud baths before returning to the wild.",
      source:
        "https://www.sheldrickwildlifetrust.org/projects/orphans/raise-an-orphan-elephant",
      sourceName: "Sheldrick Wildlife Trust",
    },
  ],
  "2352778": [
    {
      text: "Abuja borrowed its name from another town: the original Abuja was renamed Suleja when the new capital took the name.",
      source: "https://fcda.gov.ng/the-history-of-abuja/",
      sourceName: "Federal Capital Development Authority",
    },
    {
      text: "Before choosing and planning Abuja, Nigeria's capital-location panel toured other world capitals to learn how a new capital could be built.",
      source: "https://fcda.gov.ng/the-history-of-abuja/",
      sourceName: "Federal Capital Development Authority",
    },
  ],
  "4140963": [
    {
      text: "The Washington Monument changes colour partway up because construction paused for 25 years and resumed with marble from different quarries.",
      source: "https://www.nps.gov/wamo/faqs.htm",
      sourceName: "US National Park Service",
    },
    {
      text: "A letter on the Lincoln Memorial was carved as an E instead of an F. The engraver's mistake was corrected by filling part of the carving.",
      source:
        "https://home.nps.gov/linc/learn/historyculture/lincoln-memorial-myths.htm",
      sourceName: "US National Park Service",
    },
    {
      text: "The Smithsonian was funded by James Smithson, a British scientist who never visited the United States during his lifetime.",
      source:
        "https://www.si.edu/newsdesk/factsheets/james-smithson-biographical-information",
      sourceName: "Smithsonian Institution",
    },
  ],
  "1850147": [
    {
      text: "Tokyo's old name was Edo. Its new name, adopted in 1868, means 'eastern capital'.",
      source: "https://museumcollection.tokyo/en/works/6244159/",
      sourceName: "Tokyo Museum Collection",
    },
    {
      text: "Tokyo Skytree's 634-metre height is wordplay: the digits can be read as 'Musashi', the old name of the surrounding province.",
      source: "https://www.tokyo-skytree.jp/press/pdf/2009101602_e.pdf",
      sourceName: "Tokyo Skytree",
    },
    {
      text: "Japan's first railway connected Tokyo's Shimbashi with Yokohama in 1872—long before the bullet train.",
      source: "https://www.english.metro.tokyo.lg.jp/w/000-101-007591",
      sourceName: "Tokyo Metropolitan Government",
    },
  ],
  "2147714": [
    {
      text: "The Sydney Opera House's roof sails are covered with roughly a million individual tiles.",
      source:
        "https://www.sydneyoperahouse.com/sites/default/files/collaborodam_assets/tourism-sales-manual-december-2020.pdf",
      sourceName: "Sydney Opera House",
    },
    {
      text: "The Sydney Opera House sets its Concert Hall to 22.5°C for the Sydney Symphony Orchestra to help keep the instruments in tune.",
      source:
        "https://www.sydneyoperahouse.com/sites/default/files/collaborodam_assets/tourism-sales-manual-december-2020.pdf",
      sourceName: "Sydney Opera House",
    },
    {
      text: "Seven Airbus A380s could fit wing-to-wing on the Sydney Opera House site.",
      source:
        "https://www.sydneyoperahouse.com/sites/default/files/collaborodam_assets/tourism-sales-manual-december-2020.pdf",
      sourceName: "Sydney Opera House",
    },
  ],
  "2332459": [
    {
      text: "Lagos's Eyo masquerades can cover 20–30 kilometres in a single festival day—quite a walk in flowing robes.",
      source: "https://nico.gov.ng/eyo-festival-of-lagos/",
      sourceName: "National Institute for Cultural Orientation",
    },
    {
      text: "Felabration began with Yeni Kuti's idea to celebrate her father Fela's music. That tribute became a week-long festival.",
      source: "https://www.felabration.net/about",
      sourceName: "Felabration",
    },
    {
      text: "You can walk above the treetops in Lagos: Lekki Conservation Centre has Africa's longest canopy walkway.",
      source:
        "https://ncfnigeria.org/lekki-conservation-centre-the-green-soul-of-lagos-metropolis/",
      sourceName: "Nigerian Conservation Foundation",
    },
  ],
  "2643743": [
    {
      text: "Big Ben is the bell, not the tower. The tower's official name is Elizabeth Tower.",
      source:
        "https://www.parliament.uk/about/living-heritage/building/palace/architecture/palacestructure/towers-of-parliament/",
      sourceName: "UK Parliament",
    },
    {
      text: "London's first underground railway opened in 1863, decades before electric Tube trains.",
      source:
        "https://library.ltmuseum.co.uk/Portal/Default/en-GB/RecordView/Index/108",
      sourceName: "London Transport Museum",
    },
    {
      text: "The Tower of London has a Ravenmaster. Legend says the kingdom will fall if the ravens leave.",
      source: "https://www.hrp.org.uk/tower-of-london/whats-on/the-ravens/",
      sourceName: "Historic Royal Palaces",
    },
  ],
  "2644210": [
    {
      text: "Before Liverpool FC existed, Everton played at Anfield. Liverpool was founded after Everton left the ground in 1892.",
      source:
        "https://www.liverpoolfc.com/info/how-liverpool-fc-was-founded-1892",
      sourceName: "Liverpool FC",
    },
    {
      text: "Liverpool's two cathedrals are connected by a street fittingly called Hope Street.",
      source:
        "https://liverpoolcathedral.org.uk/international-day-of-hope-finding-hope-together-on-hope-street/",
      sourceName: "Liverpool Cathedral",
    },
    {
      text: "The Beatles played Liverpool's Cavern Club 292 times, according to the club's own history.",
      source: "https://www.cavernclub.com/history/1960s/",
      sourceName: "Cavern Club",
    },
  ],
  "2988507": [
    {
      text: "The Eiffel Tower was only meant to stand for 20 years. Scientific experiments and radio transmissions helped save it.",
      source: "https://www.toureiffel.paris/en/the-monument/key-figures",
      sourceName: "Eiffel Tower",
    },
    {
      text: "Gustave Eiffel fitted a private apartment near the tower's summit—even making room for a piano.",
      source:
        "https://www.toureiffel.paris/en/news/130-years/did-gustave-eiffel-live-tower",
      sourceName: "Eiffel Tower",
    },
    {
      text: "The Eiffel Tower honours 72 scholars in golden lettering. Space was so tight that each surname had to fit within 12 letters.",
      source:
        "https://www.toureiffel.paris/en/news/130-years/whose-are-72-names-inscribed-eiffel-tower-and-why-are-they-there",
      sourceName: "Eiffel Tower",
    },
  ],
  "5128581": [
    {
      text: "New York's most famous welcoming figure arrived as a gift: France gave the Statue of Liberty to the United States.",
      source:
        "https://www.mcny.org/story/myths-surrounding-origin-statue-liberty",
      sourceName: "Museum of the City of New York",
    },
    {
      text: "The Brooklyn Bridge was the world's longest suspension bridge when it opened in 1883.",
      source:
        "https://www.nyc.gov/html/dot/html/pr2024/brooklyn-bridge-glow-up.shtml",
      sourceName: "NYC Department of Transportation",
    },
    {
      text: "Central Park's Belvedere Castle wasn't built for royalty. It was designed as a playful lookout over the park.",
      source: "https://www.centralparknyc.org/articles/belvedere-history",
      sourceName: "Central Park Conservancy",
    },
  ],
  "5391959": [
    {
      text: "San Francisco's Golden Gate Bridge isn't golden. Its distinctive paint colour is called International Orange.",
      source: "https://www.goldengate.org/faq/",
      sourceName: "Golden Gate Bridge District",
    },
    {
      text: "The US Navy proposed black-and-yellow stripes for the Golden Gate Bridge so ships could see it more easily.",
      source: "https://www.goldengate.org/faq/",
      sourceName: "Golden Gate Bridge District",
    },
    {
      text: "The wire in the Golden Gate Bridge's main cables could circle the Earth more than three times at the equator.",
      source:
        "https://www.pbs.org/wgbh/americanexperience/features/goldengate-spinning/",
      sourceName: "PBS American Experience",
    },
  ],
  "6167865": [
    {
      text: "A helicopter named Olga helped finish Toronto's CN Tower, lifting its antenna into place in 39 pieces.",
      source: "https://www.cntower.ca/history",
      sourceName: "CN Tower",
    },
    {
      text: "Toronto's CN Tower introduced its glass floor in 1994, so visitors could look straight down beneath their feet.",
      source: "https://www.mint.ca/en-us/blog/2026-04-history-of-the-cn-tower",
      sourceName: "Royal Canadian Mint",
    },
    {
      text: "Toronto's CN Tower held the world's tallest freestanding structure title for more than 30 years.",
      source: "https://www.mint.ca/en-us/blog/2026-04-history-of-the-cn-tower",
      sourceName: "Royal Canadian Mint",
    },
  ],
};
