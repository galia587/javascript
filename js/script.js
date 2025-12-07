function simuladorCompras() {
  let contraseña = prompt("Ingrese su contraseña (2500=Admin, 3000=Vendedor):");
  let descuento = 15;

  if (contraseña === "2500") {
    alert("Bienvenido Administrador de descuentos ✅");
    descuento = parseFloat(prompt("Ingrese el porcentaje de descuento inicial (ej: 10 para 10%):")) / 100;
  } else if (contraseña === "3000") {
    alert("Bienvenido Vendedor ✅ (se aplicará el descuento configurado por el administrador) del " + (descuento) + "%" );
  } else {
    alert("Contraseña incorrecta ❌");
    return;
  }

  let seguir = "S";
  let total = 0;

  while (seguir === "S") {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad:"));

    if (precio <= 0 || cantidad <= 0) {
      alert("El precio y la cantidad deben ser mayores que 0.");
    } else {
      let subtotal = precio * cantidad;

      // se aplica descuento si corresponde
      if (cantidad>=10) {
        if (descuento > 0) {
            subtotal = subtotal * (1 - descuento);
            alert("Se aplicó un descuento del " + (descuento * 100) + "%");
        }
      }

      //iva
      let iva = subtotal * 0.21;
      subtotal = subtotal + iva;

      alert("Subtotal con impuestos: $" + subtotal.toFixed(2));
      total = total + subtotal;
    }

    seguir = prompt("¿Desea comprar otro producto? (S/N)");
  }

  alert("El total de su compra es: $" + total.toFixed(2));
}

simuladorCompras();
