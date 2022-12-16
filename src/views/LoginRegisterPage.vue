<script>
import LoginRegisterCard from '../components/LoginRegisterCard.vue';

export default {
    components: {
        LoginRegisterCard: LoginRegisterCard,
    },
}
</script>

<template>
    <el-row class="bg-[#293246] w-screen h-screen">
        <el-col :span="12" class="text-white flex-center flex-col">
            <div style="width: 520px;">
                <img src="../assets/loginregister-illustration.svg" width="320" />
                <div class="font-semibold text-30px">Out of the box in the background management system</div>
                <div class="mt-20px">Click login for a quick experience</div>
            </div>
        </el-col>

        <el-col :span="12" class="flex-center">
            <LoginRegisterCard />
        </el-col>
    </el-row>
</template>

<style scoped>
.flex-center {
    @apply flex justify-center items-center;
}
</style>