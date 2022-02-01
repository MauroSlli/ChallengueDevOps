const grid = new Muuri('.grid', {

layout: { 
 
  rounding : false 
}
});


window.addEventListener('load', ()=>{

grid.refreshItems().layout();
document.getElementById('grid').classList.add('imagenes-cargadas');


// Agregamos los Listeners de los enlaces para filtrar por categoria.

const enlaces = document.querySelectorAll('#categorias a');

enlaces.forEach((elemento)=>{

  elemento.addEventListener('click', (e)=>{

    e.preventDefault();

    document.querySelector('.activo').classList.remove('activo')

    e.target.classList.add('activo');


    const categoria = e.target.innerHTML;

    categoria === "Todos" ? grid.filter(`[data-categoria]`) : grid.filter(`[data-categoria = "${categoria}"]`);

});
});

// Agregamos el Listener para la barra de busquedas

document.querySelector('#barra-busqueda').addEventListener('input',(e)=>{

const busqueda = e.target.value;

grid.filter((item)=> item.getElement().dataset.etiquetas.includes(busqueda))
});


// Agregamos Listener para las imagenes


const overlay = document.getElementById('overlay');

document.querySelectorAll('.grid .item img').forEach((elemento)=>{


const ruta = elemento.getAttribute('src');

elemento.addEventListener('click', ()=>{


overlay.classList.add('activo');

document.querySelector('#overlay img').src = ruta;

});
});

// EventListener del boton de cerrar


document.querySelector('#btn-cerrar-popup').addEventListener('click',()=>{

overlay.classList.remove('activo')


})


});