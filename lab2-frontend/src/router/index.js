import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Search = () => import('../views/Search.vue');
const redirect = () => {
    return "/index";
}
const routes = [
    {
        path: '/',
        name: 'Root',
        redirect: redirect(),
    },
    {
        path: '/index',
        name: 'index',
        component:()=>import('../views/Search.vue')
    },

]

const router = new VueRouter({
    routes
})


export default router;