export function getAllProduct(){
    return PRODUCTDATA;
}

export function getProductById(id){

    return PRODUCTDATA.find(item => item.id === id);    
}

export const PRODUCTDATA = [
    {
      id: '001',
      title: 'White Leather Armchair',
      active: true, 
      price: 1120,
      imageUri: require('../assets/Product/AddieArmchair.png'),
      size: '80x28x202cm',
      star:'★★★★☆',
      rating:'4.5/5 Rating',
      describe:'Featuring a sturdy hardwood frame and plush foam cushions, it offers both style and comfort.',
      keyFeature: [
        {key:0, value:'Material: Soft, durable fabric'},
        {key:1, value:'Dimensions: 35\” (W) x 34\" (D) x 40\" (H)'},
        {key:2, value:'Weight: 50 lbs'},
        {key:3, value:'Seating Capacity: 1 person'},
    ],
    Comfort:[
        {key:0, value:'• Cushioning: High-density foam for superior comfort'},
        {key:1, value:'• Armrests: Padded for added support'},
        {key:2, value:'• Backrest: Ergonomically designed to support your back'}

    ],
    Assembly:[
        {key:0, value:'• Easy to assemble; tools included'},
        {key:1, value:'• Estimated assembly time: 20 minutes'},
    ],
    CareInstruction:[
        {key:0, value:'• Spot clean with a damp cloth'},
        {key:1, value:'• Avoid direct sunlight to prevent fading'},
    ],
    Warranty:[
        {key:0, value:'• 1-year warranty on manufacturing defects'},

    ]

    },
    {
        id: '002',
        title: 'Etta Ave Avianna Wool',
        active: false, 
        price: 350,
        imageUri: require('../assets/Product/EttaAveAviannaWool.png'),
        size: '80x28x202cm',
    },
    {
        id: '003',
        active: false, 
        title: 'Wooden Bookshelves',
        price: 350,
        imageUri: require('../assets/Product/WoodenBookshelves.png'),
        size: '80x28x202cm',
    },
    {
        id: '004',
        title: 'Harper King Memory Foam',
        active: false, 
        price: 350,
        imageUri: require('../assets/Product/HarperKingMemoryFoam.png'),
        size: '80x28x202cm',
    },
    {
        id: '005',
        title: 'Saint Leuve Wood Crib',
        active: false, 
        price: 350,
        imageUri: require('../assets/Product/SaintLeuveWoodCrib.png'),
        size: '80x28x202cm',
    },
    {
        id: '006',
        title: 'Multi-purpose Office Chair',
        active: false, 
        price: 350,
        imageUri: require('../assets/Product/Multi-purposeOfficeChair.png'),
        size: '80x28x202cm',
    },
    {
        id: '007',
        title: 'Curve Ivana Leather Sofa',
        active: false, 
        price: 350,
        imageUri: require('../assets/Product/CurveIvanaLeatherSofa.png'),
        size: '80x28x202cm',
    },
    {
        id: '008',
        title: 'Narra LED/DIM Desk Light',
        active: false, 
        price: 350,
        imageUri: require('../assets/Product/NarraLED:DIMDeskLight.png'),
        size: '80x28x202cm',
    },
    {
        id: '009',
        title: 'Kiana Outdoor Patio Set',
        active: false, 
        price: 350,
        imageUri: require('../assets/Product/KianaOutdoorPatioSet.png'),
        size: '80x28x202cm',
    },
    {
        id: '010',
        title: 'Bonevei Wood TV Stand',
        active: false, 
        price: 350,
        imageUri: require('../assets/Product/BoneveiWoodTVStand.png'),
        size: '80x28x202cm',
    },
    
    
  ]