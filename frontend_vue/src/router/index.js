import Vue from "vue";
import Router from "vue-router";

// Import các component
import UserList from "@/components/pages/UsersList";
import CreateUser from "@/components/pages/CreateUser";
import EditUser from "@/components/pages/EditUser";

Vue.use(Router);

export default new Router({
    mode: 'history', 
    routes: [
        { path: "/", name: "UsersList", component: UserList },
        { path: "/create", name: "CreateUser", component: CreateUser },
        { path: "/edit/:id", name: "EditUser", component: EditUser },
    ],
});
 