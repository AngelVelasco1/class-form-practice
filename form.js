class Lapiz {
    #marca
    constructor({color= "Amarillo", dimension= 25, borrador= true, material="Madera", marca= "Norma" }) {
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
}

let objeto = new Lapiz({material: "Goma", dimension: 10, borrador: false, marca: "FaberCastell"});
console.log(objeto);