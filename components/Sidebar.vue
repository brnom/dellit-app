<script setup>
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-logo">
            <img src="/logo.png" alt="Dellit Logo">
        </div>

        <div class="sidebar-list">
            list here
        </div>

        <footer>
            <Icon name="whatsapp" />
            <Icon name="instagram" />
            <Icon name="facebook" />
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
            width: 100%;
            margin: 20px auto;
            object-fit: contain;
        }
    }

    footer {
        margin-top: auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
