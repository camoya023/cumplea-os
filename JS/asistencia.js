function generarRecibo() {
  const titular = "Conjunto Residencial GRANATE"
  const cuenta = "116053398"
  const torreInput = document.getElementById('torre').value;
  const apartamento = document.getElementById('apartamento').value;
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const valor = document.getElementById('valor').value;
  const total = valor.value;
  const canvas = document.getElementById('recibo');
  const ctx = canvas.getContext('2d');
  const image = new Image();
  const torreValues = { "1A": 11, "1B": 12, "1C": 13, "1D": 14, "2A": 21, "2B": 22, "2C": 23, "2D": 24 };

  // Reemplaza 'nombre-de-tu-imagen.png' con la URL de tu imagen base
  image.src = './/Assets/Images/cuenta-recaudo-avvillas.png';

  image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      // Obtén el valor numérico de la torre
      const torre = torreValues[torreInput] || 0;

      // Configura los valores en el canvas
      ctx.font = '16px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText(`${titular}`, 40, 115)
      ctx.fillText(`${cuenta}`, 500, 115)
      ctx.fillText(`${apartamento}`, 80, 188);
      ctx.fillText(`${torre}`, 450, 188);
      ctx.fillText(`${nombre}`, 40, 340);
      ctx.fillText(`${telefono}`, 250, 340);
      ctx.fillText(`${valor}`, 600, 333);
      ctx.fillText(`${valor}`, 600, 355);
      

      // Muestra el botón de descarga
      const descargar = document.getElementById('descargar');
      descargar.style.display = 'inline';

      // Descarga la imagen generada
      descargar.href = canvas.toDataURL('image/png');
  };
}
