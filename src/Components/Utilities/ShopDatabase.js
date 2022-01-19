const shopData = [
    {
    itemId: 'P00001',
    category:'SHIRTS',
    name:'Teal Shirt by Roadster',
    desc: 'Teal blue solid casual shirt, has a spread collar, long sleeves, curved hem, one patch pocket',
    's_f':'Regular Fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2503522/2019/5/11/0690d08e-829c-4876-82a5-98421d48d3791557550179671-Roadster-Men-Teal-Regular-Fit-Solid-Casual-Shirt-47815575501-1.jpg",
    price:400
    },
    {
    itemId: 'P00002',
    category:'SHIRTS',
    name:'Checked Casual Shirt',
    desc: 'Red and blue checked casual shirt, has a button-down collar, button placket, 1 pocket, long sleeves, curved hem',
    's_f':'Regular Fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2042528/2017/9/28/11506599316866-Mast--Harbour-Men-Red--Blue-Regular-Fit-Checked-Casual-Shirt-7991506599316924-1.jpg",
    price:1450
    },
    {
    itemId: 'P00003',
    category:'SHIRTS',
    name:'Blue Shirt by WROGN',
    desc: 'Navy Blue striped casual shirt, has a mandarin collar, long sleeves, button placket, and curved hem',
    's_f':'Slim fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11361160/2020/2/24/6e48c2a4-5d44-48a1-9e89-ef45e60a6a671582535979796-WROGN-Men-SHIRTS-6061582535978238-1.jpg",
    price:900
    },
    {
    itemId: 'P00004',
    category:'SHIRTS',
    name:'Off-white printed t shirt',
    desc: 'Off-White and blue printed casual shirt, has a spread collar, long sleeves, curved hem',
    's_f':'Smart - Slim Fit',
    'm_c':'Cotton Linen | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7189947/2018/8/30/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg",
    price:250
    },
    {
    itemId: 'P00005',
    category:'SHIRTS',
    name:'Brown Slim Shirt',
    desc: 'Brown and black checked casual shirt, has a spread collar, long sleeves, curved hem, one patch pocket',
    's_f':'Regular Fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7324885/2019/12/4/f383d293-415a-4606-ab12-cc07ab603ec41575437710624-HIGHLANDER-Men-Brown--Black-Slim-Fit-Checked-Casual-Shirt-81-1.jpg",
    price:250
    },
    {
    itemId: 'P00006',
    category:'BOTTOM WEAR',
    name:'Blue Skinny Fit Jeans',
    desc: 'Navy Blue dark wash 5-pocket mid-rise jeans, clean look, light fade, has a button and zip closure, and waistband with belt loops',
    's_f':'28 | 30 | 32 | 34 - Skinny',
    'm_c':'98% cotton, 2% elastane | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11274548/2020/8/4/bbc5a1dd-ba40-43b7-8a2f-de7d25fbd38d1596533902419-Roadster-Men-Jeans-9271596533900219-1.jpg",
    price:350
    },
    {
    itemId: 'P00007',
    category:'BOTTOM WEAR',
    name:'Regular Fit Jeans',
    desc: 'Blue medium wash 5-pocket mid-rise jeans, clean look with light fade, has a button and zip closure, waistband with belt loops',
    's_f':'28 | 30 | 32 | 34 - Regular',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2485352/2019/8/20/b9d5cb2a-ee05-47cd-b7d1-e809315dda721566300907260-Mast--Harbour-Men-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretc-1.jpg",
    price:150
    },
    {
    itemId: 'P00008',
    category:'BOTTOM WEAR',
    name:'Cargo Jeans',
    desc: 'Black solid mid-rise cargos, has a button closure, six pockets',
    's_f':'28 | 30 | 32 | 34 - Regular',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8158623/2018/12/10/652871ab-5fea-4a9b-9612-ec0b012b95871544435868678-HIGHLANDER-Black-4011544435865519-1.jpg",
    price:10
    },
    {
    itemId: 'P00009',
    category:'HOODIES',
    name:'H&M Blue Hoodie',
    desc: 'Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.',
    's_f':'Regular Fit',
    'm_c':'60% Cotton, 40% Polyester| Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16570536/2021/12/21/ac7df940-009e-4ce6-a8b2-fd3e99db9ad41640081768320RelaxedFitHoodie1.jpg",
    price:900
    },
    {
    itemId: 'P00010',
    category:'HOODIES',
    name:'WROGN Black Hoodie',
    desc: 'Black and grey colourblocked sweatshirt, has a hood, one pockets, long sleeves, straight hem',
    's_f':'Regular Fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/12/2/260e8814-c28f-41ac-abfe-af7cb00db2691606898832837-1.jpg",
    price:550
    },
    {
    itemId: 'P00011',
    category:'SHOES',
    name:'Book',
    desc: 'Teal blue solid casual shirt, has a spread collar, long sleeves, curved hem, one patch pocket',
    's_f':'Regular Fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/12/2/260e8814-c28f-41ac-abfe-af7cb00db2691606898832837-1.jpg",
    price:150
    },
    {
    itemId: 'P00012',
    category:'SHOES',
    name:'Waterskin',
    desc: 'Teal blue solid casual shirt, has a spread collar, long sleeves, curved hem, one patch pocket',
    's_f':'Regular Fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/12/2/260e8814-c28f-41ac-abfe-af7cb00db2691606898832837-1.jpg",
    price:1050
    },
    {
    itemId: 'P00013',
    category:'HOODIES',
    name:'HIGHLANDER Hoodie',
    desc: 'White printed sweatshirt, has a hood, two pockets, long sleeves, straight hem',
    's_f':'Regular Fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/11/24/7c1e7ec4-17c6-4eb8-a429-d3bfa7f417d71606226074064-1.jpg",
    price:1150
    },
    {
    itemId: 'P00014',
    category:'HOODIES',
    name:'Avengers Hoodie',
    desc: 'Black printed sweatshirt, has a hood, long sleeves, straight hem',
    's_f':'Regular Fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2175460/2017/10/30/11509359669996-Kook-N-Keech-Marvel-Men-SweatSHIRTS-4391509359669829-1.jpg",
    price:100
    },
    {
    itemId: 'P00015',
    category:'BOTTOM WEAR',
    name:'Navy Bottoms',
    desc: 'Navy blue woven trousers',
    's_f':'Regular Fit',
    'm_c':'28 | 30 | 32 | 34 - Slim',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15339156/2021/10/20/ebdb2bd9-4b84-41ef-af90-0b0b253ef9241634729798687-Nautica-Men-Trousers-2041634729798034-1.jpg",
    price:950
    },
    {
    itemId: 'P00016',
    category:'SHOES',
    name:'Gate',
    desc: 'Teal blue solid casual shirt, has a spread collar, long sleeves, curved hem, one patch pocket',
    's_f':'Regular Fit',
    'm_c':'100% cotton | Machine-wash',
    img_source_one: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/12/2/260e8814-c28f-41ac-abfe-af7cb00db2691606898832837-1.jpg",
    price:550
    },

]

export default function smallDatabase(){
    return shopData;
}

export function searchDatabase(invoiceId){
    return shopData.find(element => element.itemId === invoiceId)

}