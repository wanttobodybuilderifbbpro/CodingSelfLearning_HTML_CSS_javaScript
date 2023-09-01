document.forms[0].addEventListener("submit", function(e){

  // 1 
  e.preventDefault();
  const idEl = document.forms[0].username;
  const idValue = idEl.value.trim();
  const pwEl = document.forms[0].password;
  const pwValue = pwEl.value.trim();

  // 2
  if(idValue === ""){
    alert("Enter the passcodes.");
    idEl.focus();
    return;
  }
})