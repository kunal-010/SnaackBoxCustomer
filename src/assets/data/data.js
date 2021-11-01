const parathas = require("./../images/MenuImages/parathas.jpg");
const chaat = require("./../images/MenuImages/chaat.jpg");
const dessert = require("./../images/MenuImages/dessert.jpg");
const snacks = require("./../images/MenuImages/snacks.jpg");
const breakfast = require("./../images/MenuImages/breakfast.jpg");
const beverages = require("./../images/MenuImages/beverages.jpg");
const softDrinks = require("./../images/MenuImages/softDrinks.jpg");
const ricePreparation = require("./../images/MenuImages/ricePreparation.jpg");

// Parathas
const alooParatha = require("./../images/MenuImages/Parathas/aloo-paratha.jpg");
const alooPudinaParatha = require("./../images/MenuImages/Parathas/aloo-pudina-paratha.jpg");
const alooCheeseParatha = require("./../images/MenuImages/Parathas/aloo-cheese-paratha.jpg");
const alooMethiParatha = require("./../images/MenuImages/Parathas/aloo-methi-paratha.jpg");
const alooPaneerParatha = require("./../images/MenuImages/Parathas/aloo-paneer-paratha.jpg");
const gobiParatha = require("./../images/MenuImages/Parathas/gobi-paratha.jpg");
const gobiCheeseParatha = require("./../images/MenuImages/Parathas/gobi-cheese-paratha.jpg");
const gobiPaneerParatha = require("./../images/MenuImages/Parathas/gobi-paneer-paratha.jpg");
const gobiPyaajParatha = require("./../images/MenuImages/Parathas/gobi-pyaaj-paratha.jpg");
const chocolateParatha = require("./../images/MenuImages/Parathas/chocolate-paratha.jpg");
const cheeseParatha = require("./../images/MenuImages/Parathas/cheese-paratha.jpg");
const paneerParatha = require("./../images/MenuImages/Parathas/paneer-paratha.jpg");
const methiParatha = require("./../images/MenuImages/Parathas/methi-paratha.jpg");

// Chaat
const basketChaat = require("./../images/MenuImages/Chaat/basket-chaat.jpg");
const samosaChaat = require("./../images/MenuImages/Chaat/samosa-chaat.jpg");
const kachoriChaat = require("./../images/MenuImages/Chaat/kachori-chaat.jpg");
const papadiChaat = require("./../images/MenuImages/Chaat/papdi-chaat.jpg");
const khomchaChaat = require("./../images/MenuImages/Chaat/khomcha-chaat.jpg");
const dahiWada = require("./../images/MenuImages/Chaat/dahi-wada.jpg");
const rajkachoriChaat = require("./../images/MenuImages/Chaat/raj-kachori-chaat.jpg");
const alooTikki = require("./../images/MenuImages/Chaat/aloo-tikki.jpg");
const bhelPuri = require("./../images/MenuImages/Chaat/bhel-puri.jpg");
const dahiBhel = require("./../images/MenuImages/Chaat/dahi-bhel.jpg");

// Dessert
const desiGheeJalebi = require("./../images/MenuImages/Dessert/desi-ghee-jalebi.jpg");
const rabadi = require("./../images/MenuImages/Dessert/rabadi.jpg");

// Snacks
const choleBhature = require("./../images/MenuImages/Snacks/chole-bhature.jpg");
const puriBhaji = require("./../images/MenuImages/Snacks/puri-bhaji.jpg");
const paavBhaji = require("./../images/MenuImages/Snacks/paav-bhaji.jpg");
const cheesePaavBhaji = require("./../images/MenuImages/Snacks/cheese-paav-bhaji.jpg");
const misalPav = require("./../images/MenuImages/Snacks/misal-pav.jpg");

// Breakfast
const vadaPav = require("./../images/MenuImages/BreakFast/vada-pav.jpg");
const samosa = require("./../images/MenuImages/BreakFast/samosa.jpg");
const breadPakoda = require("./../images/MenuImages/BreakFast/bread-pakoda.jpg");
const mirchiPakoda = require("./../images/MenuImages/BreakFast/mirchi-pakoda.jpg");
const poha = require("./../images/MenuImages/BreakFast/poha.jpg");

// Beverages
const tea = require("./../images/MenuImages/Beverages/tea.jpg");
const masalaChaas = require("./../images/MenuImages/Beverages/masala-chaas.jpg");
const dryFruitLassi = require("./../images/MenuImages/Beverages/dry-fruit-lassi.jpg");

// Soft Drinks
const mineralWater = require("./../images/MenuImages/SoftDrinks/mineral-water.jpg");
const coldCoffee = require("./../images/MenuImages/SoftDrinks/cold-coffee.jpg");

