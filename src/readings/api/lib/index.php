<?php 
  if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) die();

  foreach(glob(dirname(__FILE__) . '/*.php') as $file) {
    require_once($file);
  }

// EOF
