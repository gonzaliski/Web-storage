
customElements.define("todo-item", class ToDoItem extends HTMLElement {
    shadow: ShadowRoot;
    title: string;
    checked:boolean = false;
    
    constructor() {
        // Siempre llamar primero a super en el constructor
        super();
        this.shadow = this.attachShadow({mode:"open"});
        // La funcionalidad del elemento se escribe aquí
    }
    connectedCallback(){
        this.title = this.getAttribute("title") || "";
        this.checked =  this.hasAttribute("checked");
        this.id = this.getAttribute("id");
    
        const style = document.createElement("style")
        style.innerHTML = `
        .root{
            font-size:18px;
            padding:10px 16px 23px 13px;
            min-height:112px;
            width:312px;
            background-color:#FFF599;
        }
        .title.checked{
            text-decoration: line-through;
        }
        `;
        this.shadow.appendChild(style)
        this.render();
        
    }

    addListeners(){
        const checkEl  = this.shadow.querySelector(".checkbox-input");
        checkEl.addEventListener("click",(e)=>{
            const target = e.target as any;
            console.log("si esta checkeado:", target.checked)
            const event = new CustomEvent('change', {
                detail:{
                    id:this.id,
                    value:target.checked
                }
            });
            this.dispatchEvent(event);
        });
    }

    render(){
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="root">  
             <h4 class="title ${this.checked? "checked": ""}">${this.title}</h4>
              <div>
               <input class="checkbox-input" type="checkbox" ${this.checked ? "checked" : ""}/>
              </div>
            </div>
        `;
         this.shadow.appendChild(div);
         this.addListeners();
    }
    
}

);
