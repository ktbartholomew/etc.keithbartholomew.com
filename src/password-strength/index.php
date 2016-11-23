<link rel="stylesheet" href="http://keithbartholomew.com/themes/site_themes/keithbartholomew/css/320andup.css" type="text/css" />
<div id="content">
	<div id="content-inner" class="wrap clearfix">
		<style type="text/css">
		  #gauge {
  		  width: 140px;
  		  height: 120px;
  		  background: url(gauge-face.png) top left no-repeat;
  		  position: relative;
		  }
		  
		  #gauge #hand {
		    width: 140px;
		    height: 140px;
		    background: url(gauge-hand.png) center no-repeat;
		    -webkit-transition: all 0.3s ease-out;
		    -moz-transition: all 0.3s ease-out;
		    -ms-transition: all 0.3s ease-out;
		  }
		  
		  #gauge #status {
		    display: block;
		    width: 100%;
		    text-align: center;
		    position: absolute;
		    bottom: 0px;
		  }
		  @media only screen and (-moz-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
	   #gauge {
	     background: url(gauge-face_2x.png) top left no-repeat; 
	     background-size: 100%;
	   }
	   #gauge #hand {
	     background: url(gauge-hand_2x.png) center no-repeat;
	     background-size: 100%;
	   }

}
		  
		</style>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		<script type="text/javascript">
		  function doRotate(){
		    var gauge = $("#hand");
		    if(document.getElementById('input-password').value.length == 0)
		    {
		      var s = 0;
		    }
		    else
		    {
          var s = 240 * getStrength(document.getElementById('input-password').value);
        }
        //Don't wanna break the gauge! 240 degress of rotation is our max.
        if(s > 240)
        {
          s = 240;
        }
		    gauge.css('-webkit-transform','rotate('+ (s) +'deg)');
		    gauge.css('-moz-transform','rotate('+ (s) +'deg)');
		    gauge.css('-ms-transform','rotate('+ (s) +'deg)');
		    if(s < 81)
		    {
		      $("#status").html('Bad');
		    }
		    else if(s < 121)
		    {
		      $("#status").html('Good');
		    }
		    else if(s < 161)
		    {
		      $("#status").html('Great');
		    }
		  }
		  
		  function log10(val)
		  {
		    return Math.log(val) / Math.LN10;
		  }
		  
		  function getStrength(password)
		  {
		    //To make life easier, our maximum-strength password will be 24 characters, using all 4 of the character types.
		    var minStrength = 0;
		    var M = 2.95e+47;
		    
		    //Step one is to figure out the size of the alphabet we're working with.
		    //Create indexes of each different character type
		    var lowerCase="abcdefghijklmnopqrstuvwxyz";
		    var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		    var numerical="0123456789";
		    var symbols="!@#$%^&*()-=_+`~,./;'[]\\<>?:\"{}| ";
		    
		    var passArray = password.split("");
        var a = new Object();
          a.lowerCase = false;
          a.upperCase = false;
          a.numerical = false;
          a.symbols   = false;
		    
		    //Loop through every character in the password to determine which alphabet parts we have.
		    for(var i = 0;i < passArray.length;i++)
		    {
		      if(lowerCase.indexOf(passArray[i]) != -1)
		      {
		        a.lowerCase = true;
		      }
		      if(upperCase.indexOf(passArray[i]) != -1)
		      {
		        a.upperCase = true;
		      }
		      if(numerical.indexOf(passArray[i]) != -1)
		      {
		        a.numerical = true;
		      }
		      if(symbols.indexOf(passArray[i]) != -1)
		      {
		        a.symbols = true;
		      }
		    }

        //Get an alphabet size
        var aSize = 0;
        if(a.lowerCase)
        {
          aSize += 26;
        }
        if(a.upperCase)
        {
          aSize += 26;
        } 
        if(a.numerical)
        {
          aSize += 10;
        } 
        if(a.symbols)
        {
          aSize += 33;
        }
        
        // The "Strength" (actually the maximum strength in a blind, brute-force attack) should be expressed
        // as a ratio on a logarithmic scale. This makes 
        var totalStrength = 0;
        for(var i = passArray.length; i > 0; i--)
        {
          totalStrength += Math.pow(aSize,i);
        } 
        return (log10(totalStrength) - log10(10)) / (log10(M) - log10(10));
        
      }
    </script>
  </head>
  <body>
  <div style="margin: 2em;width:140px;">
    <label for="input-password">Test a password: </label><br/>
    <input type="text" id="input-password" name="input-password" style="margin: 1em auto;width:100%;" onkeyup="doRotate();"/><br/>
    <div id="gauge">
      <div id="hand">
      </div>
      <span id="status">Bad</span>
    </div>
  </div>
	</div>
</div>
