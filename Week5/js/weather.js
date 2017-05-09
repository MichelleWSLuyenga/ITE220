window.onload = function() {
	function render() {
		var bangkok = document.getElementById("bkk");
		bkk.addEventListener("click", 
			function(){
				//alert("bkk");
				var url = "http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=a20cab4405ad6822a462e6504b1352d5";
				$.ajax({
					type: "GET",
					url: url,
					success: function(data){
						var temp = data.main.temp - 273.15;
						//console.log(data);
						//console.log(temp);

						var ele = document.getElementById("temp");
						ele.textContent = temp.toFixed(2);

						var icon = data.weather[0].
						 icon;
						var ele2 = document.getElementById("icon");
						ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png' />";

						var humidity = data.main.humidity;

						var ele3 = document.getElementById("hu");
						ele3.textContent = humidity;
					}
				});
			});
		var london = document.getElementById("lon");
		lon.addEventListener("click", 
			function(){
				//alert("lon");
				var url = "http://api.openweathermap.org/data/2.5/weather?q=london&appid=a20cab4405ad6822a462e6504b1352d5";
				$.ajax({
					type: "GET",
					url: url,
					success: function(data){
						var temp = data.main.temp - 273.15;
						//console.log(data);
						//console.log(temp);

						var ele = document.getElementById("temp");
						ele.textContent = temp.toFixed(2);

						var icon = data.weather[0].
						 icon;
						var ele2 = document.getElementById("icon");
						ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png' />";

						var humidity = data.main.humidity;

						var ele3 = document.getElementById("hu");
						ele3.textContent = humidity;
					}
				});
			});
		var seoul = document.getElementById("seo");
		seo.addEventListener("click", 
			function(){
				//alert("bkk");
				var url = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=a20cab4405ad6822a462e6504b1352d5";
				$.ajax({
					type: "GET",
					url: url,
					success: function(data){
						var temp = data.main.temp - 273.15;
						//console.log(data);
						//console.log(temp);

						var ele = document.getElementById("temp");
						ele.textContent = temp.toFixed(2);

						var icon = data.weather[0].
						 icon;
						var ele2 = document.getElementById("icon");
						ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png' />";

						var humidity = data.main.humidity;

						var ele3 = document.getElementById("hu");
						ele3.textContent = humidity;
					}
				});
			});
	}
	render();
	
};




