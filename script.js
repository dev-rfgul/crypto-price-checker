var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  methord: "Get",
  headers: {},
};
$.ajax(settings).done(function (response) {
  console.log(response);
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});






// this handles the search box 

document.addEventListener("DOMContentLoaded", function () {
  // Select the search button
  var searchBtn = document.querySelector(".search button");

  // Log the search button
  console.log("Search Button:", searchBtn);

  searchBtn.addEventListener("click", () => {
    // Select the user search input by class name and get its value
    var userInputElement = document.querySelector(".search-input");
    var userInputValue = userInputElement.value;

    // Log the user search input value
    console.log("User Input Value:", userInputValue);
    console.log("button clicked");

    console.log(userInputValue);

    // Select the price element by ID and get its text content
    var priceElement = document.getElementById("price");
    console.log(priceElement)
    var priceText = priceElement.textContent;

    // Select the name element by ID and get its text content
    var nameElement = document.getElementById("name");
    console.log(nameElement)
    var nameText = nameElement.textContent;

    // Log the text content
    console.log("Price Text:", priceText);
    console.log("Name Text:", nameText);
    // priceText=innerHTML=response[userInputValue].usd

    var settings = {
      async: true,
      scrossDomain: true,
      url: `https://api.coingecko.com/api/v3/simple/price?ids=${userInputValue}&vs_currencies=usd`,
      methord: "Get",
      headers: {},
    };
    $.ajax(settings).done(function (response) {
    //   console.log(response);
    if(userInputValue in response){

    
      // var cryptoData= response[userInputValue];
      // var cryptoPriceUSD=cryptoData.usd
      // console.log(cryptoData)
      // console.log(cryptoPriceUSD)
      // var cryptoPriceUSDNew=cryptoPriceUSD.toString();
      //  var cryptoPriceUSDNew2=cryptoPriceUSD.toUpperCase();

      // nameElement.textContent=`Name: ${cryptoPriceUSDNew2}`



      var cryptoData = response[userInputValue];
var cryptoPriceUSD = cryptoData.usd;
console.log(cryptoData);
console.log(cryptoPriceUSD);

// Convert cryptoPriceUSD to uppercase
var cryptoPriceUSDNew = cryptoPriceUSD.toString();
var cryptoPriceUSDNew2 = userInputValue.toUpperCase();

nameElement.textContent = `Name: ${cryptoPriceUSDNew2}`;

   priceElement.textContent=`Price : $ ${cryptoPriceUSD}`

    }
    else{
        priceElement.textContent="Price not Found"
        nameElement.textContent="Currency  not Found"
    }



    //   priceText.innerHTML=data.[userInputValue].value
      
    //   const cryptoName = `${userInputValue}`;
    //   const cryptoPriceUSD = response[cryptoName].usd;
    //   priceText.innerHTML=response[userInputValue].usd
    //   nameText.innerHTML=response[userInputValue].usd
    });
  });


});


