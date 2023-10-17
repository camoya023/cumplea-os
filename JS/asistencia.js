function generarRecibo() {
  const torre = document.getElementById('torre').value;
  const apartamento = document.getElementById('apartamento').value;
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const valorAPagar = document.getElementById('valor-a-pagar').value;
  const canvas = document.getElementById('recibo');
  const ctx = canvas.getContext('2d');
  const image = new Image();

  // Reemplaza 'nombre-de-tu-imagen.png' con la URL de tu imagen base
  image.src = './/Assets/Images/cuenta-recaudo-avvillas.png';

  image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      // Configura los valores en el canvas
      ctx.font = '16px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText(`${torre}`,500, 190);
      ctx.fillText(`${apartamento}`, 120, 190);
      ctx.fillText(`${nombre}`, 50, 335);
      ctx.fillText(`${telefono}`, 300, 335);
      ctx.fillText(`${valorAPagar}`,600, 332);
      ctx.fillText(`${valorAPagar}`,600, 354);
      ctx.fillText(`116053398`, 500, 118); // Reemplaza con el número de cuenta real
      ctx.fillText(`Conjunto Residencial GRANATE`, 50, 118); // Reemplaza con el titular de la cuenta real

      // Muestra el botón de descarga
      const descargar = document.getElementById('descargar');
      descargar.style.display = 'inline';

      // Descarga la imagen generada
      descargar.href = canvas.toDataURL('image/png');
  };
}
