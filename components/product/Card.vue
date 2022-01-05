<script lang="ts" setup>
const _props = defineProps({
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: String, default: '' },
})
</script>

<template>
    <div class="p-card">
        <header>
            <h2 class="card-title">
                {{ _props.name }}
            </h2>

            <div class="card-title">
                {{ _props.price }}
            </div>
        </header>

        <div
            v-if="_props.description"
            class="p-card-description"
        >
            {{ _props.description }}
        </div>

        <div class="p-card-images">
            nice img
        </div>
    </div>
</template>

<style lang="scss" scoped>
.p-card {
    padding: 20px;
    background: $white;
    border-radius: 4px;
    border: 1px solid $brown;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        transition: 0.3s;
        transform: scale(1.01);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transition: 0.3s;
        transform: scale(0.99);
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-description {
        margin-top: 6px;
        font-style: italic;
        font-size: 16px;
    }

    &-images {
        margin-top: 16px;
        height: auto;
        min-height: 200px;
        display: grid;
        place-items: center;
        border: 1px solid #ccc;
    }
}
</style>
