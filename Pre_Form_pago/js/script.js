function verifySpaces() {
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const numCard = document.getElementById("numCard").value;
  const endDate = document.getElementById("endDate").value;
  const cvvCode = document.getElementById("cvvCode").value;

  const array = [name, lastName, numCard, endDate, cvvCode];

  let banderita = true;

  for (let contador in array) {
    if (array[contador] === "") banderita = false;
  }

  banderita === true
    ? swal({
        title: "Transacción Exitosa!",
        text: "Diligenciado Correctamente!",
        icon: "success",
      })
    : swal({
        title: "Error",
        text: "Diligenciar todos los campos!",
        icon: "error",
      });
}
