<?php
    $decoded_input = json_decode(file_get_contents("php://input"), true);
    define('servername','localhost');
    define('username','root');
    define('password','');
    define('dbname','webtech');
    $objCon = mysqli_connect('','','','');

    function getUserName($Token,$con){
        $search = $Token;
        $search = $con->query("SELECT username FROM User WHERE TOKEN = '$search' AND permission = 0");
        $search = mysqli_fetch_array($search);
        return $search['username'];
    }
    function getTeacherName($Token,$con){
        $search = $Token;
        $search = $con->query("SELECT username FROM User WHERE TOKEN = '$search' AND permission = 1 ");
        $search = mysqli_fetch_array($search);
        return $search['username'];
    }
    function generateRandomString($length) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
    function checkDupAtten($name,$courseID,$con){
        $NOW = date("Y-m-d");
        $search = $con->query("SELECT byUserName FROM attendance WHERE byUserName = '$name' AND timestamp = '$NOW' AND toCourseID = '$courseID'");
        $search = mysqli_fetch_array($search);
        $search = $search['byUserName'];
        return $search;
    }

    //Here you have usual php array stored in $decoded_input. Do some stuff with it.
    header('Content-type:application/json;charset=utf-8');
    if($decoded_input['tools'] == 'register'){
        $name = $decoded_input['userName'];
        $pwNOW = sha1($decoded_input['passWord']);
        $TOKEN = md5(uniqid(rand(), true));
        $permission = 0 ;

        $sql =  "INSERT INTO User (username,pw, TOKEN, permission)
        VALUES ('$name','$pwNOW','$TOKEN','$permission');
        INSERT INTO DataStudent (toStudent)
        VALUES ('$name')";

        if ($objCon->multi_query($sql) === TRUE) {
            echo json_encode($TOKEN);
            mysqli_close($objCon);
        } else {
            echo json_encode('error') . $objCon->error;
            mysqli_close($objCon);
        }
    }
    else if ($decoded_input['tools'] == 'Login'){
        $search = $decoded_input['userName'];
        $pwNOW = sha1($decoded_input['passWord']);
        $TOKEN = md5(uniqid(rand(), true)) ; 

        $search = $objCon->query("SELECT username FROM User WHERE username = '$search' AND pw = '$pwNOW' ");
        $search = mysqli_fetch_array($search);
        $search = $search['username'];

        if(empty($search)){
            echo json_encode('error');
            mysqli_close($objCon);
        }else{
            $sql = "UPDATE User SET TOKEN ='$TOKEN' WHERE username = '$search' AND pw = '$pwNOW'";
            $objCon->query($sql);
            echo json_encode($TOKEN);
            mysqli_close($objCon);
    
        }
    }
    else if ($decoded_input['tools'] == 'editStudentData'){

        $search = getUserName($decoded_input['token'],$objCon);
        if(empty($search)){
            echo 'empty';
            mysqli_close($objCon);

        }else{
            $firstName = ''; $lastName = '' ; $dateJoin = '' ; $studentID = 0 ;

            if(array_key_exists('firstName',$decoded_input)){
                $firstName = $decoded_input['firstName'];
            }
            if(array_key_exists('lastName',$decoded_input)){
                $lastName = $decoded_input['lastName'];
            }
            if(array_key_exists('dateJoin',$decoded_input)){
                $dateJoin = $decoded_input['dateJoin'];
            }
            if(array_key_exists('studentID',$decoded_input)){
                $studentID = $decoded_input['studentID'];
            }
            
            $sql = "UPDATE DataStudent 
                SET firstName ='$firstName' , 
                lastName = '$lastName',
                dateJoin = '$dateJoin',
                StudentID = '$studentID'
            WHERE toStudent = '$search'";
            $objCon->query($sql);    
            mysqli_close($objCon);
        }
        
    }
    else if ($decoded_input['tools'] == 'newCourse'){
        $search = getTeacherName($decoded_input['token'],$objCon);
        if(empty($search)){
            echo 'empty'; 
            mysqli_close($objCon);
        }
        else{
            $a = rand().rand();
            $id = $a[6].$a[0].$a[2].$a[1].$a[3].$a[5]; 
            $courseName = null; 
            $OTP =  generateRandomString(6); 
            $descriptions = '' ;
    
            if(array_key_exists('courseName',$decoded_input)){
                $courseName = $decoded_input['courseName'];
            }
            if(array_key_exists('descriptions',$decoded_input)){
                $descriptions = $decoded_input['descriptions'];
            }
            echo $search ; 
    
            $sql = "INSERT INTO Course(id,courseName,OTP,teacher,descriptions)
            VALUE ('$id','$courseName','$OTP','$search','$descriptions')";
            $objCon->query($sql);
            mysqli_close($objCon);
        }
    }
    else if ($decoded_input['tools'] == 'addCourse'){
        $search = getUserName($decoded_input['token'],$objCon);
        echo $decoded_input['token'];
        if(empty($search)){
            echo 'empty'; 
            mysqli_close($objCon);
        }
        else{
            $courseID = null; 
            if(array_key_exists('courseID',$decoded_input)){
                $temp = $decoded_input['courseID'];
                $sql = "SELECT id FROM Course Where id = $temp ";
                $temp = $objCon ->query($sql);
                if(empty($temp)){
                    echo 'not found course id ';
                    mysqli_close($objCon);
                }else{
                    $courseID = $decoded_input['courseID'];
                    $sql = "INSERT INTO studentCourse(toStudent,courseID)
                    VALUE ('$search','$courseID')";
                    $objCon->query($sql);
                    mysqli_close($objCon);        
                }
            } 
        }
    }
    else if($decoded_input['tools'] == 'checkOTP'){
        $search = getUserName($decoded_input['token'],$objCon);
        if(empty($search)){
            echo 'empty'; 
            mysqli_close($objCon);
        }else{
            $OTP = "";
            if(array_key_exists('OTPStudent',$decoded_input)){
                $OTP = $decoded_input['OTPStudent'];
            }
            $courseID = $objCon->query("SELECT id , courseName FROM Course WHERE OTP = '$OTP'");
            $a = mysqli_fetch_array($courseID);
            $courseID =  $a['id'];
            if(empty($courseID)){
                echo json_encode('OTP IS WRONG');
                mysqli_close($objCon);
            }else{
                $dup = checkDupAtten($search,$courseID,$objCon);
                if(!empty($dup)){
                    echo json_encode('YOU ALREADY CHECK');
                    mysqli_close($objCon);
                }else{
                    $time = date("Y-m-d");
                    $sql = "INSERT INTO attendance(toCourseID,byUserName,checkAt,timestamp) VALUE ('$courseID','$search',1,'$time')";
                    $objCon->query($sql);
                    $OTP =  generateRandomString(6); 
                    $sql = "UPDATE Course SET OTP ='$OTP' WHERE id = '$courseID'";
                    $objCon->query($sql);
                    $name = $a['courseName'];
                    $output = 'Complete as ' ;
                    $output .= $name;
                    echo json_encode($output);
                    mysqli_close($objCon);

                }
            }
        }
    }
    else if($decoded_input['tools'] == 'showStudentCourse'){
        $search = getUserName($decoded_input['token'],$objCon);
        if(empty($search)){
            echo 'empty'; 
            mysqli_close($objCon);
        }else{
            $sql = "SELECT courseID FROM studentCourse WHERE toStudent = '$search' ";
            $result = $objCon->query($sql);
            if (mysqli_num_rows($result) > 0) {
                $response["course"] = array();
            
                while ($row = mysqli_fetch_array($result)) {
                    // temp user array
                    $out = array();
                    $id = $row['courseID'];
                    $sql = "SELECT id,courseName,descriptions FROM Course WHERE id = '$id' ";
                    $res = $objCon->query($sql);
                    $res = mysqli_fetch_array($res);

                    $out['id'] = $res['id'];
                    $out['courseName'] = $res['courseName'];
                    $out['descriptions'] = $res['descriptions'];

                    // push single product into final response array
                    array_push($response["course"], $out);
                }
                echo json_encode($response); 
                mysqli_close($objCon);    
            }else{
                echo json_encode('error');
                mysqli_close($objCon);    
            }
        }
    }
    else if($decoded_input['tools'] == 'showTeacherCourse'){
        $search = getTeacherName($decoded_input['token'],$objCon);
        if(empty($search)){
            echo 'empty User'; 
            mysqli_close($objCon);
        }else{
            $sql = "SELECT id,courseName,descriptions FROM Course WHERE teacher = '$search' ";
            $result = $objCon->query($sql);
            if (mysqli_num_rows($result) > 0) {
                $response["course"] = array();
                
                while ($row = mysqli_fetch_array($result)) {
                    // temp user array
                    $product = array();
                    $product["id"] = $row["id"];
                    $product["courseName"] = $row["courseName"];
                    $product["descriptions"] = $row["descriptions"];
                    // push single product into final response array
                    array_push($response["course"], $product);
                }
                echo json_encode($response) ; 
            }
            mysqli_close($objCon);
        }
    }
    else if($decoded_input['tools'] == 'isStudent'){
        $search = getUserName($decoded_input['token'],$objCon);
        if(empty($search)){
            $search = getTeacherName($decoded_input['token'],$objCon);
            if(empty($search)){
                echo json_encode('error');
                mysqli_close($objCon);
            }else{
                echo json_encode('1');
                mysqli_close($objCon);
            }
        }else {
            echo $search; 
            echo json_encode('0');
            mysqli_close($objCon);
        }
    }
    else if($decoded_input['tools'] == 'showOTP'){
        $result = $decoded_input['courseID'];
        $OTP = generateRandomString(6); 
        $sql = "UPDATE Course SET OTP ='$OTP' WHERE id = '$result'";
        $objCon->query($sql);

        $sql = "SELECT OTP FROM Course WHERE id = $result ";
        $result = $objCon -> query($sql);
        if(empty($result)){
            echo json_encode("Don't find courseID");
            mysqli_close($objCon);
        }else{
            $result = mysqli_fetch_array($result);
            echo json_encode($result['OTP']);
            mysqli_close($objCon);
        }

    }

    // if($decoded_input['userName'] == "mattick"){
    //     echo json_encode('pass');
    // }else{
    //     echo json_encode('wrong');
    // }

?>