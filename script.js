window.addEventListener("load", function(){
    const debug = true;
    const destination = document.getElementById('destination');


    fetch("https://handlers.education.launchcode.org/static/planets.json").then((response) => {
        if (debug) {
            console.log(response);
        }
        let jsonResponse = response.json();
        jsonResponse.then((jsonObj) => {
            let index = 0;
            
            function displayPlanet(){
                destination.innerHTML = `
                <h3> Planet ${jsonObj[index].name}</h3>
                <img src=${jsonObj[index].image} width=400px height=400px />
                <p>Star: ${jsonObj[index].star}</p>
                <p>Distance: ${jsonObj[index].distance}</p>
                <p>Diameter: ${jsonObj[index].diameter}</p>
                <p>Moons: ${jsonObj[index].moons}</p>
                `;
            }
            displayPlanet();

            destination.addEventListener('click', function(){
                index = (index+1) % jsonObj.length;
                displayPlanet();
            });
        });

    });



});