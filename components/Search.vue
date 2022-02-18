<script lang="ts" setup>
const props = defineProps({
    placeholder: { type: String, default: 'Buscar produtos' },
})

const emit = defineEmits<{
    (_event: 'input', _search: string): void
}>()

const search = ref('')

function onInput (e: any) {
    emit('input', e.target.value)
}
</script>

<template>
    <div class="search">
        <div class="search-icon">
            <Icon name="search" :size="14" />
        </div>

        <input
            v-model="search"
            type="text"
            :placeholder="props.placeholder"
            @input="onInput"
        >
    </div>
</template>

<style lang="scss" scoped>
.search {
    width: 300px;
    height: $height;
    padding: 6px 20px;

    display: flex;
    align-items: center;

    border: 1px solid $brown-dark;
    border-radius: $brs;
    color: $brown-dark;

    &-icon {
        margin-right: 4px;
    }

    input {
        border: none;
        outline: none;
        width: 100%;
        padding: 4px;
        background: transparent;

        &::placeholder {
            font-style: italic;
            color: $brown-light;
        }
    }
}
</style>
