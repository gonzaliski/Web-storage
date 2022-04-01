
class Header extends HTMLElement {
        constructor() {
          // Siempre llamar primero a super en el constructor
          super();
          this.render();
          // La funcionalidad del elemento se escribe aquí
        }
        render(){
            this.style.backgroundColor = '#FF8282';
            this.style.minWidth = '310px';
            this.style.padding='17px';
            this.style.display='flex';
            this.style.justifyContent='center';
            this.style.alignItems='center';
        }
        
    }


    customElements.define("gon-header", Header);

