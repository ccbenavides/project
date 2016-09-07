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
<span>  ${objeto.autor} in ${objeto.categoria} </span>
<div>
    <span> ${objeto.mes_dia} </span>
</div>    
<div> <img src="${objeto.imagen}"> </div>
<h3> ${objeto.titulo} </h3>
<p>${objeto.descripcion}</p>
<div class="cajaflex">
    <span>${objeto.favoritos}</span>
    <span>${objeto.respuestas}</span>
</div>
`;
