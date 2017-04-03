<?php
require_once "functions.php";

session_start();
header("Access-Control-Allow-Origin: *");

$cmd = getValue("cmd", "");
if ($cmd == "add")
{
    $response = add();
    header('Content-type: application/json');
    echo json_encode($response);
}
else if ($cmd == "sub")
{
    $response = subtract();
    header('Content-type: application/json');
    echo json_encode($response);
}
else // list all supported commands
{
  echo
  "
    <pre>
        Command: add
      
            Description: adds a number to a list
            
            Parameters: num

            Example:
                Query string: ?cmd=add&num=5 
                Returns: {'largest': 7, 'numbers': [1, 7, 3, 6, 5] }
                
        Command: fetch
      
            Description: returns the list of numbers
            
            Parameters: none

            Example:
                Query string: ?cmd=fetch
                Returns: {'largest': 7, 'numbers': [1, 7, 3, 6, 5] }                
    </pre>            
  ";
}

function add()
{
	$total = getSessionValue("total", 0);
    $num = getValue("num", 0);
    $total = $total + $num;
	setSessionValue("total", $total);
	
    return array("total"=>$total);
}

function subtract()
{
	$total = getSessionValue("total", 0);
    $num = getValue("num", 0);
    $total = $total - $num;
	setSessionValue("total", $total);
	
    return array("total"=>$total);
}

?>
