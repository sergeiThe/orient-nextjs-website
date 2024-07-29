const services = {
  singlePersonMassage: [
    {
      id: "s1",
      title: "Tradisjonell Thaimassasje",
      description:
        "Trykkpunktmassasje og forsiktig strekking av ledd og muskler reduserer spenninger, myker opp muskler og gir en avslappet opplevelse av velvære og ro i kropp og sinn.",
      pricings: [
        { time: "60", price: "800" },
        { time: "75", price: "990" },
        { time: "90", price: "1200" },
        { time: "120", price: "1550" },
      ],
    },
    {
      id: "s2",
      title: "Thai Oljemassasje",
      description:
        "Oljemassasje bidrar til økt velvære, avslapning og reduksjon av stress og spenninger. Denne massasjeformen er egnet for alle som ønsker et avbrekk fra en stressende hverdag. Ved oljemassasje brukes olje og terapeutens egne hender for å løse opp og stimulere muskulatur.",
      pricings: [
        { time: "60", price: "800" },
        { time: "75", price: "990" },
        { time: "90", price: "1200" },
        { time: "120", price: "1550" },
      ],
    },
    {
      id: "s3",
      title: "Hot Stone Massasje",
      description:
        "Opplev en dypt avslappende reise med vår hot stone massasje. Våre erfarne terapeuter bruker varme, glatte steiner plassert strategisk på kroppen din for å løsne opp spenninger, øke blodsirkulasjonen og fremme dyp avslapning.",
      pricings: [
        { time: "60", price: "850" },
        { time: "75", price: "1050" },
        { time: "90", price: "1250" },
      ],
    },
    {
      id: "s4",
      title: "Rygg, nakke, skuldre og hode",
      description: "Thaimassasje ekstra fokusert på den øvre delen av kroppen",
      pricings: [
        { time: "75", price: "990" },
        { time: "90", price: "1200" },
        { time: "120", price: "1550" },
      ],
    },
    {
      id: "s5",
      title: "Fotmassasje",
      description:
        "Nyt øyeblikk av velvære med vår forfriskende fotmassasje. Våre dyktige terapeuter bruker beroligende teknikker for å lindre spenninger, forbedre blodsirkulasjonen og gjenopplive slitne føtter. La deg synke ned i komforten mens du nyter en kombinasjon av massasje, trykkpunktsstimulering og pleiende berøringer.",
      pricings: [
        { time: "30", price: "500" },
        { time: "60", price: "800" },
      ],
    },
    {
      id: "s6",
      title: "Gravid massasje",
      description:
        "Opplev den ultimate avslapningen skreddersydd for gravide med vår spesialiserte svangerskapsmassasje. Våre dyktige terapeuter bruker milde teknikker for å lindre vanlige ubehag under graviditeten, som ryggsmerter, hevelse og stress. Føl deg fornyet og ivaretatt i et trygt og beroligende miljø som fremmer både ditt velvære og din voksende baby. Unn deg et øyeblikk av ro midt i morskapets reise.",
      pricings: [{ time: "60", price: "800" }],
    },
    {
      id: "s7",
      title: "Aromaterapi",
      description:
        "Utforsk en verden av sanselig velvære med vår aromaterapi-tjeneste. Ved hjelp av nøye utvalgte essensielle oljer og dufter skreddersyr våre erfarne terapeuter en unik behandling som roer sinnet, lindrer stress og fremmer indre balanse.",
      pricings: [
        { time: "60", price: "850" },
        { time: "75", price: "1060" },
        { time: "90", price: "1250" },
      ],
    },
  ],
  coupleMassage: [
    {
      id: "c1",
      title: "Oljemassasje for 2 personer",
      pricings: [
        { time: "60", price: "1580" },
        { time: "75", price: "1950" },
        { time: "90", price: "2350" },
        { time: "120", price: "3090" },
      ],
    },
    {
      id: "c2",
      title: "Tradisjonell Thaimassasje for 2 personer",
      pricings: [
        { time: "60", price: "1580" },
        { time: "75", price: "1950" },
        { time: "90", price: "2350" },
        { time: "120", price: "3090" },
      ],
    },
    {
      id: "c3",
      title: "Rygg-, nakke-, skuldre- og hodemassasje for 2 personer",
      pricings: [
        { time: "50", price: "1400" },
        { time: "60", price: "1500" },
        { time: "75", price: "1800" },
        { time: "90", price: "2200" },
      ],
    },
  ],
};

export default services;
