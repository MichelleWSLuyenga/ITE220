<?php
    //print_r($_GET);
    $seats = $_GET["seats"];
    if (!isset($seats)) {
    	echo "You should select seat!";
    	echo "<br />";
    	echo "<a href='concert.php'>Back</a>";
    }elseif (count($seats) > 4) {
    	echo "You should select less than or equal to 4 seats!";
    	echo "<br />";
    	echo "<a href='concert.php'>Back</a>";
    }else {
    	echo "You buy ".count($seats)." seat(s)";
    	echo "<br />";
    	$total = 0;
    	foreach ($seats as $s) {
    		echo "$s: ";
    		if ($s[0] == "A") {
    			if($s == "A-4") {
    			    echo "1,500 THB";
    			    echo "<br />";
    			    echo "Congratulation! You won the lucky draw ticket. The seat prices is 50% off!";
    		        $total += 3000*0.5;
    		    }else {
    		    	echo "3,000 THB";
    		    	$total += 3000;
    		    }
    		}elseif ($s[0] == "B") {
    			echo "2,000 THB";
    			$total += 2000;
    		}elseif ($s[0] == "C") {
    			echo "1,000 THB";
    			$total += 1000;
    		}
    		echo "<br />";
    	}
    	echo "Total price: $total THB";
    }
?>