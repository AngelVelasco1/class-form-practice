class Pencil {
    #defaultBrand
    constructor({ color = "#505fff", size = 20, eraser = true, material = "gum", brand = "Norma" }) {
        this.defaultColor = color;
        this.defaultSize = size;
        this.defaultEraser = eraser;
        this.defaultMaterial = material;
        this.#defaultBrand = brand;
    }
    /* Getters */
    get color() {
        return this.defaultColor;
    }
    get size() {
        return this.defaultSize;
    }
    get eraser() {
        return this.defaultEraser;
    }
    get material() {
        return this.defaultMaterial;
    }
    get brand() {
        return this.#defaultBrand;
    }
}

let defaultPencil;
/* Each Property */
let color = document.querySelector(`[name= "color"]`);
let size = document.querySelector(`[name= "size"]`);
let eraser = document.querySelector(`[name= "eraser"]`);

defaultPencil = new Pencil({});

let eraserFieldset = document.querySelector("#eraser-select")
let defaultEraser = defaultPencil.eraser;
let eraserInput = eraserFieldset.querySelector(`input[value= "${defaultEraser}"]`);

let materialFieldset = document.querySelector("#material-select");
let defaultMaterial = defaultPencil.material;
let materialInput = materialFieldset.querySelector(`input[value= "${defaultMaterial}"]`);

let brandFieldset = document.querySelector("#brand-select");
let defaultBrand = defaultPencil.brand;
let brandInput = brandFieldset.querySelector(`input[value= "${defaultBrand}"]`);


/* DOM Loaded */
addEventListener("DOMContentLoaded", () => {
    defaultPencil = new Pencil({});

    color.value = defaultPencil.color;
    size.value = defaultPencil.size;
    eraserInput.checked = true;
    materialInput.checked = true;
    brandInput.checked = true;

})

/* Table Form Functionality */
const form = document.querySelector("#form");
const tbody = document.querySelector("#table tbody");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const colorData = formData.get("color");
    const sizeData = formData.get("size");
    const eraserData = formData.get("eraser");
    const materialData = formData.get("material");
    const brandData = formData.get("brand");

    const pencil = new Pencil({color: colorData,size: sizeData,eraser: eraserData, material: materialData, brand: brandData });

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td style= "background-color: ${pencil.color}">${pencil.color}</td>
      <td>${pencil.size}</td>
      <td>${pencil.brand}</td>
      <td>${pencil.eraser}</td>
      <td>${pencil.material}</td>
    `;
    tbody.appendChild(newRow);
    console.log(pencil);
})

