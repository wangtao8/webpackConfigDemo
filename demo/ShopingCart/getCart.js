class getCart {
    constructor() {
        this.cart = []
    }

    addToCartHandle(itemData) {
        this.cart.push(itemData.name)
    }

    deleteFromCartHandle(itemData) {
        this.cart = this.cart.filter(res => {
            if (res == itemData.name) {
                return false
            }
            return true
        })
    }

    getCartList() {
        return this.cart.join('\n')
    }

    static getcart() {
        let cart = null
        if (!cart) {
            return cart = new getCart()
        }
        return cart
    }
}

export const getcart = getCart.getcart()