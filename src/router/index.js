import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: "/",
            name: "index",
            component: () => import( /* webpackChunkName: "index" */ "@/views/index/index"),
            meta: {
                title: "首页"
            }
        },
        {
            path: "/main",
            name: "main",
            component: () => import( /* webpackChunkName: "main" */ "@/views/main/main"),
            meta: {
                title: "主要"
            }
        }
    ]
})

export default router;