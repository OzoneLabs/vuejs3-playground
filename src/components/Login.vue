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
            activeTab: 'login',
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
    <form>
        <div class="mg-sm">
            <el-input v-model="username" placeholder="Username">
                <template #prefix>
                    <el-icon>
                        <User />
                    </el-icon>
                </template>
            </el-input>
        </div>

        <div class="mg-sm">
            <el-input type="password" v-model="password" placeholder="Password">
                <template #prefix>
                    <el-icon>
                        <Lock />
                    </el-icon>
                </template>
            </el-input>
        </div>

        <el-row justify="space-between">
            <el-checkbox label="Remember the password" />
            <el-link type="primary">Forgot password</el-link>
        </el-row>

        <div class="text-center">
            <el-button @click="login" type="primary" round class="login-button">Login</el-button>
        </div>
    </form>
</template>

<style scoped>
.mg-sm {
    margin: 10px;
}

.text-center {
    text-align: center;
}

.login-button {
    width: 100%;
    margin-top: 20px;
}
</style>