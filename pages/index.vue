<script lang="ts" setup>
import { data } from '@/server/mocked-data'

function onSearchInput (search: string) {
    console.log('search root: ', search)
}

const productsData = computed(() =>
    data.map(({ products }) => products).flat())
</script>

<template>
    <div class="home-page">
        <header>
            <h1 class="page-title">
                Cardápio
            </h1>

            <Search @input="onSearchInput" />
        </header>

        <div class="products-list">
            <ProductCard
                v-for="(product, idx) in productsData"
                :key="idx + product.name"
                v-bind="product"
            />
        </div>
    </div>
</template>

<style scoped>
</style>

<style lang="scss" scoped>
.home-page {
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;

        h1 {
            color: $brown-dark;
        }
    }

    .products-list {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    }
}
</style>
