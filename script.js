const addUserBtn = document.getElementById("adduser");
const userNameTextField = document.getElementById("username");
const recordsDisplay = document.getElementById("records");

let userArray = [];
let objStr = localStorage.getItem("user");
if (objStr != null) {
  userArray = JSON.parse(objStr);
}

Displayinfo();
addUserBtn.onclick = () => {
  const name = userNameTextField.value;
  userArray.push({ name: name });
  Saveinfo(userArray);
  userNameTextField.value = "";
  Displayinfo();
};

function Saveinfo(userArray) {
  let str = JSON.stringify(userArray); // convert array/object  into string ...it is javascript builtIn function
  localStorage.setItem("user", str);
}

function Displayinfo() {
  let statement = "";
  userArray.forEach((user, i) => {
    statement += `<tr>
                <th scope="row">${i + 1}</th>
                <td>${user.name}</td>
                <td><i class="btn text-white btn-info max-3 fa fa-edit" onclick ='Editinfo(${i})'></i> <i class="btn text-white btn-danger max-3 fa fa-trash-o" onclick ='Deleteinfo(${i})'></i></td>
              </tr>`;
  });
  recordsDisplay.innerHTML = statement;
}

function Editinfo(id) {
  alert(id);
}

function Deleteinfo(id) {
  userArray.splice(id, 1);
  Saveinfo(userArray);
  Displayinfo();
}
