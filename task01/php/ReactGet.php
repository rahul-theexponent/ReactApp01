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
        $query="Select * from React";
            $r=mysqli_query($con,$query);
            $arr=[];
            if(mysqli_num_rows($r)>0)
            {   
                while($row=mysqli_fetch_assoc($r)){
                array_push($arr,$row);
                $jsonarray=json_encode($arr);
            }
            echo $jsonarray;
            }
            else
            {
                echo"Error";
            }
        
    }

?>