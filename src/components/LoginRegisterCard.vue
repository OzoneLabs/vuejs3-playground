<script>
import Login from './Login.vue';
import Register from './Register.vue'

export default {
    components: {
        Login,
        Register,
    },

    data() {
        return {
            activeTab: 'login',
        }
    },
}
</script>

<template>
    <el-card class="w-440px p-10px rounded-xl">
        <el-tabs v-model="activeTab">
            <el-tab-pane label="Login" name="login">
                <Login />
            </el-tab-pane>

            <el-tab-pane label="Register" name="register">
                <Register />
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>