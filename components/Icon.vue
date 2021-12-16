<script setup>
import WhatsappIcon from '@/icons/whatsapp.svg'

const props = defineProps({
    name: { type: String, required: true }
})

const icons = {
    whatsapp: WhatsappIcon
}

console.log({ icons, ...props })

</script>

<template>
    <div class="icon">
        teste: 
        <component :is="undefined" />   
    </div>
</template>

<style lang="scss" scoped>
.icon {
    border: 1px solid red;
}
</style>
