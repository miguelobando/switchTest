import Vue from 'vue'
import App from './App.vue'
import TaskList from './components/TaskList.vue';
import Task from './components/Task.vue'
Vue.config.productionTip = false
Vue.use(Task)
Vue.use(TaskList)
Vue.component('Task',Task)
Vue.component('TaskList',TaskList)
new Vue({
  render: h => h(App),
}).$mount('#app')
