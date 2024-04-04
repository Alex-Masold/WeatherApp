<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script setup></script>

<style scoped>
.button {
    width: 60px;
    height: 60px;
    font-size: 24px;

    background: #ebfffc;

    border-radius: 30px;
    outline: 0;

    cursor: pointer;
    transition: 0.4s ease;
}

.button:hover {
    color: #fff;
    background: rgb(0, 63, 63);
}
</style>
