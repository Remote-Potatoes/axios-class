const { default: axios } = require("axios");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res) => {
  axios
    .get(
      `https://rickandmortyapi.com/api/character/${Math.floor(
        Math.random() * 671
      )}`
    )
    .then((response) => {
      console.log("🔥 HERE IS OUR RESPONSE FROM AXIOS:", response.data);
      const { image, name, status, gender } = response.data;
      res.render("index", {
        character: {
          avatar: image,
          name,
          gender,
          status,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("index", {
        character: {
          avatar: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
          name: "Healhty Morty",
          gender: "male",
          status: "dead",
        },
      });
    });
});

module.exports = router;
