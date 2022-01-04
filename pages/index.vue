<script lang="ts" setup>
function onSearchInput (search: string) {
    console.log('search root: ', search)
}

</script>

<template>
    <header>
        <h1> Cardápio </h1>

        <Search @input="onSearchInput" />
    </header>

    lista de produtos
</template>

<style scoped>
</style>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: $brown-dark;
    }
}
</style>