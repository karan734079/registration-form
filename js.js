window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("admissionForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Form validation
    if (!validateForm()) {
      return false; // Stop form submission if validation fails
    }

    // If validation passes, submit the form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Perform further actions like AJAX submission or logging data
    console.log(formObject);

    // Reset form after submission
    this.reset();
  });

  function validateForm() {
    const permanentEducationNumber = document.getElementById(
      "permanent-education-number"
    ).value;
    const candidateName = document.getElementById("candidate-name").value;
    const fatherGuardianName = document.getElementById(
      "father-guardian-name"
    ).value;
    const motherName = document.getElementById("mother-name").value;
    const dob = document.getElementById("dob").value;
    const permanentAddress = document.getElementById("permanent-address").value;
    const presentAddress = document.getElementById("present-address").value;
    const mobile = document.getElementById("mobile").value;
    const educationalQualificationOfMother = document.getElementById(
      "educational-qualification-of-mother"
    ).value;
    const aadharNo = document.getElementById("aadhar-no").value;
    const studentBankAccount = document.getElementById(
      "student-bank-account"
    ).value;
    const bankName = document.getElementById("bank-name").value;
    const psebRegistrationNo = document.getElementById(
      "pseb-registration-no"
    ).value;
    const fatherGuardianOccupation = document.getElementById(
      "father-guardian-occupation"
    ).value;

    // Basic validation: Check if required fields are filled
    if (
      permanentEducationNumber.trim() === "" ||
      candidateName.trim() === "" ||
      fatherGuardianName.trim() === "" ||
      motherName.trim() === "" ||
      dob.trim() === "" ||
      permanentAddress.trim() === "" ||
      presentAddress.trim() === "" ||
      mobile.trim() === "" ||
      educationalQualificationOfMother.trim() === "" ||
      aadharNo.trim() === "" ||
      studentBankAccount.trim() === "" ||
      bankName.trim() === "" ||
      psebRegistrationNo.trim() === "" ||
      fatherGuardianOccupation.trim() === ""
    ) {
      alert("Please fill in all the required fields.");
      return false;
    }

    // Additional validation can be added as needed

    return true; // Return true if validation passes
  }
});
function showOtherInput() {
  var selectElement = document.getElementById("religion");
  var otherInput = document.getElementById("otherInput");

  if (selectElement.value === "other") {
    otherInput.style.display = "block";
  } else {
    otherInput.style.display = "none";
  }
}
