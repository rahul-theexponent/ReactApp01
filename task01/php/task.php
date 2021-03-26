<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

$con=mysqli_connect("localhost","root","","task");
    if(!$con)
    {
        die("Unable to Connect!!!");
    }
    else
    {
        $email=$_POST['email'];
        $message=$_POST['message'];
        $password=$_POST['password'];
        if($email==""||$message==""||$password==""){
            echo"Enter valid data";
        }
        else{$query="INSERT into react VALUES('','$email','$message','$password')";
            $r=mysqli_query($con,$query);
            if($r)
            {
                echo"Data Has been Successfully Inserted";
            }
            else
            {
                echo"Error";
            }
        }
    }

?>