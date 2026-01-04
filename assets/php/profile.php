<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

$bulk = new MongoDB\Driver\BulkWrite;

$bulk->insert([
    'age' => $_POST['age'] ?? '',
    'dob' => $_POST['dob'] ?? '',
    'contact' => $_POST['contact'] ?? ''
]);

$manager->executeBulkWrite('guvi.profile', $bulk);

echo "Profile saved successfully";
?>
