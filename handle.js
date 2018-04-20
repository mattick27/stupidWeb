handlePOST = function(url, callback) // How can I use this callback?
{
    var request = new XMLHttpRequest()
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {   
            callback(request.response) // Another callback here
        }
    }
    request.open("POST", url)
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    request.send(JSON.stringify(state))
}

function handdleHeader(url){
    window.history.pushState("about", "about", `/matichon/${url}.php`)
    let head = document.getElementsByTagName('head')[0].innerHTML
    if(head.indexOf('<title>') !== -1){
        let first = head.indexOf('<title>')
        let temp = head.slice(0,first)
        temp += `<title>${url}</title>`
        document.getElementsByTagName('head')[0].innerHTML = temp
    }else{
        document.getElementsByTagName('head')[0].innerHTML += `<title>${url}</title>`
    }
}