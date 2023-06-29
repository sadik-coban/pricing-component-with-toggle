function getValue() {
  var isChecked = document.getElementById("price-checkbox").checked;
  if (isChecked) {
    document.getElementById("basic-price").textContent = "$19.99";
    document.getElementById("pro-price").textContent = "$24.99";
    document.getElementById("master-price").textContent = "$39.99";
  } else {
    document.getElementById("basic-price").textContent = "$199.99";
    document.getElementById("pro-price").textContent = "$249.99";
    document.getElementById("master-price").textContent = "$399.99";
  }
}
