import { createApp } from 'vue';
import App2 from './App2.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const App = createApp(App2);
App.use(ElementPlus);
App.mount('#app');