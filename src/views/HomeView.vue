<script setup>
import Filter from "../components/Filter.vue";
import Card from "../components/Card.vue";
import { useProjStore } from "../stores/proj";
import { storeToRefs } from "pinia";
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router'
import ErrorPage from "../components/404.vue";


const { ListClone, SearchKeyWord, List } = storeToRefs(useProjStore())
const { searchBycategory, resetList, searchByTag, searchByClient } = useProjStore()

const route = useRoute()


onBeforeRouteUpdate((to, from) => {
    console.log(to)


    if (to.query.tagId) { searchByTag(to.query.tagId) };
    if (to.query.clientId) { searchByClient(to.query.clientId) };





})
onBeforeRouteLeave((to, from) => {
    if (to.name == "home") {
        resetList()
    }
})


</script>


<template>
    <transition name="fade" mode="out-in" appear>
        <div class="container homeView  text-white   ">


            <ErrorPage v-if="!List" />
            <Filter v-if="route.path == '/' || route.path == '/filtertag'" />




            <div v-if="route.path != '/filtertag' && route.path != '/'"
                class="searchInfo col-span-5  dark:text-white85 text-black85  mr-10 shrink-0 mb-4">
                <div class="pb-2 lg:text-4xl text-xl">
                    <div >
                        {{ route.path }}
                    </div>

                </div>

                <div class=" flex justify-start  align-center lg:text-4xl text-xl">


                    {{ SearchKeyWord }}
                </div>
            </div>


            <div class="col-span-5 " :class="route.path != '/filtertag' && route.path != '/' ?'lg:col-span-5':'lg:col-span-4' ">
                <div class="card-content w-full =">
                    <Card :projObj="projObj" v-for="(projObj, index)  in ListClone " :key="Date.now() + index">
                    </Card>
                </div>

            </div>

        </div>
    </transition>
</template>


<style lang="scss">
// .homeView {
//     flex-grow: 1;
//     @apply flex justify-start items-start
// }


.homeView {
    @apply grid grid-cols-5 flex-grow grid-rows-1;



}



.card-content {


    grid-template-columns: repeat(2, 1fr);
    @apply grid gap-4 lg:gap-8
}



@media (min-width: 768px) {
    .card-content {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .card-content {
        // grid-template-columns: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);

    }
}

@media (min-width: 1280px) {
    .card-content {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}

@media (min-width: 1536px) {
    .card-content {
        // grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
        grid-template-columns: repeat(4, 1fr);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>