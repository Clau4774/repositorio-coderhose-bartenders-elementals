export const crearTarjeta = data => {
    return `<article class="card-container">
            <h4 class="titulo-tarjeta">${data.title}</h4>
            <div class="card-container-div-img-and-p">
              <a href="#">
                <img
                  src="${data.imageInfo.imagePath}"
                  alt="${data.imageInfo.imageAltText}"
                />
              </a>
              <p>
                ${data.information.historyContent[0]}..
              </p>
            </div>
            <button class="button">Seguir leyendo</button>
          </article>`
}