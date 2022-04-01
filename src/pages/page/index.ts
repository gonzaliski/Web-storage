import { state } from "../../state";
export function initPage(containerEl) {
  const div = document.createElement("div");
  const tasks = state.getEnabledTasks();

  console.log("esta son las tasks:", tasks);
  
  div.innerHTML = `<ul class="lista"> </ul>`;
  const listaEl = div.querySelector(".lista");

  function createTasks(tasks) {
    listaEl.innerHTML = "";
    for(const task of tasks){
      const todoTaskEl = document.createElement("todo-item");
      todoTaskEl.setAttribute("title", task.title);
      todoTaskEl.setAttribute("id", task.id);
      if(task.completed){
        todoTaskEl.setAttribute("checked","true");
      }
      todoTaskEl.addEventListener("change",(e:any)=>{
        console.log("toy escuchando",e.detail);
        
        state.changeTaskState(e.detail.id, e.detail.value);
      })
      listaEl.appendChild(todoTaskEl);
    }
  }
  state.subscribe(() => {
    createTasks(state.getEnabledTasks());
  });
  createTasks(tasks);
  containerEl.appendChild(div);
}
