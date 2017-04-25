var calendar = {
	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr>",
	displayCalendar: function() {
		var ele = document.getElementById("calendar");
		var calendarText = "<table class='table table-condensed'>";
		calendarText += this.header;
		for(var i = 1; i <= 31; i++) {
			//write code to display date
			document.write("<tr>");
			if(i%7===0){
                calendarText += "<td>"+i+"</td></tr><tr>";
            }else {
                calendarText += "<td>" + i + "</td>";
            }

		}
		calendarText += "</tr></table>"
		ele.innerHTML = calendarText;
	}
}
calendar.displayCalendar();
