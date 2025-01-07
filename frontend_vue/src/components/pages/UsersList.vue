<template>
    <div>
        <h1>User List</h1>
        <button class="btn btn-primary" @click="createUser">Add User</button>
        <table class="table table-striped table-hover w-50">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>
                        <button class="btn btn-info me-2" @click="editUser(user)"><i class="fas fa-edit"></i> Edit</button>
                        <button class="btn btn-danger" @click="deleteUser(user.id)"> <i class="fas fa-trash"></i> Delete</button>
                    </td>
                </tr>
            </tbody>
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
