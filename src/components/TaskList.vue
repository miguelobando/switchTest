<template>
    <div>
    <div class="container" v-for="task in currentTasks" :key="task.key">
      <ul>
        <li> <Task :taskObject="task" /></li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="newTask" name="add" placeholder="add a task" id="add">
      <button @click="addTask">+</button>  
    </div>
  </div>
</template>

<script>
import Task from './Task.vue';
export default {
  name: 'TaskList',
  data(){
    return{
      newTask:"",
      currentTasks:[]
    }
  },
  components:{
    Task
  },
  methods:{
    addTask(){
      this.currentTasks.push({
        text:this.newTask,
        state:false,
        id: Math.random()
      })
    },
    },
    mounted(){
      let list = JSON.parse(localStorage.getItem('tasks'));
      if(list !=null)
        this.currentTasks = list;
    },
    watch:{
     currentTasks: {
      handler: function (val) {
        localStorage.setItem('tasks',JSON.stringify(val))
      },
      deep: true
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-direction: row;
  justify-content: center
}
ul{
  list-style-type:none
}
</style>
