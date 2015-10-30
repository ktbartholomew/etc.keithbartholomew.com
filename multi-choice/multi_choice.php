<?php	
	function get_coords($data)
	{
		$coords = array('x' => 0, 'y' => 0); //Start at 0
		foreach($data as $a)
		{
			switch($a)
			{
				case 1:
					//Move $coords down and to the right
					$coords['x'] += sqrt(3);
					$coords['y'] -= 1;
				break;
				case 2:
					//Move $coords down and to the left
					$coords['x'] -= sqrt(3);
					$coords['y'] -= 1;
				break;
				case 3:
					//Move $coords up
					$coords['y'] += 2;
				break;
			}
		}
		return $coords;
	}
	
	function get_result($coords)
	{
		if ($coords['y'] <= ($coords['x']/sqrt(3)) && $coords['x'] > 0)
		{
			return 1;
		}
		elseif($coords['y'] <= ((-1 * $coords['x'])/sqrt(3)) && $coords['x'] <= 0)
		{
			return 2;
		}
		elseif($coords['y'] > ($coords['x']/sqrt(3)) && $coords['y'] > ((-1 * $coords['x'])/sqrt(3)))
		{
			return 3;
		}
		else
		{	
			return "Not enough data.";
		}
	}
	
	function show_image($coords)
	{
		$ref = imagecreatefrompng('options3.png');
		$loc = imagecreatefrompng('crosshair.png');
			$white = imagecolorallocate($loc,255,255,255);
			imagecolortransparent($loc,$white);
		
		imagecopymerge($ref,$loc,(310 - (imagesx($loc)/2) + (10 * $coords['x'])),(310 - (imagesy($loc)/2) - (10 * $coords['y'])),0,0,imagesx($loc),imagesy($loc),100);
		
		imagepng($ref);
	}

?>