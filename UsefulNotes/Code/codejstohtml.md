      document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Get the value of the search input
        const searchInput = document.querySelector('#search-input').value;

        // Find the drug in the array that matches the search input
        const drug = drugs.find(function(d) {
          return d.name.toLowerCase() === searchInput.toLowerCase();
        });

        // If a matching drug is found, create and display the drug information
        if (drug) {
          const output = document.querySelector('#output');
          output.innerHTML = `
            <h2>${drug.name}</h2>
            <p><b>Type:</b> ${drug.type}</p>
            <p><b>Description:</b> ${drug.description}</p>
          `;
        }
      });
