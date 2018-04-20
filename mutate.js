function handleRegister(){
    function mycallback(data) {
        if(data.indexOf('error') != 1){
            localStorage.setItem('token',`${data}`)
            Dashboard()
        }else{
            document.getElementById('warning').innerText = 'Wrong'
        }
    }
    state['tools'] = 'register'
    handlePOST('https://webserv.kmitl.ac.th/matichon/api.php', mycallback) //passing mycallback as a method
}
function handleNewCourse(){
    function mycallback(data) {
        
        if(data.indexOf('error') != 1){
            // localStorage.setItem('token',`${data}`)
            Dashboard()
        }else{
            // document.getElementById('warning').innerText = 'Wrong'
        }
    }
    state['tools'] = 'newCourse'
    state['token'] = localStorage.getItem('token')
    handlePOST('https://webserv.kmitl.ac.th/matichon/api.php', mycallback) //passing mycallback as a method
}
function handleAddCourse(){
    function mycallback(data) {
        
        if(data.indexOf('error') != 1){
            // localStorage.setItem('token',`${data}`)
            Course()
        }else{
            // document.getElementById('warning').innerText = 'Wrong'
        }
    }
    state['tools'] = 'addCourse'
    state['token'] = localStorage.getItem('token')
    handlePOST('https://webserv.kmitl.ac.th/matichon/api.php', mycallback) //passing mycallback as a method
}
function handleCheckOTP(){
    function mycallback(data) {
        console.log(data)
        document.getElementById('fooman').innerHTML = data
    }
    state['tools'] = 'checkOTP'
    handlePOST('https://webserv.kmitl.ac.th/matichon/api.php', mycallback) //passing mycallback as a method
}
