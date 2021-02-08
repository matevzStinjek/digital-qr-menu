<template>
    <div class="menu-view">
        <menu-content />
        <dish-detail />
        <filter-element />
    </div>
</template>

<script>
import MenuContent from 'menu/components/MenuContent.vue'
import DishDetail from 'menu/components/DishDetail.vue'
import Filter from 'menu/components/filter/Filter.vue'

export default {
    name: 'MenuView',
    components: {
        MenuContent,
        DishDetail,
        filterElement: Filter,
    },
}
</script>
