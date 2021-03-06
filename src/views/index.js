import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import About from "../views/About.vue";
import PercursosHome from "../views/PercursosHome.vue";
import Percursos from "../views/Percursos.vue";
import CriarPercurso from "../views/CriarPercurso.vue";
import DetalhesPercurso from "../views/DetalhesPercurso.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      { path: 'registar', component: Register, name: 'Registar' },
    ]
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
    component: Percursos,
    children: [
      { path: '', component: PercursosHome, name: 'percursoshome' },
      { path: 'criar', component: CriarPercurso, name: 'criarPercurso' },
      { path: 'detalhes', component: DetalhesPercurso, name: 'detalhesPercurso' }
    ]
  },
  {
    path: "/",
    name: "",
    component: Admin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
