let temp = document.querySelector(".temp-desc");
let deg = document.querySelector(".temp-degree");
window.addEventListener("load", () => {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Hyderabad,india&APPID=ed3863866a5e3f595964ddd242abec92"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let degValue = "Degree :" + data["main"]["temp"];
      let tempValue = "Description : " + data["weather"]["main"];
      temp.innerText = tempValue;
      deg.innerText = degValue;
    })
    .catch((err) => alert("oops!"));
});
