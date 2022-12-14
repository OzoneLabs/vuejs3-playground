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
    <el-card class="box">
        <el-tabs v-model="activeTab">
            <el-tab-pane label="Login" name="login">
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

.mg-sm {
    margin: 10px;
}

.text-center {
    text-align: center;
}

.login-button {
    /* padding: 20em; */
    width: 25em;
    margin: 20px 0;
}
</style>