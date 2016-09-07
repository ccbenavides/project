// articulo - componente


// titulo
// mes-dia
// una imagen del articulo   - url
// autor
// descriccion
// favoritos
// respuestas
// categoria 

var objeto = {
        titulo : "Free Speech Now  Brutal War on the Internet",
        mes_dia : "10 agosto",
        imagen : "https://cdn-images-1.medium.com/fit/t/800/240/0*eIftYj-G7GSiHZ_B.jpg",
        autor : "Anders Emil Maller",
        descripcion : "The internet has ruined...",
        favoritos : "100",
        respuestas : "31 responses",
        categoria : "trouble stories"
}

console.log(`las respuestas :  ${objeto.respuestas}`);

var $contenido = document.getElementById("contenido");

$contenido.innerHTML =  `
<div class="articulo">
    <span class="color_green">  ${objeto.autor}
        <span class="color_gray"> in </span>
        ${objeto.categoria} </span>
    <div class="fecha">
        <span> ${objeto.mes_dia} </span>
    </div>    
    <div> <img src="${objeto.imagen}"> </div>
    <h3> ${objeto.titulo} </h3>
    <p class="color_gray">${objeto.descripcion}</p>
    <div class="cajaflex">
        <span> <iron-icon icon="icons:favorite-border"></iron-icon> ${objeto.favoritos}</span>
        <span>${objeto.respuestas} <iron-icon icon="icons:turned-in-not"></iron-icon></span>
    </div>
</div>
`;

$contenido.innerHTML += `
<div class="articulo">
    <span class="color_green">  ${objeto.autor}
        <span class="color_gray"> in </span>
        ${objeto.categoria} </span>
    <div class="fecha">
        <span> ${objeto.mes_dia} </span>
    </div>    
    <div> <img src="${objeto.imagen}"> </div>
    <h3> ${objeto.titulo} </h3>
    <p class="color_gray">${objeto.descripcion}</p>
    <div class="cajaflex">
        <span>${objeto.favoritos}</span>
        <span>${objeto.respuestas}</span>
    </div>
</div>
`;