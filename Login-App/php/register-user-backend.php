<?php

include 'connection-backend.php';

/*Declaring variables*/

$full_name = $_POST['full_name'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

/*Inserting data into a table - users table*/

$query = "INSERT INTO users(full_name, email, username, password) 
VALUES('$full_name', '$email', '$username', '$password');"

$run = mysqli_query($connection, $query);

/*Alert success message*/

if($run){
    echo '
    <script>
    alert("User saved successfully!");
    window.location = "../index.php";  
    </script>';
}else{
    echo '
    <script>
    alert("Could not save user, try again.");
    window.location = "../index.php";  
    </script>';
}

mysqli_close($connection);

?>