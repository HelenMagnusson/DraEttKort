const jsonOutput = document.querySelector("#txtArea");
function getApi() {
  /*Skriv din kod här*/
  //let input = "Chewbacca";
  const fullUri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
  fetch(fullUri)
    //.then(function(res){return res.json()})
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("imgdiv").innerHTML = "";
      var img = document.createElement("img");
      img.src = `${data.cards[0].image}`;
      document.getElementById("imgdiv").appendChild(img);
      //document.getElementById("result").innerHTML = "Image Element Added.";

      //const img = document.querySelector("img");
      //img.src = `${data.cards[0].image}`;
      let text = `You drew a ${data.cards[0].value} of ${data.cards[0].suit}`;
      document.getElementById("result").innerHTML = text;
      //document.getElementById("txtArea").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function Start(txt) {
  if (isNaN(txt)) {
    getApi();
  } else {
    let text = "Input not valid, must be a text.";
    document.getElementById("result").innerHTML = text;
  }
}
