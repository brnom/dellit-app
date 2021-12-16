<script setup>
</script>

<template>
    <div class="main">
        <Sidebar />

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
        padding: 20px;
    }
}
</style>
