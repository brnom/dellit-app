<script lang="ts" setup>
import { data } from '@/server/mocked-data'

const route = useRoute()

const currentCategory = computed(() => typeof route.params.name === 'string'
    ? decodeURI(route.params.name).replace(/-/g, ' ')
    : route.params.name
)

const categoryProducts = computed(() => {
    const categoryData = data.find(({ category }) =>
        category.toLowerCase() === currentCategory.value)
    return categoryData?.products ?? []
})
</script>

<template>
    <div class="ctgp">
        <header>
            <h1 class="page-title">
                {{ currentCategory }}
            </h1>
        </header>

        <div
            v-if="categoryProducts.length"
            class="ctgp-products"
        >
            <ProductCard
                v-for="(product, idx) in categoryProducts"
                :key="idx + product.name"
                v-bind="product"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ctgp {
    header {
        margin-bottom: 30px;

        h1 {
            color: $brown-dark;
            text-transform: capitalize;
        }
    }

    &-products {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(400px, .4fr));
    }
}
</style>
