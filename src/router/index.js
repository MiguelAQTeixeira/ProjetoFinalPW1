import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import About from "../views/About.vue";
import Percursos from "../views/Percursos.vue";
import DetalhesPercurso from "../views/DetalhesPercurso.vue";
import Registar from "../views/Registar.vue";
import Login from "../views/Login.vue";
import Perfil from "../views/Perfil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: '/registar', 
    name: "registar", 
    component: Registar,
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin
  },
  {
    path: "/percursos",
    name: "percursos",
    component: Percursos

  },
  {
    path: '/percursos/detalhes',
    component: DetalhesPercurso,
    name: 'DetalhesPercurso'
  },
  {
    path: "/",
    name: "",
    component: Admin
  },
  {
    path: "/perfil",
    name: "",
    component: Perfil
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
