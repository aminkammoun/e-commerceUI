import Home from "./Components/Home.vue";
import Login from "./Components/Login.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },

  {
    path: "/Login",
    component: Login,
  },
];
