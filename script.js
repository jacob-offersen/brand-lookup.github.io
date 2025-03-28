document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.querySelector('.search-box');
    const searchResults = document.getElementById('search-results');

    // Embed the brands data directly
    const brands =
        // Start of auto generated brand data
[
    {
        "name": "AMD",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "AOC",
        "details": {
            "Country": "Taiwan"
        }
    },
    {
        "name": "Acer",
        "details": {
            "Country": "Taiwan"
        }
    },
    {
        "name": "Alfa Romeo",
        "details": {
            "Country": "Italy"
        }
    },
    {
        "name": "Allianz",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Alpine",
        "details": {
            "Country": "France"
        }
    },
    {
        "name": "Amazon",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Analog Devices",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Apple",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Arla",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Asus",
        "details": {
            "Country": "Taiwan"
        }
    },
    {
        "name": "Audi",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Axe",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
        }
    },
    {
        "name": "B&O",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "BMW",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "BYD Electronic",
        "details": {
            "Country": "China"
        }
    },
    {
        "name": "Bacardi",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Ben & Jerrys",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
        }
    },
    {
        "name": "BenQ",
        "details": {
            "Country": "Taiwan"
        }
    },
    {
        "name": "Bilka",
        "details": {
            "Country": "Denmark",
            "Owned By": "Salling Group"
        }
    },
    {
        "name": "Bolt",
        "details": {
            "Country": "Estland"
        }
    },
    {
        "name": "Booking.com",
        "details": {
            "Country": "Netherlands"
        }
    },
    {
        "name": "Bosch",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Bose",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Braun",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Brother Industries",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Cadillac",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Canon",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Capri-Sun",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Carlsberg",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Chevrolet",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Citroen",
        "details": {
            "Country": "France"
        }
    },
    {
        "name": "Coca-Cola",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Coloplast",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Costa Coffee",
        "details": {
            "Headquaters in": "UK",
            "Owned by": "Coca-Cola Company",
            "Owner in": "USA"
        }
    },
    {
        "name": "Cupra",
        "details": {
            "Country": "Spain"
        }
    },
    {
        "name": "D-Link",
        "details": {
            "Country": "Taiwan"
        }
    },
    {
        "name": "DFDS",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "DHL",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Dacia",
        "details": {
            "Country": "Romania"
        }
    },
    {
        "name": "Dell",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Dior",
        "details": {
            "Country": "France"
        }
    },
    {
        "name": "Dove",
        "details": {
            "Country": "UK",
            "Owned By": "Unilever"
        }
    },
    {
        "name": "Dr. Pepper",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Dunkin Donuts",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Dyson",
        "details": {
            "Country": "UK"
        }
    },
    {
        "name": "Ecco",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Eclipse",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Edeka",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Electrolux",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "Eva Water",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Fanta",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Ferrari",
        "details": {
            "Country": "Italy"
        }
    },
    {
        "name": "Fiat",
        "details": {
            "Country": "Italy"
        }
    },
    {
        "name": "Fiskars",
        "details": {
            "Country": "Finland"
        }
    },
    {
        "name": "Fitbit",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Ford",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Frisko",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
        }
    },
    {
        "name": "Fujifilm",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Fuzetea",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "F\u00f8tex",
        "details": {
            "Country": "Denmark",
            "Owned By": "Salling Group"
        }
    },
    {
        "name": "Gjensidige",
        "details": {
            "Country": "Norway"
        }
    },
    {
        "name": "Google",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Grundig",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Guinness",
        "details": {
            "Country": "Ireland"
        }
    },
    {
        "name": "H&M",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "HP",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "HTC",
        "details": {
            "Country": "Taiwan"
        }
    },
    {
        "name": "Heineken",
        "details": {
            "Country": "Netherlands"
        }
    },
    {
        "name": "Hellmanns",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
        }
    },
    {
        "name": "Honda",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Huawei",
        "details": {
            "Country": "China"
        }
    },
    {
        "name": "Husqvarna",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "Hyundai",
        "details": {
            "Country": "South Korea"
        }
    },
    {
        "name": "IBM",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Innocent",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Intel",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "JBL",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Jameson",
        "details": {
            "Country": "Ireland"
        }
    },
    {
        "name": "Jeep",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Jysk",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "KLM",
        "details": {
            "Country": "Netherlands"
        }
    },
    {
        "name": "Kenwood",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Kingston",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "KitKat",
        "details": {
            "Country": "UK"
        }
    },
    {
        "name": "Klarna",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "Knorr",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
        }
    },
    {
        "name": "Kone",
        "details": {
            "Country": "Finland"
        }
    },
    {
        "name": "LG",
        "details": {
            "Country": "South Korea"
        }
    },
    {
        "name": "Land Rover",
        "details": {
            "Country": "UK"
        }
    },
    {
        "name": "Lego",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Lenovo",
        "details": {
            "Country": "Hong Kong"
        }
    },
    {
        "name": "Lidl",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Lipton",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
        }
    },
    {
        "name": "Logitech",
        "details": {
            "Country": "Switzerland"
        }
    },
    {
        "name": "Loreal",
        "details": {
            "Country": "France"
        }
    },
    {
        "name": "Lotus",
        "details": {
            "Country": "Belgium"
        }
    },
    {
        "name": "Lucid",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Lufthansa",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Maersk",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Magnum",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
        }
    },
    {
        "name": "Mango",
        "details": {
            "Country": "Spain"
        }
    },
    {
        "name": "Martini",
        "details": {
            "Country": "Italy"
        }
    },
    {
        "name": "Mazda",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "McDonalds",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "MediaTek",
        "details": {
            "Country": "Taiwan"
        }
    },
    {
        "name": "Medion",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Mercedes-Benz",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Michelin",
        "details": {
            "Country": "France"
        }
    },
    {
        "name": "Microsoft",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Miele",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Mitsubishi",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Mountain Dew",
        "details": {
            "Country": "USA",
            "Owned By": "PepsiCo"
        }
    },
    {
        "name": "Nestle",
        "details": {
            "Country": "Switzerland"
        }
    },
    {
        "name": "Netto",
        "details": {
            "Country": "Denmark",
            "Owned By": "Salling Group"
        }
    },
    {
        "name": "Nike",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Nikon",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Nintendo",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Nissan",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Nokia",
        "details": {
            "Country": "Finland"
        }
    },
    {
        "name": "Nordea",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "Novo Nordisk",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Nutella",
        "details": {
            "Country": "Italy"
        }
    },
    {
        "name": "Nvidia",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "OnePlus",
        "details": {
            "Country": "China"
        }
    },
    {
        "name": "Oppo",
        "details": {
            "Country": "China"
        }
    },
    {
        "name": "Orkla",
        "details": {
            "Country": "Norway"
        }
    },
    {
        "name": "Oysho",
        "details": {
            "Country": "Spain"
        }
    },
    {
        "name": "Packard Bell",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Panasonic",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Pandora",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Pepsi",
        "details": {
            "Country": "USA",
            "Owned By": "PepsiCo"
        }
    },
    {
        "name": "Peugeot",
        "details": {
            "Country": "France"
        }
    },
    {
        "name": "Philips",
        "details": {
            "Country": "Netherlands"
        }
    },
    {
        "name": "Pioneer",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Polestar",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "Porsche",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Powerade",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Qualcomm",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Randstad",
        "details": {
            "Country": "Netherlands"
        }
    },
    {
        "name": "Realtek",
        "details": {
            "Country": "Taiwan"
        }
    },
    {
        "name": "Renault",
        "details": {
            "Country": "France"
        }
    },
    {
        "name": "Renesas",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Rolex",
        "details": {
            "Country": "Switzerland"
        }
    },
    {
        "name": "Ryanair",
        "details": {
            "Country": "Ireland"
        }
    },
    {
        "name": "R\u00f8de Microphones",
        "details": {
            "Country": "Australia"
        }
    },
    {
        "name": "SEAT",
        "details": {
            "Country": "Spain"
        }
    },
    {
        "name": "Salling",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Samsung",
        "details": {
            "Country": "South Korea"
        }
    },
    {
        "name": "Schneider Electric",
        "details": {
            "Country": "France"
        }
    },
    {
        "name": "Schweppes",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Seagate",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Sennheiser",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Shell",
        "details": {
            "Country": "UK"
        }
    },
    {
        "name": "Siemens",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Skoda",
        "details": {
            "Country": "Czech Republic"
        }
    },
    {
        "name": "Skype",
        "details": {
            "Country": "Estland"
        }
    },
    {
        "name": "Smart Water",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Sonos",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Sony",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Spotify",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "Sprite",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Suzuki",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "TP-Link",
        "details": {
            "Country": "China"
        }
    },
    {
        "name": "TSMC",
        "details": {
            "Country": "Taiwan"
        }
    },
    {
        "name": "Telenor",
        "details": {
            "Country": "Norway"
        }
    },
    {
        "name": "Telia",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "Tesco",
        "details": {
            "Country": "UK"
        }
    },
    {
        "name": "Tesla",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Texas Instruments",
        "details": {
            "Country": "USA"
        }
    },
    {
        "name": "Thule",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "Tomtom",
        "details": {
            "Country": "Netherlands"
        }
    },
    {
        "name": "Toshiba",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Toyota",
        "details": {
            "Country": "Japan"
        }
    },
    {
        "name": "Trust",
        "details": {
            "Country": "Netherlands"
        }
    },
    {
        "name": "Unilever",
        "details": {
            "Country": "UK"
        }
    },
    {
        "name": "Vaseline",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
        }
    },
    {
        "name": "Velux",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Vestas",
        "details": {
            "Country": "Denmark"
        }
    },
    {
        "name": "Vitamin Water",
        "details": {
            "Country": "USA",
            "Owned by": "Coca-Cola Company"
        }
    },
    {
        "name": "Volkswagen",
        "details": {
            "Country": "Germany"
        }
    },
    {
        "name": "Volvo",
        "details": {
            "Country": "Sweden"
        }
    },
    {
        "name": "XPeng",
        "details": {
            "Country": "China"
        }
    },
    {
        "name": "Xiaomi",
        "details": {
            "Country": "China"
        }
    },
    {
        "name": "Zara",
        "details": {
            "Country": "Spain"
        }
    },
    {
        "name": "Zendium",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
        }
    }
]
// End of auto generated brand data
        ;

    searchBox.addEventListener('input', function () {
        const query = searchBox.value.toLowerCase();
        const filteredResults = brands.filter(item => item.name.toLowerCase().includes(query));

        // Clear previous results
        searchResults.innerHTML = '';

        // Display new results
        filteredResults.forEach(result => {
            const li = document.createElement('li');

            // Create a span for the brand name with a specific class
            const brandName = document.createElement('span');
            brandName.className = 'brand-name';
            brandName.textContent = result.name;
            li.appendChild(brandName);
            li.appendChild(document.createElement('br')); // Line break after brand name

            // Append details dictionary keys and values with line breaks
            const detailsArray = Object.entries(result.details);
            detailsArray.forEach(([key, value]) => {
                li.innerHTML += `${key}: ${value}<br>`;
            });

            searchResults.appendChild(li);
        });
    });
});
