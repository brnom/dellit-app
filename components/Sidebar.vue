<script lang="ts" setup>
import { PropType } from "vue"

const _props = defineProps({
    list: { type: Array as PropType<string[]>, default: () => ([]) },
})
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-logo">
            <img src="/logo.png" alt="Dellit Logo">
        </div>

        <div class="sidebar-list">
            <div
                v-for="item in _props.list"
                :key="item"
                class="sidebar-list-item"
            >
                {{ item }}
            </div>
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
        img {
            width: calc($sidebar-width - 2vw);
            margin: 20px auto;
            object-fit: contain;
        }
    }

    &-list {
        font-size: 20px;
        font-weight: 500;

        &-item {
            border: 1px solid red;
            padding: 6px;
            padding-left: 30px;
            margin-bottom: 20px;
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
