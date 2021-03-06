export function init(){
    class MyText extends HTMLElement {
        shadow: ShadowRoot;
        tagName: string;
        tags:string[] = ["h1","p"];
        tag:string = "p";
        constructor() {
            // Siempre llamar primero a super en el constructor
            super();
            this.shadow = this.attachShadow({mode:"open"});

            if(this.tags.includes(this.getAttribute("tag"))){
                this.tag = this.getAttribute("tag") || this.tag;
            }

          this.render();
          // La funcionalidad del elemento se escribe aquí
        }
        render(){
            const rootEl = document.createElement(this.tag)
            rootEl.textContent = this.textContent;
            this.shadow.appendChild(rootEl);
        }
        
    }


    customElements.define("my-text", MyText);

}
