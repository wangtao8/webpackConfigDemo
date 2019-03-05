import {getcart} from './getCart'
import $ from 'jquery'

class ShopingCart{
    constructor(app) {
        console.log('执行了shopingCart')
        this.app = app
        this.$el = $('<div>').css({
            'padding-bottom': '10px',
            'border-bottom': '1px solid #ccc'
        })
        this.getcart = getcart
    }

    showCart() {
        alert(this.getcart.getCartList())
    }

    initBtn() {
        let $btn = $('<button>购物车</button>')
        $btn.click(()=>{
            this.showCart()
        })
        this.$el.append($btn)
    }

    render() {
        this.app.append(this.$el)
    }

    init() {
        this.initBtn()
        this.render()
    }
}

export default ShopingCart