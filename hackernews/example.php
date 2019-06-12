<?php
$response = get_web_page("https://www.ticketmaster.co.uk/api/quickpicks/37005561E108630A/prices?f_pleasenote=false&f_handlingfee=false&f_feebreakdown=true&f_deliveryoptions=true&f_resaledeliveryoptions=true&f_verifiedtickets=false&f_alwaysshowresale=true&f_mtt_variant=true&f_showResaleOnListView=true&f_showLowDemandBasketCollapsible=true&f_showIntegratedResale=true&f_forceResale=false&f_orderprocessingfee=true&f_showAccessibleInfo=true&f_hideGeneralOnsale=true&f_show_suggestions=true&f_listingFlow=true&f_myTicketsShowFaceValueOnly=false&f_thirdpartyscriptsservice=false&f_hideEventAvailability=true&f_mode=lowDemand&f_new_myaccount=true");
$resArr = array();
$resArr = json_decode($response);
if (property_exists($resArr, "quantities") && $resArr->quantities !== [0]){
	$mess = "Кажется появились билеты. Количество билетов: ".json_encode($resArr->quantities)." Проверить можно тут: https://www.ticketmaster.co.uk/rammstein-milton-keynes-06-07-2019/event/37005561E108630A";
	$subject = "I found tickets for you";
	send_message($mess, $subject);
}
if (date("H:i:s") > date("09:45:00") && date("H:i:s") < date("09:55:00")) {
    send_message("Я всё ещё на боевом дежурстве.", "За время дежурства проблем не случилось.");
}

function send_message($mess, $subject) {
    $to  = "<se0ga@yandex.ru>, " ; 
    $to .= "<alyniekka@yandex.ru>";

    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: se0ga@yandex.ru\r\n"; 
    $headers .= "Reply-To: se0ga@yandex.ru\r\n"; 

    mail($to, $subject, $mess, $headers);
}
function get_web_page($url) {
    $options = array(
        CURLOPT_RETURNTRANSFER => true,   // return web page
        CURLOPT_HEADER         => false,  // don't return headers
        CURLOPT_FOLLOWLOCATION => true,   // follow redirects
        CURLOPT_MAXREDIRS      => 10,     // stop after 10 redirects
        CURLOPT_ENCODING       => "",     // handle compressed
        CURLOPT_USERAGENT      => "test", // name of client
        CURLOPT_AUTOREFERER    => true,   // set referrer on redirect
        CURLOPT_CONNECTTIMEOUT => 120,    // time-out on connect
        CURLOPT_TIMEOUT        => 120,    // time-out on response
    ); 

    $ch = curl_init($url);
    curl_setopt_array($ch, $options);
    $content  = curl_exec($ch);
    curl_close($ch);
    return $content;
}
