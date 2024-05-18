import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/HomeComponent.vue";
import Detail from "./components/PostComponent.vue";
import AuthorComponent from "./components/Author.vue";
import CommentComponent from "./components/Comment.vue";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: 'detail',
    component: Detail,
    props: true,
    children: [
        {
            path: "author",
            component: AuthorComponent,
        },
        {
            path: "comment",
            component: CommentComponent,
        },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 