// Rice Preparation
const tavaPulav = require("./../images/MenuImages/RicePreparation/tava-pulav.jpg");
const cheesePulav = require("./../images/MenuImages/RicePreparation/cheese-pulav.jpg");
const paneerPulav = require("./../images/MenuImages/RicePreparation/paneer-pulav.jpg");

export default [
    {
        title: "Parathas",
        image: parathas,
        items: [
            {
                title: "Aloo Paratha",
                price: 70,
                image: alooParatha
            },
            {
                title: "Aloo Pudina Paratha",
                price: 80,
                image: alooPudinaParatha
            },
            {
                title: "Aloo Cheese Paratha",
                price: 100,
                image: alooCheeseParatha
            },
            {
                title: "Aloo Methi Paratha",
                price: 80,
                image: alooMethiParatha
            },
            {
                title: "Aloo Paneer Paratha",
                price: 100,
                image: alooPaneerParatha
            },
            {
                title: "Gobi Paratha",
                price: 80,
                image: gobiParatha
            },
            {
                title: "Gobi Cheese Paratha",
                price: 100,
                image: gobiCheeseParatha
            },
            {
                title: "Gobi Paneer Paratha",
                price: 100,
                image: gobiPaneerParatha
            },
            {
                title: "Gobi Pyaaj Paratha",
                price: 90,
                image: gobiPyaajParatha
            },
            {
                title: "Chocolate Paratha",
                price: 90,
                image: chocolateParatha
            },
            {
                title: "Cheese Paratha",
                price: 100,
                image: cheeseParatha
            },
            {
                title: "Paneer Paratha",
                price: 100,
                image: paneerParatha
            }
        ]
    },
    {
        title: "Chaat",
        image: chaat,
        items: [
            {
                title: "Basket Chaat",
                price: 70,
                image: basketChaat
            },
            {
                title: "Samosa Chaat",
                price: 60,
                image: samosaChaat
            },
            {
                title: "Kachori Chaat",
                price: 60,
                image: kachoriChaat
            },
            {
                title: "Papadi Chaat",
                price: 60,
                image: papadiChaat
            },
            {
                title: "Khomcha Chaat",
                price: 70,
                image: khomchaChaat
            },
            {
                title: "Dahi Wada",
                price: 70,
                image: dahiWada
            },
            {
                title: "Rajkachori Chaat",
                price: 100,
                image: rajkachoriChaat
            },
            {
                title: "Aloo Tikki",
                price: 50,
                image: alooTikki
            },
            {
                title: "Bhel Puri",
                price: 60,
                image: bhelPuri
            },
            {
                title: "Dahi Bhel",
                price: 70,
                image: dahiBhel
            }
        ]
    },
    {
        title: "Dessert",
        image: dessert,
        items: [
            {
                title: "Desi Ghee Jalebi",
                price: 40,
                image: desiGheeJalebi
            },
            {
                title: "Rabadi",
                price: 50,
                image: rabadi
            }
        ]
    },
    {
        title: "Snacks",
        image: snacks,
        items: [
            {
                title: "Chole Bhature",
                price: 80,
                image: choleBhature
            },
            {
                title: "Puri Bhaji",
                price: 70,
                image: puriBhaji
            },
            {
                title: "Paav Bhaji",
                price: 80,
                image: paavBhaji
            },
            {
                title: "Cheese Paav Bhaji",
                price: 100,
                image: cheesePaavBhaji
            },
            {
                title: "Misal Paav",
                price: 60,
                image: misalPav
            }
        ]
    },
    {
        title: "BreakFast",
        image: breakfast,
        items: [
            {
                title: "Vada Pav",
                price: 15,
                image: vadaPav
            },
            {
                title: "Samosa",
                price: 17,
                image: samosa
            },
            {
                title: "Bread Pakoda",
                price: 15,
                image: breadPakoda
            },
            {
                title: "Mirchi Pakoda",
                price: 20,
                image: mirchiPakoda
            },
            {
                title: "Poha",
                price: 20,
                image: poha
            }
        ]
    },
    {
        title: "Beverages",
        image: beverages,
        items: [
            {
                title: "Tea",
                price: "10",
                image: tea
            },
            {
                title: "Masala Chaas",
                price: "15",
                image: masalaChaas
            },{
                title: "Dry Fruit Lassi",
                price: "40",
                image: dryFruitLassi
            }
        ]
    },
    {
        title: "Soft Drinks",
        image : softDrinks,
        items : [
            {
                title: "Mineral Water",
                price: 20,
                image: mineralWater
            },
            {
                title: "Cold Coffee",
                price: 30,
                image: coldCoffee
            }
        ]
    },
    {
        title: "Rice Preparation",
        image: ricePreparation,
        items: [
            {
                title: "Tava Pulav",
                price: 80,
                image: tavaPulav
            },
            {
                title: "Cheese Pulav",
                price: 100,
                image: cheesePulav
            },{
                title: "Paneer Pulav",
                price: 120,
                image: paneerPulav
            }
        ]
    }
];