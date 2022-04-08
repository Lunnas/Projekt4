document.addEventListener("DOMContentLoaded", (e) => {
  let btn = document.querySelector("#btn");

  btn.addEventListener("click", function () {
    const inputNumber = document.querySelector("input").value;
    console.log(inputNumber);
    const currency = document.querySelector("#currency").value;
    console.log(currency);

    fetch("https://api.nbp.pl/api/exchangerates/tables/a/?format=json")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const data = response[0]["rates"];
        let dataAll = data;

        let USD = dataAll.find((rate) => rate.code === "USD")["mid"];
        let EUR = dataAll.find((rate) => rate.code === "EUR")["mid"];
        let CHF = dataAll.find((rate) => rate.code === "CHF")["mid"];

        let result = "";
        if (currency === "usd") {
          result = USD * inputNumber + " zł";
        } else if (currency === "eur") {
          result = EUR * inputNumber + " zł";
        } else if (currency === "chf") {
          result = CHF * inputNumber + " zł";
        }
        document.querySelector("#result").innerHTML = result;
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
