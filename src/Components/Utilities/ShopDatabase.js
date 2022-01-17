const shopData = [
    {
    itemId: 'P00001',
    category:'one',
    name:'Tooth Brush',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:400
    },
    {
    itemId: 'P00002',
    category:'one',
    name:'Mobile Charger',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:1450
    },
    {
    itemId: 'P00003',
    category:'one',
    name:'Telephone',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:900
    },
    {
    itemId: 'P00004',
    category:'one',
    name:'Cable',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:250
    },
    {
    itemId: 'P00005',
    category:'one',
    name:'Table',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:250
    },
    {
    itemId: 'P00006',
    category:'two',
    name:'Chair',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:350
    },
    {
    itemId: 'P00007',
    category:'two',
    name:'Filler',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:150
    },
    {
    itemId: 'P00008',
    category:'two',
    name:'Refill',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:10
    },
    {
    itemId: 'P00009',
    category:'four',
    name:'Xylophone',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:950
    },
    {
    itemId: 'P00010',
    category:'one',
    name:'Hat',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:550
    },
    {
    itemId: 'P00011',
    category:'three',
    name:'Book',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:150
    },
    {
    itemId: 'P00012',
    category:'three',
    name:'Waterskin',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:1050
    },
    {
    itemId: 'P00013',
    category:'four',
    name:'Yatch',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:1150
    },
    {
    itemId: 'P00014',
    category:'four',
    name:'Takis',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:100
    },
    {
    itemId: 'P00015',
    category:'two',
    name:'Desk',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:750
    },
    {
    itemId: 'P00016',
    category:'three',
    name:'Gate',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:550
    },

]

export default function smallDatabase(){
    return shopData;
}

export function searchDatabase(invoiceId){
    return shopData.find(element => element.itemId === invoiceId)

}