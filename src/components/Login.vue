<script>
let credentials = {
    username: 'admin',
    password: '123',
};

export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },

    methods: {
        login() {
            if (this.username === credentials.username && this.password === credentials.password) {
                alert('Login successful!');
            } else {
                alert('Login failed!');
            }
        }
    }
}
</script>

<template>
    <el-card class="box">
        <p>Login</p>
        <form>
            <div class="mg-sm">
                <el-input v-model="username" placeholder="Username" />
            </div>

            <div class="mg-sm">
                <el-input type="password" v-model="password" placeholder="Password" />
            </div>

            <el-row justify="space-between">
                <el-col :span="10">
                    <el-checkbox label="Remember the password" />
                </el-col>
                <el-col :span="6">
                    <el-link type="primary">Forgot password</el-link>
                </el-col>
            </el-row>

            <div class="text-center">
                <el-button @click="login" type="primary" round class="login-button">Login</el-button>
            </div>
        </form>
    </el-card>
</template>

<style scoped>
.box {
    width: 560px;
    /* height: 300px; */
    /* padding: 20px; */
}

.mg-sm {
    margin: 10px;
}

.text-center {
    text-align: center;
}

.login-button {
    width: 480px;
}
</style>