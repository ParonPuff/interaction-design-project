import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui';
import 'material-icons/iconfont/material-icons.css';
import 'vuestic-ui/css';
var app = createApp(App);
app.use(createVuestic());
app.mount('#app');
