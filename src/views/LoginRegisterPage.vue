<script>
import LoginRegisterCard from '../components/LoginRegisterCard.vue';

export default {
    components: {
        LoginRegisterCard: LoginRegisterCard,
    },
}
</script>

<template>
    <el-row class="strong-blue-bg full-screen">
        <el-col :span="12" class="white-text center-flex col-flex">
            <div style="width: 520px;">
                <img src="../assets/loginregister-illustration.svg" width="320" />
                <div class="big-text">Out of the box in the background management system</div>
                <div class="small-text">Click login for a quick experience</div>
            </div>
        </el-col>

        <el-col :span="12" class="center-flex">
            <LoginRegisterCard />
        </el-col>
    </el-row>
</template>

<style scoped>
.strong-blue-bg {
    background-color: #293246;
}

.big-text {
    font-weight: bold;
    font-size: 30px;
}

.small-text {
    margin-top: 20px;
}

.white-text {
    color: #fff;
}

.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.col-flex {
    flex-direction: column;
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