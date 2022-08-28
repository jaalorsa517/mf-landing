import Users from "../views/users.vue";
import User from "../views/user.vue";

export const routes = [
  {
    path: "/",
    name: "users",
    component: Users,
  },
  {
    path: "/user",
    name: "user",
    component: User,
  },
];
