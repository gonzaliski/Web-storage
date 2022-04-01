class Button extends HTMLElement {
        constructor() {
          // Siempre llamar primero a super en el constructor
          super();
          this.render();
          // La funcionalidad del elemento se escribe aquí
        }
        render(){
            var style = document.createElement("style");
            style.textContent = `
            .button-custom{
                background: #9CBBE9;
                border-radius: 4px;
                padding:15px;
                height:55px;
                min-width:312px;
                font-family: 'Roboto';
                font-weight:700;
            `
    
            var shadow = this.attachShadow({ mode: "open"});
            const content = this.textContent;
            const button = document.createElement("button");
            button.innerText=content;
            button.classList.add("button-custom");
            shadow.appendChild(style);
            shadow.appendChild(button);
            
        }
        
    }
    customElements.define("blue-button", Button);
    

