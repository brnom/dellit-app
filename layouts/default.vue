<script lang="ts" setup>
import { data } from '@/server/mocked-data'
import { slugify } from '@/helpers/utils'

const categories = computed(() =>
    data.map(({ category }) => ({
        name: category,
        path: `/categoria/${slugify(category)}`,
    }))
)
</script>

<template>
    <div class="ld">
        <Navbar :categories="categories" />

        <div class="ld-pages">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ld {
    display: flex;
    flex-direction: column;

    &-pages {
        margin-top: $navbar-height;
        width: 100%;
        background: #efefef;
        padding: 30px 40px;
    }
}
</style>
