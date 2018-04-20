let state = {
  "userName" : null,
  "passWord" : null,
}

function Index(){
  document.getElementById("root").innerHTML = `<div>
  ${index()}
  </div>`
}
function Dashboard(){
  document.getElementById("root").innerHTML = `<div>
    ${dashboard()}
    </div>`
}
function Attendance(){
   document.getElementById("root").innerHTML = `<div>
    ${attendance()}
    </div>`
}
function Course(){
  document.getElementById("root").innerHTML = `<div>
   ${course()}
   </div>`
}
function Homework(){
  document.getElementById("root").innerHTML = `<div>
   ${homework()}
   </div>`
}