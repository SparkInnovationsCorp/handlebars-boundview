class Widget1 extends HandlebarsBoundView {
    constructor(target) {
        super(target, "widgets/widget1.html");

        this.citiesByCountry = [
            {
                country: "United States",
                cities: [
                    {
                        name: "New York",
                        blurb: "Known as the Big Apple and the city that never sleeps.",
                    },
                    {
                        name: "Los Angeles",
                        blurb: "Famous for Hollywood and its entertainment industry.",
                    },
                    {
                        name: "Chicago",
                        blurb: "Renowned for its bold architecture and deep-dish pizza.",
                    },
                    {
                        name: "San Francisco",
                        blurb: "Home to the iconic Golden Gate Bridge and tech startups.",
                    },
                ],
            },
            {
                country: "Canada",
                cities: [
                    {
                        name: "Toronto",
                        blurb: "Canada's largest city and a global hub for business and culture.",
                    },
                    {
                        name: "Vancouver",
                        blurb: "Known for its breathtaking natural beauty and vibrant arts scene.",
                    },
                    {
                        name: "Montreal",
                        blurb: "Famous for its bilingual culture and historic architecture.",
                    },
                    {
                        name: "Calgary",
                        blurb: "Best known for the Calgary Stampede and its oil industry.",
                    },
                ],
            },
            {
                country: "United Kingdom",
                cities: [
                    {
                        name: "London",
                        blurb: "A historic city with iconic landmarks like the Big Ben and Buckingham Palace.",
                    },
                    {
                        name: "Manchester",
                        blurb: "Known for its significant contribution to music and sports.",
                    },
                    {
                        name: "Birmingham",
                        blurb: "A bustling center for culture and a diverse culinary scene.",
                    },
                    {
                        name: "Liverpool",
                        blurb: "The birthplace of The Beatles and a rich maritime heritage.",
                    },
                ],
            },
            {
                country: "Germany",
                cities: [
                    {
                        name: "Berlin",
                        blurb: "A city rich in history, known for its vibrant arts and nightlife scene.",
                    },
                    {
                        name: "Munich",
                        blurb: "Famous for its Oktoberfest, beer halls, and beautiful parks.",
                    },
                    {
                        name: "Frankfurt",
                        blurb: "A major financial hub with a skyline dominated by skyscrapers.",
                    },
                    {
                        name: "Hamburg",
                        blurb: "Known for its port, the Elbphilharmonie concert hall, and maritime culture.",
                    },
                ],
            },
            {
                country: "France",
                cities: [
                    {
                        name: "Paris",
                        blurb: "The city of love, known for the Eiffel Tower and its cafe culture.",
                    },
                    {
                        name: "Marseille",
                        blurb: "A historic port city with a vibrant multicultural community.",
                    },
                    {
                        name: "Lyon",
                        blurb: "Famous for its gastronomy and the historic Vieux Lyon district.",
                    },
                    {
                        name: "Toulouse",
                        blurb: "Known as the Pink City for its terracotta bricks and aerospace industry.",
                    },
                ],
            },
            {
                country: "Japan",
                cities: [
                    {
                        name: "Tokyo",
                        blurb: "A bustling metropolis blending the ultramodern with traditional culture.",
                    },
                    {
                        name: "Osaka",
                        blurb: "Known for its modern architecture, nightlife, and hearty street food.",
                    },
                    {
                        name: "Kyoto",
                        blurb: "Famous for its classical Buddhist temples, gardens, and imperial palaces.",
                    },
                    {
                        name: "Hokkaido",
                        blurb: "Renowned for its ski resorts, volcanic landscapes, and hot springs.",
                    },
                ],
            },
            {
                country: "Australia",
                cities: [
                    {
                        name: "Sydney",
                        blurb: "Famous for its Sydney Opera House and stunning harbour.",
                    },
                    {
                        name: "Melbourne",
                        blurb: "Known for its vibrant arts scene, cafes, and cultural festivals.",
                    },
                    {
                        name: "Brisbane",
                        blurb: "A sunny city famous for its outdoor lifestyle and friendly locals.",
                    },
                    {
                        name: "Perth",
                        blurb: "Known for its beautiful beaches, parks, and isolated location.",
                    },
                ],
            },
        ];

        this.country = "";
        this.city = "";
    }

    selectCountry(args) {
        this.country = args.country;
        this.city = args.cities[0].name;
    }

}
