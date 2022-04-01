import { state } from "../../state";
import {idGen} from "../../id"

class addItemForm extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  constructor() {
    // Siempre llamar primero a super en el constructor
    super();
    // La funcionalidad del elemento se escribe aquí
    this.render();
  }
  connectedCallback() {
    const formEl = this.shadow.querySelector(".form");
    formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const f = event.target as any;
      console.log(f.text.value);
      state.addTask(idGen().toString(),f.text.value);
      console.log("añadido task:",state.getState())
    });
  }
  render() {
    this.shadow.innerHTML = `
       <form class="form"
       style="display:flex;
        flex-direction:column;
        gap:12px;
       "
       > 
        <label> Nuevo pendiente </label>
         <input name="text"
         style=" min-width:300px;
         height:50px;
         border: 2px solid #000000;
         border-radius:4px;"
         />
        <button style="
                background: #9CBBE9;
                border-radius: 4px;
                padding:15px;
                height:55px;
                min-width:312px;
                font-family: 'Roboto';
                font-weight:700;
        "
        > Agregar </button>
        </form>
        `;
  }
}
customElements.define("add-item-form", addItemForm);
