import { createRouter, createWebHistory } from "vue-router";

import Pagina1 from "../views/Pagina1.vue";
import Pagina2 from "../views/Pagina2.vue";
import Pagina3 from "../views/Pagina3.vue";
import Pagina4 from "../views/Pagina4.vue";
import Pagina5 from "../views/Pagina5.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/pagina1", name: "1", component: Pagina1 },
    { path: "/pagina2", name: "pagina2", component: Pagina2 },
    { path: "/pagina3", name: "pagina3", component: Pagina3 },
    { path: "/pagina4", name: "pagina4", component: Pagina4 },
    { path: "/pagina5", name: "pagina5", component: Pagina5 },
  ],
});

export default router;
