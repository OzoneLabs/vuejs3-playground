<script>
import Login from './Login.vue';

export default {
    components: {
        Login,
    },

    data() {
        return {
            activeTab: 'login',
        }
    },
}
</script>

<template>
    <el-card class="box">
        <el-tabs v-model="activeTab">
            <el-tab-pane label="Login" name="login">
                <Login />
            </el-tab-pane>

            <el-tab-pane label="Register" name="register">
                <h1>TODO</h1>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<style scoped>
.box {
    width: 440px;
    /* padding: 20px; */
}
</style>