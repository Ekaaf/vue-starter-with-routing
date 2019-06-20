import Vue from 'vue'
import Router from 'vue-router'


/*
* @ all pages
*
*/
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import AddStore from '@/pages/AddStore'


Vue.use(Router)
const router =  new Router({
	routes: [
        {
            path: '/',
			name: 'home',
			component: Home,
			// meta: { title: "Uniliver" }
        },

        {
            path: '/user/dashboard',
			name: 'dashboard',
			component: Dashboard
        },

        {
            path: '/user/add-store',
			name: 'AddStore',
			component: AddStore
        }
       
	],
    mode:"history"
});

// ** set meta in router. then title is added from here
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// })



export default router;
