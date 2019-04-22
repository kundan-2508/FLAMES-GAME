    
<?php
// Author - Vinit Shahdeo
header("Content-Type:application/json");
header("Access-Control-Allow-Origin: *");
if (!empty($_GET['name1']) && !empty($_GET['name2'])) {
    $name1 = $_GET['name1'];
    $name2 = $_GET['name2'];
    response(200, "Flames Calculated Successfully!", $name1, $name2);
} else {
    response(400, "Invalid Request", NULL, NULL);
}
function response($status, $status_message, $name1, $name2)
{
    header("HTTP/1.1 " . $status);
    $response['status']         = $status;
    $response['status_message'] = $status_message;
    $response['relationship']   = getFlames($name1, $name2);
    // $response['message']=getMessage($name1,$name2);
    //$response['data']=$data;
    $json_response              = json_encode($response);
    echo $json_response;
}
function getFlames($name1, $name2)
{
    
    $flames = array("F", "L", "A", "M", "E", "S");
    
    $name1 = strtoupper(str_replace(" ", "", $name1));
    
    $name2 = strtoupper(str_replace(" ", "", $name2));
    if (strlen($name1) == 0 || strlen($name2) == 0) {
        $data = "No names provided";
    } else if ($name1 == $name2)
        $data = "Names are same";
    
    else {
        
        for ($i = 0; $i < strlen($name1); $i++) {
            
            if (isset($name1[$i]))
                for ($j = 0; $j < strlen($name1); $j++)
                    if (isset($name2[$j]))
                        if ($name1[$i] == $name2[$j]) {
                            
                            $name1[$i] = $name2[$j] = "/";
                            
                            break;
                            
                        }
            
        }
        
        $name1 = str_replace("/", "", $name1);
        $name2 = str_replace("/", "", $name2);
        $count = strlen($name1) + strlen($name2);
        
        $flame = "FLAMES";
        
        while (strlen($flame) != 1) {
            $flame[$count % strlen($flame)] = "/";
            $flame = str_replace("/", "", $flame);
        }
        $data = $flames[$flame];
    }
    
    return $data;
}
//Flames API by Vinit Shahdeo
?>