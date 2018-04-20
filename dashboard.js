function dashboard(){
    
    handdleHeader('dashboard')
    return `
    <style>
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
            grid-template-columns:1fr repeat(2,minmax(auto,25em)) 1fr ;
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
  
<div class="side">
  <a onclick = 'Dashboard()' href="#">Dashbord</a>
  <a onclick = 'Attendance()' href="#">Attendance</a>
  <a onclick = 'Dashboard()' href="#">Course</a>
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

<div class="main">
  
<div>
  <section id="section-b" class="grid">
    <div class="bg-image"></div>
    <ul >

      <li>
        <div class="card"><img src="/images/rem1.jpg" alt="">
          <div class="card-content">
            <h3 class="class-title">WEb Dev</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus inventore nemo quos sequi facilis laudantium dolorem perspiciatis, harum at accusamus!</p>
          </div>
        </div>
      </li>

    </ul>
  </section>
</div>
</div>

    `
}

