<script lang="ts" setup>
const props = defineProps({
    placeholder: { type: String, default: 'Buscar produtos' }
})

const emit = defineEmits<{
    (event: 'input', search: string): void
}>()

const search = ref('')

function onInput (e: any) {
    emit('input', e.target.value)
}

</script>

<template>
    <div class="search">
        <div class="search-icon">
            <Icon name="search" :size="16" />
        </div>

        <input
            type="text"
            :placeholder="props.placeholder"
            v-model="search"
            @input="onInput"
        >
    </div>
</template>

<style lang="scss" scoped>
.search {
    height: $height;
    padding: 0 20px;

    display: flex;
    align-items: center;

    border: 1px solid $brown-dark;
    border-radius: calc($height / 2);
    color: $brown-dark;

    &-icon {
        margin-right: 4px;
    }

    input {
        border: none;
        outline: none;
        height: 100%;
        padding: 4px;

        &::placeholder {
            font-style: italic;
            color: $brown-light;
        }
    }
}
</style>
