<script>
import LoginRegisterCard from '../components/LoginRegisterCard.vue';

export default {
    components: {
        LoginRegisterCard: LoginRegisterCard,
    },
}
</script>

<template>
    <el-container class="bg-[#293246] w-screen h-screen">
        <el-header class="pt-4 px-8">
            <el-row justify="space-between">
                <div class="text-white text-xl">
                    <Icon icon="logos:vue" class="inline-block mr-3" />
                    <span>vue3-admin</span>
                </div>

                <button>
                    <Icon icon="ph:translate-bold" color="white" />
                </button>
            </el-row>
        </el-header>

        <el-main>
            <el-row class="w-full h-full">
                <el-col :sm="24" :lg="12" class="text-white flex-center flex-col">
                    <div class="max-w-520px">
                        <img src="../assets/loginregister-illustration.svg" width="320" />
                        <div class="font-semibold text-30px">Out of the box in the background management system</div>
                        <div class="mt-20px">Click login for a quick experience</div>
                    </div>
                </el-col>

                <el-col :sm="24" :lg="12" class="flex-center sm:my-6">
                    <LoginRegisterCard />
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<style scoped>
.flex-center {
    @apply flex justify-center items-center;
}
</style>