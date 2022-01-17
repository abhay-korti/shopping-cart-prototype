const shopData = [
    {
    itemId: 'P00001',
    name:'Tooth Brush',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:400
    },
    {
    itemId: 'P00002',
    name:'Mobile Charger',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:1450
    },
    {
    itemId: 'P00003',
    name:'Telephone',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:900
    },
    {
    itemId: 'P00004',
    name:'Cable',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:250
    },
    {
    itemId: 'P00005',
    name:'Table',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:250
    },
    {
    itemId: 'P00006',
    name:'Chair',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:350
    },
    {
    itemId: 'P00007',
    name:'Filler',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:150
    },
    {
    itemId: 'P00008',
    name:'Refill',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:10
    },
    {
    itemId: 'P00009',
    name:'Xylophone',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:950
    },
    {
    itemId: 'P00010',
    name:'Hat',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:550
    },
    {
    itemId: 'P00011',
    name:'Book',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:150
    },
    {
    itemId: 'P00012',
    name:'Waterskin',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:1050
    },
    {
    itemId: 'P00013',
    name:'Yatch',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:1150
    },
    {
    itemId: 'P00014',
    name:'Takis',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:100
    },
    {
    itemId: 'P00015',
    name:'Desk',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:750
    },
    {
    itemId: 'P00016',
    name:'Gate',
    desc: 'The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. ',
    img_source: "Enter link here",
    price:550
    },

]

export default function smallDatabase(){
    return shopData;
}

export function searchDatabase(invoiceID){
    return shopData.find(element => element.itemID === invoiceID)

}