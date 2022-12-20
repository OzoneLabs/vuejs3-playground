<script>
let id = 0;

export default {
    data() {
        return {
            resources: [
                [
                    {
                        id: id++,
                        title: 'Nutui',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                    {
                        id: id++,
                        title: 'Vant',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                    {
                        id: id++,
                        title: 'Ant Design',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                    {
                        id: id++,
                        title: 'Vite',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                ],
                [
                    {
                        id: id++,
                        title: 'Vue3',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                    {
                        id: id++,
                        title: 'ElementPlus',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                    {
                        id: id++,
                        title: 'Iconpark',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                    {
                        id: id++,
                        title: 'Naiveui',
                        content: 'Lorem ipsum dolor sit amet.',
                    }
                ],
                [
                    {
                        id: id++,
                        title: 'Echarts5.0',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                    {
                        id: id++,
                        title: 'XGplayer',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                    {
                        id: id++,
                        title: 'VueUse',
                        content: 'Lorem ipsum dolor sit amet.',
                    },
                    {
                        id: id++,
                        title: 'Vue3',
                        content: 'Lorem ipsum dolor sit amet.',
                    }
                ]
            ]
        }
    }
}
</script>

<template>
    <el-card shadow="never">
        <template #header>
            <span class="font-bold">Vue3 related resources are recommended</span>
        </template>

        <table class="w-full border">
            <tr v-for="row in resources">
                <td class="border p-4" v-for="resource in row" :key="resource.id">
                    <div class="font-bold text-lg">{{ resource.title }}</div>
                    <div>{{ resource.content }}</div>
                </td>
            </tr>
        </table>
    </el-card>
</template>