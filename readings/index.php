<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <title>Today's Readings</title>
  <link rel="stylesheet" href="css/readings.css">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
  <link rel="apple-touch-icon-precomposed" sizes="180x180" href="apple-touch-icon-iphone-3x.png">
</head>
<body>
  <div id="mass-info">
    <div class="container">
      <h1 id="date"></h1>
      <span id="mass-description"></span>  
    </div>
  </div>
  <div id="readings"></div>
  <div id="top-fade"></div>
  <div id="day-night"><span class="fa fa-lightbulb-o"></span></div>
  <script src="js/jquery.min.js"></script>
  <script src="js/lodash.min.js"></script>
  <script src="js/readings.js"></script>
  <script type="text/template" id="readingTemplate">
    <% for(var i = 0; i < readings.length; i++) { %>
    <% var reading = readings[i]; %>
    <div class="reading">
      <div class="container">
        <h4><%= reading.heading %></h4>
        <div class="text"><%= reading.text %></div>
      </div>
    </div>
    <% } /* endfor */ %>
  </script>
</body>
</html>