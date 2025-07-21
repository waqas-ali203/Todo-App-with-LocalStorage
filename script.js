const addUserBtn = document.getElementById('adduser');
const userNameTextField = document.getElementById('username');

addUserBtn.onclick = () => {
  const name = userNameTextField.value;
  alert(name);
};
