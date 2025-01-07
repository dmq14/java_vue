<template>
    <div>
        <h1>Edit User</h1>
        <form @submit.prevent="updateUser">
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
    name: "EditUser",
    data() {
        return {
            user: {},
        };
    },
    created() {
        const userId = this.$route.params.id;
        apiClient.get(`/users/${userId}`).then((response) => {
            this.user = response.data;
        });
    },
    methods: {
        updateUser() {
            apiClient.put(`/users/${this.user.id}`, this.user).then(() => {
                this.$router.push("/");
            });
        },
    },
};
</script>
