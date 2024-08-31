// Scope es la funcion anonima autoejecutada
(() => {
  let productPrice = 100;

  productPrice = 12;
  console.log("Precio producto", productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log("Customer age", customerAge);

  let productStock: number;
  //console.log("Product Stock", productStock);

  let discount = parseInt("aaa");
  console.log("Discount", discount);
  if(discount > 100) {
    console.log("Apply");
  } else {
    console.log("Not apply");
  }

  let hexadecimal = 0xfff;
  console.log("Hexadecimal", hexadecimal);
  let binario = 0b1010; // 10
  console.log("Binario", binario);

})();
