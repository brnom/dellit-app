<script lang="ts" setup>
const props = defineProps({
    items: { type: Array as () => string[], default: () => ([]) },
    selected: { type: String, default: '' },
})
</script>

<template>
    <select name="name">
        <option v-for="item in props.items" :key="item" :value="item">
            {{ item }}
        </option>
    </select>
    <!-- <div class="navbar-dropdown">
    </div> -->
</template>

<style lang="scss" scoped>
.navbar-dropdown {
    border: 1px solid red;
}
</style>
