<?php
    $days = 25;
    echo "Counting down to final exam";
    echo "<br/>";
    for($i = $days; $i >= 1; $i--) 
    {
    	echo "$i";
    	if($i == 1) {
    	echo "   day left";
        }else {
        echo "   days left";	
        }
    	echo "<br/>";
    }
    echo "It's FINAL EXAM!";
?>