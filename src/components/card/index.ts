customElements.define("my-card", class MyCard extends HTMLElement {
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
            const style = document.createElement("style")
            style.innerHTML = `
                .root{
                    padding:10px 16px 23px 13px;
                    min-height:112px;
                    width:312px;
                    background-color:#FFF599;
                }
            `;
            this.shadow.appendChild(style)
          // La funcionalidad del elemento se escribe aquí
        }
        render(){
            this.shadow.innerHTML = `
                <div class="root"> ${this.innerHTML}</div>
            `;
        }
        
    }

);


