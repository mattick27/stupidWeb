function handleText(e){
    let index = e['id']
    state[index] = e.value
}

function handleLogin(){
    function mycallback(data) {
        console.log('handleLogin')
        if(data.indexOf('error') != 1){
            console.log('pass')
            localStorage.setItem('token',data.replace(/"/g, ''))
            Dashboard()
        }else{
            console.log('pass')
            document.getElementById('warning').innerText = 'Wrong'
        }
    }
    state['tools'] = 'Login'
    handlePOST('https://webserv.kmitl.ac.th/matichon/api.php', mycallback) //passing mycallback as a method
}
function showStudentCourse(func){
    function mycallback(data){
        if(data.indexOf('error') == 1){
            return false
        }else{
            if(data){
                data = JSON.parse(data)
                console.log(data.course)
                func(data.course)    
            }
            else{
                func('error')
            }
        }
    }
    state['tools'] = 'showStudentCourse'
    state['token'] = localStorage.getItem('token')
    handlePOST('https://webserv.kmitl.ac.th/matichon/api.php', mycallback) //passing mycallback as a method

}
function showTeacherCourse(func){
    function mycallback(data){
        if(data.indexOf('error') == 1){
            return false
        }else{
            console.log(data)
            data = JSON.parse(data)
            func(data.course)
        }
    }
    state['tools'] = 'showTeacherCourse'
    state['token'] = localStorage.getItem('token')
    handlePOST('https://webserv.kmitl.ac.th/matichon/api.php', mycallback) //passing mycallback as a method
}
function isStudent(func){
    function mycallback(data){
        if(data.indexOf('0') != -1){
            func('0')
        }else{
            if(data.indexOf('1') != -1){
                func('1')
            }else{
                func('error')
            }
        }
    }
    state['tools'] = 'isStudent'
    state['token'] = localStorage.getItem('token')
    handlePOST('https://webserv.kmitl.ac.th/matichon/api.php', mycallback) //passing mycallback as a method
}
function showOTP(courseID,func){
    function mycallback(data){
        if(data.indexOf(`Don't find courseID`) == -1){
            state['OTP'] = data.replace(/"/g, '')
            func(state['OTP'])
        }else{
            console.log('error')
        }
    }
    state['tools'] = 'showOTP'
    state['courseID'] = courseID
    handlePOST('https://webserv.kmitl.ac.th/matichon/api.php', mycallback) //passing mycallback as a method

}