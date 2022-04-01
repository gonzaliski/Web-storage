export function init(){
    class TextField extends HTMLElement {
        constructor() {
          // Siempre llamar primero a super en el constructor
          super();
          this.render();
          // La funcionalidad del elemento se escribe aquí
        }
        render(){

            var shadow = this.attachShadow({ mode: "open"});
            const label = this.getAttribute("label");
            const style = document.createElement("style");
            style.innerHTML=`
                .root{
                    display:flex;
                    flex-direction:column;
                }
                .label{
                    margin-bottom:3px;
                }
                .input-custom{
                    min-width:300px;
                    height:50px;
                    border: 2px solid #000000;
                    border-radius:4px;
                }
            `

            var div = document.createElement("div");
            div.classList.add("root");
            div.innerHTML=`
                <label class="label">${label} </label>            
                <input class="input-custom" name="text"> </input>
            `
                
            shadow.appendChild(style);
            shadow.appendChild(div);
        }
        
    }
    customElements.define("text-field", TextField);

}
