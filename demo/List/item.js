import $ from 'jquery'
import StateMachine from 'javascript-state-machine'
import { log } from '../util/log'
import { getcart } from '../ShopingCart/getCart'

class Item {
    constructor(list, itemData) {
        this.$el = $('#app')
        this.list = list
        this.itemData = itemData
        this.getcart = getcart
    }

    pinzhuangItem() { // 拼装dom
        let $dom = $('<div>')
        $dom.append($(`<p>商品名称：${this.itemData.name}</p>`))
        $dom.append($(`<p>商品价格：${this.itemData.price}</p>`))
        this.initBtns()
        $dom.append(this.$btn)
        this.$dom = $dom
    }

    initBtns() { // 拼装btn
        let fsm = new StateMachine({
            init: '加入购物车',
            transitions: [{
                name: 'addToCart',
                from: '加入购物车',
                to: '从购物车删除'
            }, {
                name: 'deleteFromCart',
                from: '从购物车删除',
                to: '加入购物车'
            }],
            methods: {
                onAddToCart: () => {
                    this.addToCartHandle()
                    updateText()
                },
                onDeleteFromCart: () => {
                    this.deleteFromCartHandle()
                    updateText()
                }
            }
        })

        let $btn = $('<button>')
        let updateText = () => {
            $btn.text(fsm.state)
            this.$btn = $btn
        }

        updateText()
        $btn.click(() => {
            if (fsm.is('加入购物车')) {
                fsm.addToCart()
            } else {
                fsm.deleteFromCart()
            }
        })
    }

    @log('add')
    addToCartHandle() {
        this.getcart.addToCartHandle(this.itemData)
    }

    @log('delete')
    deleteFromCartHandle() {
        this.getcart.deleteFromCartHandle(this.itemData)
    }

    @log('render')
    render() { // 渲染
        this.$el.append(this.$dom)
    }

    init() { // 初始化
        this.pinzhuangItem()
        this.render()
    }
}

export default Item