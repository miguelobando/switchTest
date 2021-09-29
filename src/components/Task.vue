<template>
    <div class="item">
        <div class="task" :style="{'text-decoration': style }">
            <p>{{taskObject.text}} -</p>
        </div>
        <div class="complete">
            <button @click="complete">Complete</button>
        </div>
        <div class="erase">
            <button @click="erase">Erase</button>
        </div>
  </div>
</template>

<script>
export default {
    name:'Task',
    props:['taskObject'],
    data(){
        return{
            style:"auto"
        }
    },
    methods:{
        complete: function(){
            let index = this.$parent.currentTasks.findIndex(e => e.id == this.taskObject.id);
            this.$parent.currentTasks[index].state = true;
            this.style = 'line-through'; 
        },
        erase: function(){
            let index = this.$parent.currentTasks.findIndex(e => e.id == this.taskObject.id);
            this.$parent.currentTasks.splice(index,1);            
        }
    }
}
</script>
<style scoped>
    .item{
        display: flex; 
        flex-direction: row;
        align-items: baseline;
    }
</style>