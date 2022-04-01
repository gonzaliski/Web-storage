import { state } from "../../state"
    class PendingTasksList extends HTMLElement {
        shadow = this.attachShadow({mode: 'open'});
        constructor() {
        // Siempre llamar primero a super en el constructor
        super();
        this.render();
        // La funcionalidad del elemento se escribe aquí
    }
    connectedCallback(){ //avisa cuando esta conectado el componente y listo para usar
        state.subscribe(()=>{this.render()});
    }
    render() {
          const list = state.getState().list;
          const lastTask = list[list.length - 1]
          if(lastTask){  
                    this.shadow.innerHTML +=`
                    <div style="display:grid;
                    grid-template-columns: 220px 1fr;
                    box-sizing: border-box;
                    align-items:center;
                    padding:10px 16px 23px 13px;
                    gap:30px;
                    justify-content:space-between;
                    min-height:112px;
                    width:312px;
                    background-color:#FFF599;
                    ">

                    <label for="item"
                    style="
                    word-wrap: break-word
                    "
                    >${lastTask}</label>
                    <input id="item" type="checkbox"/>                    
                    <div >
                    </div>

                    </div>
                    `    
          }
            }
}

    customElements.define("items-list", PendingTasksList);

  