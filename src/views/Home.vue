<script>
import SidebarMenuVue from '../components/SidebarMenu.vue';
import Greeting from '../components/Greeting.vue';

export default {
    name: 'Home',

    components: {
        SidebarMenuVue,
        Greeting,
    },
};
</script>

<template>
    <el-container class="bg-[#f1f2f5]">
        <el-aside>
            <SidebarMenuVue />
        </el-aside>

        <el-container>
            <el-header class="bg-white">
                <div class="flex h-full">
                    <div class="flex items-center">
                        <Icon icon="material-symbols:home-outline" width="18" class="mr-1" />
                        <span>Home</span>
                    </div>

                    <div class="flex-grow"></div>

                    <div class="flex flex-row gap-6 children:(flex items-center)">
                        <el-link :underline="false">
                            <Icon icon="lucide:shirt" width="18" />
                        </el-link>
                        <el-link :underline="false">
                            <Icon icon="ph:bell-light" width="18" />
                        </el-link>
                        <el-link :underline="false">
                            <Icon icon="akar-icons:full-screen" width="18" />
                        </el-link>
                        <el-link :underline="false">
                            <Icon icon="material-symbols:translate" width="18" />
                        </el-link>
                        <div>
                            <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                                class="mr-1" />
                            <span>hu-snail</span>
                        </div>
                    </div>
                </div>
            </el-header>

            <el-main>
                <Greeting />
            </el-main>
        </el-container>
    </el-container>
</template>