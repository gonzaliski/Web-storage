import "./components/form"
import  "./components/todo-item"
import "./components/input"
import "./components/header"
import "./components/button"
import "./components/card"
import {initPage} from "./pages/page"
import {state} from "./state" 

(function main(){
    const taskContainerEl = document.querySelector(".task-list")
    initPage(taskContainerEl);
})();