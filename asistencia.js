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
      ctx.fillStyle = 'black';
      ctx.fillText(`Torre: ${torre}`, 50, 100);
      ctx.fillText(`Apartamento: ${apartamento}`, 50, 150);
      ctx.fillText(`Nombre: ${nombre}`, 50, 200);
      ctx.fillText(`Teléfono: ${telefono}`, 50, 250);
      ctx.fillText(`Valor a Pagar: $${valorAPagar}`, 50, 300);
      ctx.fillText(`Número de Cuenta: XXXXXXXXXXXX`, 50, 350); // Reemplaza con el número de cuenta real
      ctx.fillText(`Titular de la Cuenta: XXXXXXXX`, 50, 400); // Reemplaza con el titular de la cuenta real

      // Muestra el botón de descarga
      const descargar = document.getElementById('descargar');
      descargar.style.display = 'inline';

      // Descarga la imagen generada
      descargar.href = canvas.toDataURL('image/png');
  };
}
