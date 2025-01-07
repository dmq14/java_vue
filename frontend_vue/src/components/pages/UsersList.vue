<template>
    <div>
        <h1>User List</h1>
        <button @click="createUser">Add User</button>
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone }}</td>
                <td>
                    <button @click="editUser(user)">Edit</button>
                    <button @click="deleteUser(user.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import apiClient from "@/services/api";

export default {
    name: "UsersList",
    data() {
        return {
            users: [],
        };
    },
    created() {
        this.fetchUsers();
    },
    methods: {
        fetchUsers() {
            apiClient.get("/users").then((response) => {
                this.users = response.data;
            });
        },
        deleteUser(id) {
            apiClient.delete(`/users/${id}`).then(() => {
                this.fetchUsers();
            });
        },
        createUser() {
            this.$router.push("/create");
        },
        editUser(user) {
            this.$router.push({ path: `/edit/${user.id}`, state: user });
        },
    },
};
</script>
