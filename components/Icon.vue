<script lang="ts" setup>
import SearchIcon from '@icons/search.svg?component'
import WhatsappIcon from '@icons/whatsapp.svg?component'
import InstagramIcon from '@icons/instagram.svg?component'
import FacebookIcon from '@icons/facebook.svg?component'

const icons: Record<string, any> = {
    search: SearchIcon,
    whatsapp: WhatsappIcon,
    instagram: InstagramIcon,
    facebook: FacebookIcon
}

const props = defineProps({
    name: { type: String, required: true },
    size: { type: Number, default: 30 },
})

const style = computed(() => ({
    width: `${props.size}px`,
    height: `${props.size}px`
}))

const icon = computed(() =>
    props.name in icons
        ? icons[props.name]
        : undefined
)
</script>

<template>
    <div class="icon">
        <component :is="icon" :style="style" />   
    </div>
</template>

<style lang="scss" scoped>
.icon {
    svg {
        fill: $brown;
    }
}
</style>
