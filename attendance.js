function attendance() {
    const whichUser = ()=>{
        return new Promise((resolve,reject)=>{
            isStudent((data)=>{
                resolve(data)
            })
        })
    }

    whichUser().then((data)=>{
        if(data == 0){ //student dashboard
            let func =()=>{
                return new Promise(function(resolve, reject) {
                    showStudentCourse((data)=>{
                        resolve(data)
                    })
                })
            }
            document.getElementById('main').innerHTML += `
                <p id='fooman'><p>
                <p> OTP </p> 
                <input id='OTPStudent' onchange='handleText(this)'><br/>
                <button onclick='handleCheckOTP()' class='btn' > send </button>
            `
            func().then((data)=>{
                data.map((value)=>{

                })
            })
        }else if(data == 1){ //teacher dashboard
            let func = ()=>{
                return new Promise(function(resolve, reject) {
                    showTeacherCourse((data)=>{
                        resolve(data)
                    })
                })
            }

            func().then((data)=>{
                for (let i = 0 ; i < data.length ; i++){
                    if(i%2 != 0){
                        document.getElementById('main').innerHTML += `
                        <div>
                          <section id="section-c1" class="grid">
                            <div class="content-wrap">
                            <h2 >${data[i].courseName} ${data[i].id}</h2>
                            <p>${data[i].descriptions}</p>
                            <button onclick='runLoop(${data[i].id})' class='btn'> OTP </button>
                            </div>
                        </section>
                        </div>`      
                    }else{
                        document.getElementById('main').innerHTML += `
                        <div>
                          <section id="section-c2" class="grid">
                            <div class="content-wrap">
                            <h2 >${data[i].courseName} ${data[i].id}</h2>
                            <p>${data[i].descriptions}</p>
                            <button onclick='runLoop(${data[i].id})' class='btn'> OTP </button>
                            </div>
                        </section>
                        </div>
                      `          
                    }
                }
            })
        }
    })
    
    handdleHeader('attendance')
    return `<style>
    body {
        margin: 0;
        font-family: "Lato", Helvetica, sans-serif;
        overflow: hidden;
        height: 100%;
      }
      .main {
          margin-left: 180px; /* Same as the width of the sidenav */
      }
      .topnav {
        overflow: hidden;
        background-color: #929292;
        position: static;
      }
      .topnav .logo{
          float: left;
          width: 147px;
          font-size: 23px;
          padding-top: 10px;
      }
      .topnav a {
        float: right;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
          height: 25px;
      }
      
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
      .topnav .side{
          display: none;
      }
      .active {
        background-color: #4CAF50;
        color: white;
      }
      
      .topnav .icon {
        display: none;
      }
      
      @media screen and (max-width: 600px) {
          .topnav .side {display: block;}
        .topnav a {display: none;}
        .topnav a.icon {
          float: right;
          display: block;
        }
          .sidenav {
              display: none;
          }
          .main{
              margin-left: 0px;
          }
      }
      
      @media screen and (max-width: 600px) {
        .topnav.responsive {position: relative;}
        .topnav.responsive .icon {
          position: absolute;
          right: 0;
          top: 0;
        }
        .topnav.responsive a {
          float: none;
          display: block;
          text-align: left;
        }
      }
      
      
      .sidenav {
          height: 100%;
          width: 180px;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          background-color: #333;
          overflow-x: hidden;
          padding-top: 20px;
          margin-top: 51px;
      }
      
      .sidenav a {
          padding: 6px 6px 6px 20px;
          text-decoration: none;
          font-size: 21px;
          color: #fff;
          display: block;
      }
      
      .sidenav a:hover {
          color: #fff;
          background-color: #03a2ff;
      }
      
      
      
      @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
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
      @media(min-width: 780px){
        .grid{
            display: grid;
            grid-template-columns:1fr repeat(2,minmax(auto,35em)) 1fr ;
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
        #section-b .bg-image{
            background: #03a2ff;
            position: absolute;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 160%;
            z-index: -1;
            opacity: 1;
            background-attachment: fixed;
        }
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

    <div class="topnav" id="myTopnav">
            <a href="#" class="logo">Lorem Ipsum</a>
        <a href="#Login" class="active">Login</a>
        <a href="#Register">Register</a>
        <div class="side">
        <a onclick = 'Dashboard()' href="#">Dashbord</a>
        <a onclick = 'Attendance()' href="#">Attendance</a>
        <a onclick = 'Course()' href="#">Course</a>
        <a onclick = 'Dashboard()' href="#">Homework</a>
        </div>
        <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
        </div>

        <div class="sidenav" id="myTopnav">
        <a onclick = 'Dashboard()' href="#">Dashbord</a>
        <a onclick = 'Attendance()' href="#">Attendance</a>
        <a onclick = 'Course()' href="#">Course</a>
        <a onclick = 'Homework()' href="#">Homework</a>
        </div>

        <div id='main' class="main">

            <div id='popup' class='popup'>
                <p id='genOTP'></p><br/>
                <button onclick='closeLoop()' class='btn'> close </button>
            <div/>

            <style scope>
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
            #section-c1{
                background: #f4f4f4;
                color: #333;
                padding: 1em;
            }
            #section-c2{
                background: #666;
                color: #f6f6f6;
                padding: 1em;
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
                    grid-template-columns:
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
              .topnav {
                overflow: hidden;
                background-color: #929292;
                position: static;
              }
              .topnav .logo{
                  float: left;
                  width: 147px;
                  font-size: 23px;
                  padding-top: 10px;
              }
              
              
              .topnav a {
                float: right;
                display: block;
                color: #f2f2f2;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 17px;
                  height: 25px;
              }
              
              .topnav a:hover {
                background-color: #ddd;
                color: black;
              }
              .topnav .side{
                  display: none;
              }
              .active {
                background-color: #4CAF50;
                color: white;
              }
              
              .topnav .icon {
                display: none;
              }
              @media screen and (max-width: 600px) {
                .topnav .side {display: block;}
              .topnav a {display: none;}
              .topnav a.icon {
                float: right;
                display: block;
              }
                .sidenav {
                    display: none;
                }
                .main{
                    margin-left: 0px;
                }
            }
            
            @media screen and (max-width: 600px) {
              .topnav.responsive {position: relative;}
              .topnav.responsive .icon {
                position: absolute;
                right: 0;
                top: 0;
              }
              .topnav.responsive a {
                float: none;
                display: block;
                text-align: left;
              }
            }
            
            
            .sidenav {
                height: 100%;
                width: 180px;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: #333;
                overflow-x: hidden;
                padding-top: 20px;
                margin-top: 51px;
            }
            
            .sidenav a {
                padding: 6px 6px 6px 20px;
                text-decoration: none;
                font-size: 21px;
                color: #fff;
                display: block;
            }
            
            .sidenav a:hover {
                color: #fff;
                background-color: #03a2ff;
            }

            .popup{
                position : absolute;
                margin : 30vh 30vw;
                background-color : #333;
                padding : 2em;
                display : none;
            }
        
            </style>
        <div/>
      

`
}

