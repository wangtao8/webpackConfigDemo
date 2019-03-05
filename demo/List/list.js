import { getData } from '../data/api'
import Item from './creatItem'

class List {
    constructor(){

    }

    loadData(){
        return fetch(getData)
                .then(res=>{
                    return res.json()
                })
    }

    initItemList(){
        //传入单个成员处理的类中
        // console.log('11111111111')
        this.loadData()
            .then(listData=>{
                listData.forEach(element => {
                    console.log(element)
                    Item(listData, element)
                    // let item = new Item('app', element)
                    // item.init()
                });
            })
        
    }

    render(){
        //渲染
        // console.log('22222222222')
    }

    init(){
        this.loadData()
            .then(data=>{
                // console.log(data)
                this.initItemList()
            })
            .then(()=>{
                this.render()
            })
    }
}

export default List