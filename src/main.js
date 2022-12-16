import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import './assets/main.css'
import 'virtual:windi.css'
import { Icon } from '@iconify/vue';

const app = createApp(App);

// Register all icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// Register iconify icons
app.component('Icon', Icon);

app.use(ElementPlus);
app.mount('#app');