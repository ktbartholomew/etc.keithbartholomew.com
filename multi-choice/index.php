<link rel="stylesheet" href="http://keithbartholomew.com/themes/site_themes/keithbartholomew/css/320andup.css" type="text/css" />
<div id="content">
	<div id="content-inner" class="wrap clearfix">
		<form method="get" action="">
	<p>
	Enter a comma-separated list of values containing integers 1-3. (e.g "1,1,2,2,3")<br/>
	<input type="text" name="data" value="<?php echo $_GET['data'];?>"/><br/>
	</p>
	<p>
	<input type="submit" value="Update Image" /><br/>
	</p>
	</form>
	<h3>Result: <span id="result"><?php include('result.php');?></span></h3>
	<img src="image.php?data=<?php echo $_GET['data'];?>"/>
	</div>
</div>
