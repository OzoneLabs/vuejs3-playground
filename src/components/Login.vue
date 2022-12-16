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
        <div>
            <el-input v-model="username" placeholder="Username">
                <template #prefix>
                    <el-icon>
                        <User />
                    </el-icon>
                </template>
            </el-input>
        </div>

        <div class="mt-4">
            <el-input type="password" v-model="password" placeholder="Password">
                <template #prefix>
                    <el-icon>
                        <Lock />
                    </el-icon>
                </template>
            </el-input>
        </div>

        <el-row justify="space-between" class="mt-4">
            <el-checkbox label="Remember the password" />
            <el-link type="primary">Forgot password</el-link>
        </el-row>

        <div class="mt-20px">
            <el-button @click="login" type="primary" round class="w-full">Login</el-button>
        </div>

        <el-divider>
            Third-party login
        </el-divider>

        <el-row justify="space-around">
            <el-link :underline="false">
                <Icon icon="icon-park-outline:wechat" width="25px" />
            </el-link>

            <el-link :underline="false">
                <Icon icon="icon-park-outline:github" width="25px" />
            </el-link>

            <el-link :underline="false">
                <Icon icon="ph:twitter-logo" width="25px" />
            </el-link>

            <el-link :underline="false">
                <Icon icon="eva:google-outline" width="25px" />
            </el-link>
        </el-row>
    </form>
</template>

<style scoped>
.other-logins {
    @apply w-60px;
}
</style>