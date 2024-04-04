<template>
    <div class="weather-detail">
        <slot></slot>
        <div>
            <span>{{ props.columnValue }}</span>
            <p>{{ props.columnName }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    columnValue: {
        type: Number,
        require: true
    },
    columnName: {
        type: String,
        require: true
    }
});
</script>

<style scoped>
.weather-detail {
	display: flex;
    align-items: center;
    width: 50%;
    height: 100px;
}
.weather-detail span{
    font-size: 2em;
    font-weight: 500;
}
.weather-detail p{
    font-size: 1em;
    font-weight: 500;
}
</style>
