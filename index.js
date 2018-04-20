function index(){
    handdleHeader('index')
    return `
            <style>
            .alert-error{
                color: #a94442;
                background-color: #f2dede;
                border-color: #ebccd1;
            }
            
            .alert-sucesss_msg{
                color:#3c763d;
                background-color: #dff0d8;
                border-color: #d6e9c6;
            }
            /* Core */
            body{
                margin: 0;
                font-family: "Lato","Arial","Hevetica",sans-serif;
                background: #c6c6c6;
                color: #fff;
                line-height: 1.5;
                text-align: center;
                overflow-x: hidden;
                font-weight: 400;
            }
            img{
                display: block;
                width: 100%;
                height: auto;
            }
            h1, h2, h3 {
                margin: 0;
                padding: 1em 0;
            }
            p{
                margin: 0;
                padding: 1em 0;
            }
            .btn{
                display: inline-block;
                background: #3f7adb;
                color: #fff;
                text-decoration: none;
                padding: 1em 2em;
                border: 1px solid #666;
                margin: .5em 0;
                border-radius: 10px;
                opacity: 0.9;
            }
            .btn:hover{
                background: #eaeaea;
                color: #333;
            }
            /* Header Showcase */
            #showcase{
                min-height: 100vh;
                color: #fff;
                text-align: center;
                align-content: center;
                transition: 0.5s;
            }
            #showcase .bg-image{
                position: absolute;
                background: #333 url('../images/sagiri.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100vh;
                z-index: -1;
                opacity: 0.4;
            }
            #showcase h1{
                padding-top: 100px;
                padding-bottom: 0;
            }
            #showcase .content-wrap,
            #section-a .content-wrap{
                padding: 0 1.5em;
            }
            /* section a */
            #section-a{
                background: #282e34 ;
                color: #fff;
                padding-bottom: 2em;
            }
            #section-b{
                padding: 2em 1em 1em;
            }
            #section-b .bg-image{
                background: #c6c6c6;
            }
            #section-b ul{
                list-style: none;
                margin:0;
                padding: 0;
            
            }
            #section-b li{
                margin-bottom: 1em;
                background: #fff;
                color:#333;
            }
            .card-content{
                padding: 1.5em;
            }
            #section-c{
                background: #f4f4f4;
                color: #333;
                padding: 2em;
            }
            #section-d .box{
                padding: 2em;
                color: #fff;
                background: #282e34;
            }
            
            #section-d .box:first-child{
                background: #2690d4;
            }
            
            #main-footer{
                padding: 10px;
                background: #3b5998;
                color: #f2f2f2;
                text-align: center;
                font-size: 20px;
            }
            
            #main-footer a{
                color: red;
                text-decoration: none;
            
            }
            
            /* Media Queries */
            @media{
                .container{
                    width: auto;
                    padding-left: 0px;
                    padding-right: 0px;
                    max-width: 2000px;
                }
            }
            
            @media(min-width: 780px){
                body{
                    text-align: unset;
                }
                .grid{
                    display: grid;
                    grid-template-columns:1fr repeat(2,minmax(auto,30em)) 1fr ;
                }
            
                #section-a .content-text {
                    columns: 2;
                    column-gap: 2em;
                }
                #section-a .content-text p{
                    padding-top: 0;
                }
            
                .content-wrap, #section-b ul{
                   grid-column: 2/4;
                }
                .box ,#main-footer div{
                    grid-column: span 2;
                }
                #section-b ul{
                    display: flex;
                    justify-content: space-around;
                }
                #section-b li{
                    width: 31%;
                }
                .navbar{
                    padding-left:20px;
                    margin-bottom: 3px;
                    border-radius:0;
                    background-color: #3b5998;
                    color: #fff;
                }
                #section-b .bg-image{
                    background: #333 url('../images/rem1.jpg');
                    position: absolute;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 100%;
                    height: 160%;
                    z-index: -1;
                    opacity: 0.4;
                    background-attachment: fixed;
                }
                #register{
                    width:20%;
                    margin: auto;
                }
            }
            #main{
                transition: margin-left:0.5s;
            }
            .containerA{
                align-content: stretch;
            }
            .navbar{
                background-color: #3b5998;
            }
            .navbar a{
                float: left;
                display: block;
                color: #f2f2f2;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 20px;
            }
            .btn-isactive{
                display: inline-block;
                background: #4CAF50;
                color: #fff;
                text-decoration: none;
                padding: 1em 2em;
                border: 1px solid #fff;
                margin: .5em 0;
                border-radius: 10px;
                opacity: 0.9;
              }
              .btn-isactive:hover{
                background: #eaeaea;
                color: #333;
              }            
            </style>

            </div>
                </div>
                <section id="section-b" class="grid">
                <div class="bg-image"></div>
                <ul>
                  <li>
                    <div class="card-login">
                      <div class="card-content">
                        <h3 class="class-title">Login</h3>
                          <label for="username">username</label>
                          <br>
                          <input id='userName' onchange='handleText(this)' type="text">
                          <br>
                          <label for="password">Password</label>
                          <br>
                          <input id='passWord' onchange='handleText(this)' type="password">
                          <br>
                          <button onclick='handleLogin()' class="btn-isactive">Login</button>
                <div style="border:solid 0.5px; width:100% padding:1rem;"></div>
                <h3 class="class-title">Register</h3>
                      <label for="username">username</label>
                      <br>
                      <input id='userName' onchange='handleText(this)'  type="text">
                      <br>
                      <label for="password">Password</label>
                      <br>
                      <input id='passWord' onchange='handleText(this)'  type="password">
                      <br>
                      <label for="password">Re-Password</label>
                      <br>
                      <input type="password">
                      <br>
                      <button onclick='handleRegister()' class="btn">Register</button>
                      </div>
                    </div>
                  </li>
              </section>
            </div>
    </div>`
}
