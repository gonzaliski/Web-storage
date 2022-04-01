const state = {
    data: {
      tasks: [
      ],
    },
    listeners: [], // los callbacks
    getState() {
      return this.data;
    },
    getEnabledTasks(){
      const currentState =this.getState();
      return currentState.tasks.filter((t)=> !t.deleted);
    },
    setState(newState) {
      // modifica this.data (el state) e invoca los callbacks
      this.data = newState;
      for (const cb of this.listeners) {
        cb(newState);
      }
    },
    changeTaskState(id,value){
      const currentState =this.getState();
      const foundTask = currentState.tasks.filter((t)=>t.id == id);
       foundTask.completed = value;
       this.setState(currentState)
    },
    subscribe(callback: (any) => any) {
       // recibe callbacks para ser avisados posteriormente
       this.listeners.push(callback);
    },
    addTask(id,title) {
      const currentState = this.getState();
      currentState.tasks.push({id, title, completed:false})
      this.setState(currentState);
      
    },
  };

  export { state }