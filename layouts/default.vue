<script lang="ts" setup>
import { data } from '@/server/mocked-data'

const categories = computed(() => data.map(({ category }) => category))

</script>

<template>
    <div class="main">
        <Sidebar :list="categories" />

        <div class="main-pages">
            <slot />
        </div>

    </div>
</template>

<style lang="scss" scoped>
.main {
    display: flex;

    &-pages {
        width: 100%;
        margin-left: $sidebar-width;
        padding: 40px;
    }
}
</style>
