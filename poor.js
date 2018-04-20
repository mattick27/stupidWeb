function showModal(){
    document.getElementById('myModal').style.display = 'block'
}
function closeModal(){
    document.getElementById('myModal').style.display = 'none'
    // document.getElementById('myModal').attributes
}

function poor(){
    handdleHeader('poor')
    return `</div>
                </div>
                    <p>Username</p>    
                    <input id='userName' onchange='handdleRegister(this)'></input>
                    <p>Password</p>
                    <input type='password' id='passWord' onchange='handdleRegister(this)'> </input>
                <br/><br/>
                <button onclick='handleSummit()'> summit </button>
            </div>
    </div>`
}
