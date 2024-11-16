function calculate() {
  try {
    const price1 = parseFloat(document.getElementById("price1").value);
    const price2 = parseFloat(document.getElementById("price2").value);
    console.log(1);
  } catch (error) {
    const result1 = document.getElementById("result1");
    result1.textContent = "错误";
    console.log(2);
  }
}
