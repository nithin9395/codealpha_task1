<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $major = $_POST['major'];
    $interests = $_POST['interests'];
    $University = $_POST['University'];
    $passout = $_POST['passout'];
    $Specilization = $_POST['Specilization'];
    $Aboutyou = $_POST['Aboutyou'];


    // Process and store the data as needed

    // For demonstration purposes, you can simply print the data
    echo "Name: $name<br>";
    echo "Age: $age<br>";
    echo "Major: $major<br>";
    echo "Interests: $interests<br>";
    echo "University: $University<br>";
    echo "passout: $passout<br>";
    echo "Specilization: $Specilization<br>";
    echo "Aboutyou: $Aboutyou<br>";
}
?>
