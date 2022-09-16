// function getImageApi() {
//   const settings = {
//     async: true,
//     crossDomain: true,
//     url: "https://api.igdb.com/v4/artworks",
//     method: "GET",
//     headers: {
//       Client-ID: 3mi4zplyog2d09t5yz0t60l7581y9r,
//       Authorization: Bearer 696kp37tcjubtig7m0z5ra3kd0q1eh
//     },
//   };
//   $.ajax(settings).done(function (response) {
//     gameImage = response;
//     console.log("gameImage", gameImage);
//   });
// }

axios({
  url: "https://api.igdb.com/v4/covers",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Client-ID': '3mi4zplyog2d09t5yz0t60l7581y9r',
      'Authorization': 'Bearer 696kp37tcjubtig7m0z5ra3kd0q1eh'
  },
  data: "fields category,checksum,content_descriptions,rating,rating_cover_url,synopsis;"
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  })