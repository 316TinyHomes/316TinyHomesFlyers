// Load the flyer list
fetch("flyers.json")

    // Convert the JSON file into data JavaScript can use
    .then(response => {

        // Check that the file was found
        if (!response.ok) {
            throw new Error("Could not load flyers.json");
        }

        return response.json();

    })

    // Use the flyer data
    .then(flyers => {

        // Find the empty flyer area on the homepage
        const flyerList = document.getElementById("flyerList");


        // Check that flyers exist
        if (flyers.length === 0) {

            flyerList.innerHTML = `
                <p>No flyers are available yet.</p>
            `;

            return;

        }


        // Create a card for every flyer
        flyers.forEach(flyer => {


            // Create a clickable card
            const card = document.createElement("a");


            // Apply the card styling
            card.className = "card";


            // Create the flyer link
            card.href = `flyer.html?id=${flyer.id}`;


            // Add the flyer information
            card.innerHTML = `

                <img 
                    src="${flyer.image}" 
                    alt="${flyer.title}"
                    onerror="this.src='missing-image.jpg';"
                >

                <h2>${flyer.title}</h2>

            `;


            // Add the card to the page
            flyerList.appendChild(card);


        });


    })


    // Catch any problems
    .catch(error => {

        console.error(error);


        document.getElementById("flyerList").innerHTML = `

            <p>
                Sorry, the flyers could not be loaded.
                Please try again later.
            </p>

        `;

    });