<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            checkPassword: '',
        }
    },

    methods: {
        register() {
            if (this.username === '' || this.password === '' || this.checkPassword === '') {
                alert('Please fill in all fields!');
            } else if (this.password !== this.checkPassword) {
                alert('Passwords do not match!');
            } else {
                alert('Registration successful!');
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

        <div class="mg-sm">
            <el-input type="password" v-model="checkPassword" placeholder="Confirm Password">
                <template #prefix>
                    <el-icon>
                        <Lock />
                    </el-icon>
                </template>
            </el-input>
        </div>

        <div class="mt-10px">
            <el-button @click="register" type="primary" round class="w-full">Register</el-button>
        </div>
    </form>
</template>

<style scoped>
.mg-sm {
    margin: 10px;
}

.register-button {
    width: 100%;
    margin-top: 10px;
}
</style>