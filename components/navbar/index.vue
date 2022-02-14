<script lang="ts">
// @ts-ignore
// import ClickOutside from 'vue-click-outside'
export default defineComponent({
    // directives: { ClickOutside },
    mounted() {
        // console.log('mounted navbar', {
        //     ClickOutside
        // }) 
    }
})
</script>

<script lang="ts" setup>
// import { PropType } from "vue"
const route = useRoute()

const props = defineProps({
    // categories: { type: Array as PropType<any[]>, default: () => ([]) },
    categories: { type: Array, default: () => ([]) },
})

const showCategories = ref(false)
function isActive (path: string) {
    return route.path === path
}
const hideCategories = () => {
    console.log('called')
}
</script>

<template>
    <nav class="navbar" @click="showCategories = false">
        <NuxtLink class="navbar-logo" to="/">
            <img src="/h-logo.png" alt="Dellit Logo">
        </NuxtLink>

        <div class="--center">
            <div class="navbar-categories" @click.stop="showCategories = !showCategories">
                <div class="navbar-categories-btn">
                    Categorias
                    {{ showCategories ? '-' : '+' }}
                </div>

                <div v-click-outside="hideCategories" v-if="showCategories" class="navbar-list">
                    <NuxtLink
                        v-for="category in props.categories"
                        :key="category.name"
                        :to="category.path"
                        :class="['navbar-list-item', isActive(category.path) && '--is-active']"
                        @click="showCategories = false"
                    >
                        {{ category.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>


        <NuxtLink class="navbar-photos" to="#">
            Fotos
        </NuxtLink>

        <div class="--right">
            <div class="navbar-message">
                Gostou?
                Peça agora!
            </div>

            <div class="navbar-icons">
                <Icon name="whatsapp" />
                <Icon name="instagram" />
                <Icon name="facebook" />
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    height: $navbar-height;
    width: 100vw;
    padding: 14px 40px;
    position: fixed;
    z-index: 10;

    display: flex;
    align-items: center;
    gap: 30px;

    background: #f3d6b4;
    background: #e79538;
    background: #e9765f;
    color: $brown-dark;
    font-weight: 600;
    font-size: 20px;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);

    &-logo {
        height: 100%;

        img {
            height: 100%;
            object-fit: contain;
        }
    }

    &-categories {
        position: relative;

        &-btn {
            transition: 0.2s;
            cursor: pointer;
        }
    }

    &-list {
        position: absolute;
        top: 1.8em; left: 10px;

        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 6px 2px;
        border-radius: $brs;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);

        &-item {
            padding: 6px 20px;
            border-radius: $brs;
            color: $brown-dark;
            font-weight: 500;
            font-size: 18px;
            cursor: pointer;
            transition: 0.2s;

            &:hover {
                background: #eee;
                transition: 0.2s;
            }

            &:active {
                background: #ddd;
                transition: 0.2s;
            }

            &.--is-active {
                background: $brown-light;
                color: $white;
                font-weight: 600;
            }
        }
    }

    &-message {
        border: 1px solid red;
    }

    &-icons {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .--right {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: auto;
    }
}
</style>