<script>
let id = 0;

export default {
    data() {
        return {
            skills: [
                {
                    id: id++,
                    name: 'JavaScript',
                    percentage: 50,
                    color: '#67c23a',
                },
                {
                    id: id++,
                    name: 'HTML',
                    percentage: 90,
                    color: '#e6a23c',
                },
                {
                    id: id++,
                    name: 'CSS',
                    percentage: 70,
                    color: '#7e9cff',
                },
                {
                    id: id++,
                    name: 'Vue',
                    percentage: 80,
                    color: '#f56c6d',
                },
                {
                    id: id++,
                    name: 'Node',
                    percentage: 60,
                    color: '#a650fe',
                },
            ]
        }
    }
}
</script>

<template>
    <el-card shadow="never">
        <template #header>
            <span class="font-bold">
                The skills list
            </span>
        </template>

        <div v-for="skill in skills" :key="skill.id">
            <div class="my-2">
                {{ skill.name }}
            </div>
            <el-progress :percentage="skill.percentage" :color="skill.color" :stroke-width="9" />
        </div>
    </el-card>
</template>