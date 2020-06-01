import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const withPrefix = (prefix, routes) =>
    routes.map(route => {
        route.path = prefix + route.path;
        return route;
    });

let routes = [
    {
        path: "/",
        name: "construccion",
        component: () => import("./components/Construccion.vue")
    },
    {

        path: "/page",
        component: () => import("./components/layout.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("./components/Home.vue")
            },
            {
                path: "/about-us",
                name: "about-us",
                component: () => import("./components/AboutUs.vue")
            },
            {
                path: "/our-services",
                name: "our-services",
                component: () => import("./components/OurServices.vue")
            },
            {
                path: "/projects",
                name: "projects",
                component: () => import("./components/Projects.vue")
            },
            {
                path: "/donations",
                name: "donations",
                component: () => import("./components/Donations.vue")
            },
            {
                path: "/contact-us",
                name: "contact-us",
                component: () => import("./components/ContactUs.vue")
            },
        ]
    },
    {
        path: "/vuex",
        name: "vuex",
        component: () => import("./components/exampleVuex.vue")
    },

    {
        path: "/custom",
        name: "custom",
        component: () => import("./components/CustonScrollBar.vue")
    },

    {
        path: "/login",
        name: "login",
        component: () => import("./components/Auth/Login.vue"),
        meta: {
            withAuth: true
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => import("./components/Auth/Register.vue"),
        meta: {
            withAuth: true
        }
    },
    {
        path: "/send-notification",
        name: "send-notification",
        component: () => import("./components/Auth/sendNotificationPassword.vue")
    },
    {
        path: "/reset-password/:id",
        name: "reset-password",
        component: () => import("./components/Auth/ResetPassword.vue")
    },
    {
        path: "*",
        name: "404",
        component: () => import("./components/errors/404.vue")
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.middlewareAuth)) {
        if (!auth.check()) {
            next({
                path: "/login",
                query: {
                    redirect: to.fullPath
                }
            });

            return;
        }
    } else if (to.matched.some(record => record.meta.withAuth)) {
        if (auth.check()) {
            next({
                path: "/dashboard",
                query: {
                    redirect: to.fullPath
                }
            });

            return;
        }
    }

    next();
});

export default router;
