<template>
    <CarritoComponente />
</template>
<script>
import {defineAsyncComponent} from 'vue'

export default {
        components: {
            CarritoComponente: defineAsyncComponent(() => import('../components/CarritoComponente.vue'))
        }
}
</script>

<style>

</style>





