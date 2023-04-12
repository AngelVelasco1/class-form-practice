class Pencil {
    #marca
    constructor({color= "#ffffff", dimension= 25, borrador= true, material="Madera", marca= "Norma" }) {
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
    get color() {
        return this.color;
    }
}

let defaultPencil = undefined;
let color = document.querySelector(`[name="color"]`);

addEventListener("DOMContentLoaded", (e)=> {
    defaultPencil = new Pencil({});
    color.value = defaultPencil.color;
})