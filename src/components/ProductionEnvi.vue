<script>
let id = 0;

export default {
    data() {
        return {
            packages: [
                {
                    id: id++,
                    name: '@element-plus/icons-vue',
                    version: '^1.1.4',
                },
                {
                    id: id++,
                    name: '@icon-park/vue-next',
                    version: '^1.4.0',
                },
                {
                    id: id++,
                    name: '@soerenmartius/vue3-clipboard',
                    version: '^0.1.2',
                },
                {
                    id: id++,
                    name: 'axios',
                    version: '^0.21.1',
                },
                {
                    id: id++,
                    name: 'echarts',
                    version: '^5.1.2',
                },
                {
                    id: id++,
                    name: 'element-plus',
                    version: '^2.2.5',
                },
                {
                    id: id++,
                    name: 'js-cookie',
                    version: '^3.0.1',
                },
                {
                    id: id++,
                    name: 'lodash',
                    version: '^4.17.21',
                },
                {
                    id: id++,
                    name: 'lodash-es',
                    version: '^4.17.21',
                },
                {
                    id: id++,
                    name: 'mockjs',
                    version: '^1.1.0',
                },
                {
                    id: id++,
                    name: 'nprogress',
                    version: '^0.2.0',
                },
                {
                    id: id++,
                    name: 'qs',
                    version: '^6.10.1',
                },
                {
                    id: id++,
                    name: 'screenful',
                    version: '^5.1.0',
                },
                {
                    id: id++,
                    name: 'vue',
                    version: '^3.2.33',
                },
                {
                    id: id++,
                    name: 'vue-i18n',
                    version: '^9.1.10',
                },
                {
                    id: id++,
                    name: 'vue-router',
                    version: '^4.0.15',
                },
                {
                    id: id++,
                    name: 'vue3-count-to',
                    version: '^1.0.11',
                },
                {
                    id: id++,
                    name: 'vuex',
                    version: '^4.0.2',
                }
            ],
        }
    }
}
</script>

<template>
    <el-card shadow="never">
        <template #header>
            <span class="font-bold">Production environments depend on information</span>
        </template>

        <el-descriptions border :column="3">
            <el-descriptions-item v-for="pkg in packages" :key="pkg.id">
                <template #label>
                    <div>
                        {{ pkg.name }}
                    </div>
                </template>
                {{ pkg.version }}
            </el-descriptions-item>
        </el-descriptions>
    </el-card>
</template>