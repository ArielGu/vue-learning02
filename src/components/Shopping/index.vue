<template>
    <div>
        <h1>购物车</h1>
        <p>账号：{{ email }}</p>
        <h2>产品</h2>
        <ProductList />
        <br/>
        <ShoppingCart />
    </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'
export default {
    name: 'App',
    components: {
        ProductList, ShoppingCart
    },
    computed: mapState({
        email: state => state.userInfo.email
    })
}
</script>
