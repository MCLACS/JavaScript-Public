<?php
session_start();
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

function getValue($key)
{
	$ret = "";
	if (isset($_GET[$key]))
		$ret = $_GET[$key];
	else if (isset($_POST[$key]))
		$ret = $_POST[$key];
	return $ret;
}

$user = "";
$pass = "";
$cmd = getValue("cmd");
if ($cmd == "login")
{
	$user = getValue("user");
	$pass = getValue("pass");

	if ($user === "robo" and $pass === "obor")
	{
		$_SESSION["loggedIn"] = TRUE;
		$results = array("loggedIn" => "TRUE");
	}
	else
	{
		$results = array("loggedIn" => "FALSE");
		$_SESSION["loggedIn"] = FALSE;
	}
}
else if ($cmd == "isLoggedIn")
{
	if (isset($_SESSION["loggedIn"]) && $_SESSION["loggedIn"] == TRUE)
	{
		$results = array("loggedIn" => "TRUE");
	}
	else
	{
		$results = array("loggedIn" => "FALSE");
	}
}
else
{
	if (isset($_SESSION["loggedIn"]) && $_SESSION["loggedIn"] == TRUE)
	{
		$results =
				[
					array("First" => "Tom", "Last" => "Allen", "Phone" => "111-222-3333"),
					array("First" => "Sally", "Last" => "Artle", "Phone" => "111-222-3333"),
					array("First" => "Jennifer", "Last" => "Branch", "Phone" => "111-222-3333"),
					array("First" => "Lucy", "Last" => "Dellis", "Phone" => "111-222-3333"),
					array("First" => "Steven", "Last" => "Flint", "Phone" => "111-222-3333"),
					array("First" => "Ken", "Last" => "Helles", "Phone" => "111-222-3333"),
					array("First" => "Richard", "Last" => "Julit", "Phone" => "111-222-3333"),
					array("First" => "Sandy", "Last" => "Lewis", "Phone" => "111-222-3333"),
					array("First" => "Frank", "Last" => "Nully", "Phone" => "111-222-3333"),
					array("First" => "Rachel", "Last" => "Plank", "Phone" => "111-222-3333"),
					array("First" => "Alex", "Last" => "Ranch", "Phone" => "111-222-3333"),
					array("First" => "Kendra", "Last" => "Silk", "Phone" => "111-222-3333"),
					array("First" => "Fred", "Last" => "Trill", "Phone" => "111-222-3333"),
					array("First" => "Terri", "Last" => "West", "Phone" => "111-222-3333")
				];
	}
	else
	{
		$results = array("oops" => "don't call me if session does not say you are logged in");
	}
}

echo json_encode($results);
?>
