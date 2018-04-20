function IsLogin(){
    let token = localStorage.getItem('token')
    if(token){
        document.getElementById('Login').innerHTML = `
            <p> Hi K </p>
            <div
            style="border : solid 0.5px;
            display : inline-block;
            background-color:#3f7adb;
            color:#fff;
            padding : 1em;
            padding-left : 4em;
            border-radius: 10px;
            width : 100px;
            height : 20px;
            cursor : pointer;
            align : center;
            font-family: Arial"
            class='button' onclick = 'LogOut()'> 
                Logout 
            </div>`
    }
}
function LogOut(){
    localStorage.clear
    document.getElementById('Login').innerHTML = `
            <div
            style="border : solid 0.5px;
            display : inline-block;
            background-color:#3f7adb;
            color:#fff;
            padding : 1em 3em;
            padding-left : 4em;
            border-radius: 10px;
            width : 100px;
            height : 20px;
            cursor : pointer;
            align : center;
            font-family: Arial"
            class='button' onclick = 'showModal()'> 
                Show login 
            </div>
        `
}