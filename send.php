<?php 


$login = $_POST['login'];
$email = $_POST['E-mail'];
$login = htmlspecialchars($login);
$email = htmlspecialchars($email);
$login = urldecode($login);
$email = urldecode($email);
$login = trim($login);
$email = trim($email);



if (mail("saimonvip_ridder@mail.ru", "Заявка с сайта", "ФИО:".$login.". E-mail: ".$email ,"From: example2@mail.ru \r\n")){ 
echo "<center><h1>hello</h1></center>"; 
} else { 
echo "<h1>fuck bich</h1>";
}
 ?>