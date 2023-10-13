function formSubmit() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const dob = document.getElementById("iddob").value;
    const country = document.getElementById("dropdown").value;
    const gender = Array.from(document.getElementsByName("radio-buttons"))
      .filter((gen) => gen.checked)
      .map((gen) => gen.value)
      .join(", ");
    const profession = document.getElementById("pname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    const popupDiv = document.getElementById("popupDisplay");
    popupDiv.innerHTML = `
                  <p><strong>First Name:</strong> ${firstName}</p>
                  <p><strong>Last Name:</strong> ${lastName}</p>
                  <p><strong>Date of Birth:</strong> ${dob}</p>
                  <p><strong>Country:</strong> ${country}</p>
                  <p><strong>Gender:</strong> ${gender}</p>
                  <p><strong>Profession:</strong> ${profession}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Mobile Number:</strong> ${phone}</p>
              `;
  
    document.getElementById("popup").style.display = "block";
  }
  
  function formReset() {
    document.getElementById("survey-form").reset();
  }
  
  function closePopup() {
   
    document.getElementById("popup").style.display = "none";
    document.getElementById("survey-form").reset();
  }
  