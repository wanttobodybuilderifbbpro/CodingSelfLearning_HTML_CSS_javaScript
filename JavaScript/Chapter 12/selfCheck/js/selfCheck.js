document.forms[0].addEventListener("submit", function(e){

  // 1 
  e.preventDefault();  // 폼 전송 이벤트를 취소
  const idEl = document.forms[0].username;
  const idValue = idEl.value.trim();
  const pwEl = document.forms[0].password;
  const pwValue = pwEl.value.trim();

  // 2
  if(idValue === "" /* 아이디가 입력됐는지 확인함 */){
    alert("Enter the id(username).");
    idEl.focus();
    return;
  }

  // 3
  if(idValue.indexOf("@") === -1){
    alert("ID must be written by e-mail forms.");
    idEl.focus();
    return;
  }

  // 4
  if(pwValue === ""){
    alert("Enter the passcodes.")
    pwEl.focus();
    return;
  }

  // 5
  if(pwValue.trim().length <= 4){
    alert("Passcode must be over 5 characters.")
    pwEl.focus();
    return;
  }

  // 6
  this.submit;
})