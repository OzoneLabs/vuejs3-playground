<script>
import SidebarMenuVue from '../components/SidebarMenu.vue';

export default {
    name: 'Home',
    components: {
        SidebarMenuVue
    }
}

</script>

<template>
    <el-container>
        <el-aside>
            <SidebarMenuVue />
        </el-aside>

        <el-container>
            <el-header>
                Header
            </el-header>

            <el-main>
                Main
            </el-main>
        </el-container>
    </el-container>
</template>