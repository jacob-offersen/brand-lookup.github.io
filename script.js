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
        "name": "Eclipse",
        "details": {
            "Country": "Japan"
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
        "name": "Jeep",
        "details": {
            "Country": "USA"
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
        "name": "Knorr",
        "details": {
            "Country": "UK",
            "Owned by": "Unilever"
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
        "name": "Lenovo",
        "details": {
            "Country": "Hong Kong"
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
        "name": "Lucid",
        "details": {
            "Country": "USA"
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
