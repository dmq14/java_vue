<template>
    <div>
        <h1>Create User</h1>
        <form @submit.prevent="createUser">
            <input v-model="user.name" placeholder="Name" required />
            <input v-model="user.email" placeholder="Email" required />
            <input v-model="user.phone" placeholder="Phone" required />
            <button type="submit">Save</button>
        </form>
    </div>
</template>

<script>
import apiClient from "@/services/api";

export default {
    name: "CreateUser",
    data() {
        return {
            user: {
                name: "",
                email: "",
                phone: "",
            },
        };
    },
    methods: {
        createUser() {
            apiClient.post("/users", this.user).then(() => {
                this.$router.push("/");
            });
        },
    },
};
</script>
