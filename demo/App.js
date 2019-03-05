import $ from 'jquery'
import List from './List/list'
import ShopingCart from './ShopingCart/shopingCart'

class App {
    constructor(id){
        this.$el = $('#' + id)
    }

    getList(){
        let list = new List()
        list.init()
    }

    getShopingCart(){
        let shopingcart = new ShopingCart(this.$el)
        shopingcart.init()
    }

    init(){
        this.getList()
        this.getShopingCart()
    }
}

export default App