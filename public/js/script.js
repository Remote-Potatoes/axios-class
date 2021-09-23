document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("axios-class JS imported successfully!");
  },
  false
);

const avatar = document.querySelector(".card--avatar");
const charName = document.getElementById("char-name");
console.log("name:", charName);
const charGender = document.getElementById("char-gender");
console.log("gender:", charGender);
const charStatus = document.getElementById("char-status");
console.log("status:", charStatus);

const btn = document.getElementById("getAnotherChar");
btn.addEventListener("click", () => {
  axios
    .get(
      `https://rickandmortyapi.com/api/character/${Math.floor(
        Math.random() * 671
      )}`
    )
    .then((response) => {
      console.log("🔥 HERE IS OUR RESPONSE FROM AXIOS:", response.data);
      const { image, name, status, gender } = response.data;

      avatar.src = image;
      charName.innerText = name;
      charStatus.innerText = status;
      charGender.innerText = gender;
    })
    .catch((err) => {
      console.log(err);
    });
});
