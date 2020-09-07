$(function () {
  // =============================================== Person Form Ajax with jQuery =======================================================================
  // Handling form input -- serialize
  // $("#contact").on("submit", function (event) {
  //   event.preventDefault();
  //   let formData = $(this).serialize();
  //   console.log(formData);
  // });
  //Handling form in -- serializeArray
  // $("#contact").on("submit", function (event) {
  //   event.preventDefault();
  //   let formData = $(this).serializeArray();
  //   console.log(formData);
  // });
  // =============================================== First Ajax with jQuery =======================================================================
  //   $.ajax({ url: "https://pokeapi.co/api/v2/pokemon/pikachu", type: "GET" })
  //   .done(function (data) {
  //     console.log("This function will be run if the ajax is successful");
  //     // console.log(data);
  //     return data;
  //   })
  //   .fail(function (data) {
  //     console.log("This function will be run if the ajax if failed");
  //   })
  //   .always(function (data) {
  //     console.log(data);
  //     console.log("This function runs no matter success or fail.");
  //   });
  // }
  // function getPikachu() {
  //   $.get("https://pokeapi.co/api/v2/pokemon/pikachu")
  //     .done(function (data) {
  //       console.log("This function will be run if the ajax is successful");
  //       console.log(data);
  //     })
  //     .fail(function (data) {
  //       console.log("This function will be run if the ajax if failed");
  //     })
  //     .always(function (data) {
  //       console.log("This function runs no matter success or fail.");
  //     });
  // }
  // getPikachu();
  // function getPikachu() {
  //   $.get("https://pokeapi.co/api/v2/pokemon/pikachu")
  //     .then(function (data) {
  //       console.log("This function will be run if the ajax is successful");
  //       return data.moves;
  //     })
  //     .then(function (data) {
  //       console.log("second then");
  //       console.log(data, "<DATA");
  //       let moves = data.map((move) => {
  //         return move.move.name;
  //       });
  //       return moves;
  //     })
  //     .then(function (data) {
  //       console.log("third then");
  //       console.log(data);
  //     });
  // }
  // getPikachu();
  // =============================================== Function for pokemon, Ajax with jQuery =======================================================================
  // function getPokemon(name) {
  //   $.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //     .done(function (data) {
  //       console.log(
  //         "This function will be run if the ajax is successful, here we have the information for this pokemon: " +
  //           name
  //       );
  //       console.log(data);
  //     })
  //     .fail(function (data) {
  //       console.log("This function will be run if the ajax if failed");
  //     })
  //     .always(function (data) {
  //       console.log("This function runs no matter success or fail.");
  //     });
  // }
  // getPokemon("bulbasaur");
  // =============================================== Functionise the whole Pokemon API Ajax with jQuery =======================================================================
  function getPokeAPI(endpoint, value) {
    $.get(`https://pokeapi.co/api/v2/${endpoint}/${value}`)
      .done(function (data) {
        console.log(
          "This function will be run if the ajax is successful." +
            ` The information concerns ${endpoint}, the value passed is ${value}`
        );
        console.log(data);
      })
      .fail(function (data) {
        console.log("This function will be run if the ajax if failed");
      })
      .always(function (data) {
        console.log("This function runs no matter success or fail.");
      });
  }
  // getPokeAPI("evolution-chain", 4);
  // =============================================== jQuery form helper functions, poke API =======================================================================
  // handle the capture of the information.
  $("#pokeForm").on("submit", function (anything) {
    anything.preventDefault();
    console.log(anything);
    let resultString = $("#pokeForm").serialize();
    console.log(resultString);
    let resultArray = $("#pokeForm").serializeArray();
    console.log(resultArray);
    // Unpack the information required for the ajax call
    // Send the information using ajax using previously made function
    getPokeAPI(resultArray[0].value, resultArray[1].value);
  });
  // =============================================== jQuery deferred =======================================================================
  // call two api requests store the request itself within a variable.
  // let pokemon1 = $.get("https://pokeapi.co/api/v2/pokemon/charmander");
  // let pokemon2 = $.get("https://pokeapi.co/api/v2/pokemon/mankey");
  // let combined = $.when(pokemon1, pokemon2);
  // combined
  //   .done(function (response1, response2) {
  //     console.log("This console.log will run when the command works");
  //     console.log(response1, response2);
  //     console.log(response1[0].name);
  //   })
  //   .fail(function (error1, error2) {
  //     console.log("I only run on an error, " + error1 + " " + error2);
  //   })
  //   .always(function () {
  //     console.log("This will always run.");
  //   });
  // =============================================== jQuery deferred within a function =======================================================================
  // function getTwoPokemon(pokemon1, pokemon2) {
  //   let data1 = $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`);
  //   let data2 = $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`);
  //   let combined = $.when(data1, data2);
  //   combined
  //     .done(function (response1, response2) {
  //       console.log("This console.log will run when the command works");
  //       console.log(response1, response2);
  //     })
  //     .fail(function (error1, error2) {
  //       console.log("I only run on an error, " + error1 + " " + error2);
  //     })
  //     .always(function () {
  //       console.log("This will always run.");
  //     });
  // }
  // When using the when you get each data back as an array, with the data, the status of the request and the request itself
  // getTwoPokemon("squirtle", "rapidash");
  // =============================================== jQuery deferred within a function  VS callback! =======================================================================
  // function compareTwoCountriesPopulations(country1, country2) {
  //   let data1 = $.get(`https://restcountries.eu/rest/v2/name/${country1}`);
  //   let data2 = $.get(`https://restcountries.eu/rest/v2/name/${country2}`);
  //   let combined = $.when(data1, data2);
  //   combined
  //     .done(function (response1, response2) {
  //       console.log("This console.log will run when the command works");
  //       console.log(response1);
  //       if (response1[0][0].population > response2[0][0].population) {
  //         alert(
  //           `${response1[0][0].name} has a larger population than ${response2[0][0].name}`
  //         );
  //       } else {
  //         alert(
  //           `${response2[0][0].name} has a larger population than ${response1[0][0].name}`
  //         );
  //       }
  //     })
  //     .fail(function (error1, error2) {
  //       console.log(error1);
  //       console.log("I only run on an error, " + error1 + " " + error2);
  //     })
  //     .always(function () {
  //       console.log("This will always run.");
  //     });
  // }
  // compareTwoCountriesPopulations("Hong Kong", "Denmark");
  //   const countryData = (country, callback) => {
  //     $.get(`https://restcountries.eu/rest/v2/name/${country}`).done((data) => {
  //       callback(data);
  //     });
  //   };
  //   // Some more meaningful logic
  // countryData("France", function (frenchData) {
  //   countryData("Italy", function (italyData) {
  //     if (frenchData[0].population > italyData[0].population) {
  //       alert(
  //         `${frenchData[0].name} has a larger population than ${italyData[0].name}`
  //       );
  //     } else {
  //       alert(
  //         `${italyData[0].name} has a larger population than ${frenchData[0].name}`
  //       );
  //     }
  //   });
  // });
  // =============================================== =======================================================================
});
