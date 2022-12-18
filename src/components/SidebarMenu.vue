<template>
    <el-menu background-color="#293246" active-text-color="#fff" text-color="#fff">
        <el-menu-item index="0"><h1>vue3-admin</h1></el-menu-item>

        <el-menu-item index="1">
            <Icon icon="material-symbols:home-outline" class="sidebar-icon" />
            <span>Home</span>
        </el-menu-item>

        <el-sub-menu index="2">
            <template #title>
                <Icon icon="ph:code-light" class="sidebar-icon" />
                <span>Components</span>
            </template>

            <el-menu-item index="2-1">
                <Icon icon="ph:code-light" class="sidebar-icon" />
                <span>Element Components</span>
            </el-menu-item>

            <el-menu-item index="2-2">
                <Icon icon="mdi:heart-outline" class="sidebar-icon" />
                <span>Icons</span>
            </el-menu-item>

            <el-sub-menu index="2-3">
                <template #title>
                    <Icon icon="carbon:chart-line" class="sidebar-icon" />
                    <span>Charts</span>
                </template>
                <el-menu-item index="2-3-1">Line</el-menu-item>
                <el-menu-item index="2-3-2">Bar</el-menu-item>
                <el-menu-item index="2-3-3">Other</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>

        <el-sub-menu index="3">
            <template #title>
                <Icon icon="iconoir:cloud-error" class="sidebar-icon" />
                <span>Error Pages</span>
            </template>

            <el-menu-item index="3-1">
                <Icon icon="iconoir:cloud-error" class="sidebar-icon" />
                <span>404</span>
            </el-menu-item>

            <el-menu-item index="3-2">
                <Icon icon="lucide:server-off" class="sidebar-icon" />
                <span>401</span>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<style scoped>
.sidebar-icon {
    @apply text-18px mr-2;
}
</style>