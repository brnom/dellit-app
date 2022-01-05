<script lang="ts" setup>
import { PropType } from "vue"
import { slugify } from '@/helpers/utils'

const _props = defineProps({
    list: { type: Array as PropType<string[]>, default: () => ([]) },
})

const getCategoryRoute = (category: string) =>
    `/categoria/${slugify(category)}`

</script>

<template>
    <div class="sidebar">
        <NuxtLink class="sidebar-logo" to="/">
            <img src="/logo.png" alt="Dellit Logo">
        </NuxtLink>

        <div class="sidebar-list">
            <NuxtLink
                v-for="item in _props.list"
                :key="item"
                :to="getCategoryRoute(item)"
                class="sidebar-list-item"
            >
                {{ item }}
            </NuxtLink>
        </div>

        <footer>
            <div class="message">
                Gostou?
                <br>
                Peça agora!
            </div>

            <div class="icons">
                <Icon name="whatsapp" />
                <Icon name="instagram" />
                <Icon name="facebook" />
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    width: $sidebar-width;
    height: 100vh;

    padding: 40px 20px;

    display: flex;
    flex-direction: column;

    border-right: 1px solid $brown;

    &-logo {
        padding: 10px;
        cursor: pointer;

        img {
            width: 100%;
            margin: 20px auto;
            object-fit: contain;
        }
    }

    &-list {
        font-size: 20px;
        font-weight: 500;

        &-item {
            display: block;
            padding: 6px;
            padding-left: 30px;
            margin-bottom: 12px;
            cursor: pointer;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    footer {
        margin: auto 20px 20px;

        .message {
            font-size: 20px;
            text-align: center;
            margin-bottom: 40px;
        }

        .icons {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
}
</style>
