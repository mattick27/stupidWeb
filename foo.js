function foo(){
    fetch('http://localhost/api.php')
    .then(res => res.json())
    .then((data)=>{
        localStorage.setItem('token',data)
    })
    handdleHeader('foo')
    return `<div>
        <p style="color:green;margin-left:30px;">Foo Man Sky</p>
    </div>`
}
 