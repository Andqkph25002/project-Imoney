import { createRouter, createWebHistory } from "vue-router";
import { app, auth } from "@/config/firebase";
const requireAuth = (to, from, next) => {
  const user = auth.currentUser;
  if (!user) {
    next({ name: "Login", params: {} })
  } else {
    next();
  }

}
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      leading: true,
      text: "Hey , Khánh An",
      isShowFooter: true,
    },
    component: () => import("../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth"
    },
    component: () => import("../views/register.vue"),
  }, {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth"
    },
    component: () => import("../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    component: () => import("../views/profile.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/logout.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true,
    },
    component: () => import("../views/report.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true,
    },
    component: () => import("../views/budget.vue"),
  },

  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "New Transaction",
      leading: false,
      isShowFooter: true,
    },
    component: () => import("../views/new-transaction.vue")
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
