const printedOn = document.getElementById("printedOn");
const sgdOffice = document.getElementById("sgdOffice");
const sgdReference = document.getElementById("sgdReference");
const sgdDate = document.getElementById("sgdDate");
const consignee = document.getElementById("consignee");
const releaseDate = document.getElementById("releaseDate");
const releaseType = document.getElementById("releaseType");
const lastReleaseDate = document.getElementById("lastReleaseDate");

// Add event listener on form container
const form = document.getElementsByClassName("releaseForm")[0]; // Add this line to get the form element

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Clicked");

    // Write HTML for proper format to be sent in mail
    let ebody = `
    <b>Printed On: </b>${printedOn.value}&nbsp;
   <br>
   <b>SGD Office: </b>${sgdOffice.value}
   <br>
   <b>SGD Reference: </b>${sgdReference.value}
   <br>
   <b>SGD Date: </b>${sgdDate.value}
   <br>
   <b>Consignee: </b>${consignee.value}
   <br>
   <b>Release Date: </b>${releaseDate.value}
   <br>
   <b>Release Type: </b>${releaseType.value}
   <br>
   <b>Last Release Date: </b>${lastReleaseDate.value}
   <br>
    `;

    // Email Code Here
    Email.send({
        SecureToken: "f82c9b61-9a22-4b9d-8998-e69f92ec7598",
        To: 'abdulrahmonadisa123@gmail.com',
        From: "abdulrahmonadisa123@gmail.com",
        Subject: "SGD Release Form" + printedOn.value,
        Body: ebody
    }).then(() => {
        alert("Message Sent Successfully");
        form.reset(); // Reset the form
    });
});
