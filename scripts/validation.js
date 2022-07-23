const form = document.getElementById("form");

const courriel = document.getElementById("exampleInputEmail1");


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// Fonction retournant true si le format d'une adresse courriel est valide
const isValidEmail = (exampleInputEmail1) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(exampleInputEmail1).toLowerCase());
};

const validateForm = () => {
  let noError = true;
  
  const courrielValue = courriel.value.trim();
  
  

  if (courrielValue === "") {
    setError(courriel, "email is required");
    noError = false;
  } else if (!isValidEmail(courrielValue)) {
    setError(courriel, "Provide a valid email address");
    noError = false;
  } else {
      setSuccess(courriel);
      alert("Votre courriel a été confirmé avec succès !");
    
  }

    

  return noError;
};