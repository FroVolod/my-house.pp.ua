const imagesFolder = 'static/images';
const fs = require('fs');

const obj = {
    items: []
} 

const dictDescriptions = {
    block_1: 'Дом утеплен. В нем есть газ, вода (скважина), трехфазное электричество с двухзонным счетчиком,\
                отопление (газовые конвектора), кондиционер, интернет (оптоволокно). Сдан в эксплуатацию в 2017 г.\
                Документы на земельный участок и на дом подготовлены.',
    block_2: 'На 1-ом этаже: веранда-гостинная, кухня, санузел, гараж. Также есть в доме большой погреб.\
                Мебель и кухня с техникой (холодильник, посудомоечная машина, газовая плита, духовой шкаф) остаются в доме.',
    block_3: 'На 2-ом этаже находятся две просторные комнаты. Мягкая мебель и шкафы так же остаются в доме.',
    block_4: 'Участок 26 соток с молодым садом (яблони, груши, сливы, персики, черешни, вишни, ежевика, смородина, крыжовник, малина и тд).\
                Садово-огородная техника в подарок.',
    block_5: 'Продам дом в Харьковской области в экологически чистом районе, с. Большие Проходы, Дергачевский р-н (20 км от Харькова).\
                Находится 2-х этажный (84 кв.м. жилой площади) дом недалеко от центра села в живописном районе возле леса и озера.\
                Просто шикарное место для отдыха не только семьи, но и огромной компании друзей и родственников.',
  
}  

fs.readdirSync(imagesFolder).forEach(folder => {
    // console.log('folder ', folder);
    // qwe.push(folder);
    if (folder !== '.DS_Store') {
        // console.log('enter in folder: ', folder)
        fs.readdirSync('static/images/' + folder).forEach(file => {
            // console.log('file ', imagesFolder + '/' + folder + '/' + file);
            if (file !== '.DS_Store') {
              if ((file.indexOf('mob') === -1) & (file.indexOf('webp') === -1)) {
                let fileWebp = file.split('.')[0] + '.webp';
                let fileMob = file.split('.').join('mob.');
                let fileMobWebp = file.split('.')[0] + 'mob.webp';
                obj.items.push({
                    src: imagesFolder + '/' + folder + '/' + file,
                    srcWebp: imagesFolder + '/' + folder + '/' + fileWebp,
                    srcMob: imagesFolder + '/' + folder + '/' + fileMob,
                    srcMobWebp: imagesFolder + '/' + folder + '/' + fileMobWebp,
                    altText: folder + '-' + file,
                    description: dictDescriptions[folder],
                    imagesBlock: folder,
                    selectBlock: folder,
                });
              }
            };
        });
    };
});

console.log('ITEMS:   ', obj)

fs.writeFileSync('pages/items.json', JSON.stringify(obj))

console.log('OK')
