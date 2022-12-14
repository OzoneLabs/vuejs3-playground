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
            if (this.username == credentials.username && this.password == credentials.password) {
                alert('Login successful!');
            } else {
                alert('Login failed!');
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Login</h1>
        <form v-on:submit.prevent="login">
            <div>
                <input type="text" id="username" v-model="username" placeholder="Username">
            </div>

            <div>
                <input type="password" id="password" v-model="password" placeholder="Password">
            </div>

            <div>
                <input type="checkbox" id="remember-password" name="remember-password">
                <label for="remember-password">Remember the password</label>
            </div>

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>