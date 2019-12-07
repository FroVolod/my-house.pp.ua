const imagesFolder = 'static/images';
const fs = require('fs');

const obj = {
    items: []
} 

const dictDescriptions = {
    block_1: 'Продам 2-х этажный дом (84 кв.м. жилой площади) в экологически чистом районе Харьковской области, с. Большие Проходы, Дергачевский р-н (20 км от Харькова).\
                Дом находится в живописном районе возле леса, недалеко от центра села и озера.',
    block_2: 'Участок 26 соток с молодым садом (яблони, груши, сливы, персики, черешни, вишни, ежевика, смородина, крыжовник, малина и тд).\
                Садово-огородная техника в подарок.',
    block_3: 'Дом утеплен. В нем есть газ, вода (скважина), трехфазное электричество с двухзонным счетчиком, отопление (газовые конвектора), кондиционер, интернет (оптоволокно).\
                Сдан в эксплуатацию в 2017 г.\
                Документы на земельный участок и на дом подготовлены.',
    block_4: 'На 1-ом этаже: веранда-гостинная, кухня, санузел, гараж. Также есть в доме большой погреб.\
                Мебель и кухня с техникой (холодильник, посудомоечная машина, газовая плита, духовой шкаф) остаются в доме.',
    block_5: 'На 2-ом этаже находятся две просторные комнаты. Мягкая мебель и шкафы так же остаются в доме.',
}  

fs.readdirSync(imagesFolder).forEach(folder => {
    // console.log('folder ', folder);
    // qwe.push(folder);
    if (folder !== '.DS_Store') {
        // console.log('enter in folder: ', folder)
        fs.readdirSync('static/images/' + folder).forEach(file => {
            // console.log('file ', imagesFolder + '/' + folder + '/' + file);
            if (file !== '.DS_Store') {
                obj.items.push({
                    src: imagesFolder + '/' + folder + '/' + file,
                    altText: file,
                    description: dictDescriptions[folder],
                    imagesBlock: folder,
                    selectBlock: folder,
                });
            };
        });
    };
});

console.log('ITEMS:   ', obj)

fs.writeFileSync('pages/items.json', JSON.stringify(obj))

console.log('OK')
