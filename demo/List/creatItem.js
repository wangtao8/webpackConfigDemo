import Item from './item'

// function guolv(list, itemDatas){
//     return list.filter(itemData => {
//         if (itemData.name == itemDatas.name){
//             if (itemData.name == itemDatas.name) {
//                 itemData.name = `${itemData.name} 【折扣】`
//             }
//             if (itemData.zhek == 1) {
//                 itemData.price = itemData.price * 0.8
//             }
//             return itemData
//         }
//         return false
//     })
// }

// export default function (list, itemData) {
//     if(itemData.zhek){
//         itemData = guolv(list, itemData)[0]
//     }
//     let item = new Item(list, itemData)
//     item.init()
//     return item
// }

function guolv(itemData) {
    return new Proxy(itemData, {
        get: function(target, key) {
            if(key === 'name') {
                return `${itemData.name} 【折扣】`
            }
            if (key === 'price') {
                return itemData.price * 0.8
            }
            return itemData[key]
        }
    })
}

export default function (list, itemData) {
    if (itemData.zhek) {
        itemData = guolv(itemData)
    }
    let item = new Item(list, itemData)
    item.init()
    return item
}