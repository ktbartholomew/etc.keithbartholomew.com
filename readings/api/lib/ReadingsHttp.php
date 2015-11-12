<?php 

class ReadingsHttp {
  public function __construct() {

  }

  public function getToday() {
    date_default_timezone_set('America/Chicago');
    //$todayFormat = date("mdy");

    if(date('G') < 17) {
      $todayFormat = date("mdy");  
    }
    else {
      $todayFormat = date("mdy", strtotime('tomorrow'));
    }
    $ch = curl_init();
    curl_setopt_array($ch, array(
      CURLOPT_URL => "http://www.usccb.org/bible/readings/" . $todayFormat . ".cfm",
      CURLOPT_RETURNTRANSFER => true,
    ));

    $curl_html = curl_exec($ch);

    if(curl_error($ch)) {
      die('cUrl Error!');
    }

    $document = str_get_html($curl_html);

    $massInfo = new stdClass;
    $massInfo->date = date("F j, Y");

    $description = $document->find('.readings h3');
    $description = $description[0];
    $massInfo->description = $description->innertext;
    $massInfo->readings = array();

    $readings = $document->find('.bibleReadingsWrapper');

    foreach ($readings as $key => $reading) {
      $thisReading = new stdClass;

      $heading = $reading->find('h4');
      $heading = $heading[0];
      $thisReading->heading = $heading->innertext;

      $thisReading->heading = str_replace('href="', 'href="http://usccb.org', $thisReading->heading);

      $text = $reading->find('.poetry');
      $text = $text[0];
      $thisReading->text = $text->innertext;

      // Convert double-line breaks to paragraphs.
      $thisReading->text = '<p>' . $thisReading->text;
      $thisReading->text = str_replace('<br><br>', '</p><p>', $thisReading->text);
      $thisReading->text = $thisReading->text . '</p>';

      // Remove all the line breaks
      // $thisReading->text = str_replace('<br>', ' ', $thisReading->text);
      
      array_push($massInfo->readings, $thisReading);
    }

    return json_encode($massInfo);
  }
}

// EOF
