<script>
import LoginRegisterCard from './components/LoginRegisterCard.vue';

export default {
    components: {
        Login: LoginRegisterCard,
    },
}
</script>

<template>
    <div id="background" class="bg-strong-blue full-screen left-top-padding">
        <Login />
    </div>
</template>

<style scoped>
    .bg-strong-blue {
        background-color: #293246;
    }

    .full-screen {
        width: 100vw;
        height: 100vh;
    }

    .left-top-padding {
        padding-top: 10px;
        padding-left: 10px;
    }
</style>