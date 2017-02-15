//make BMI Calculator

$(document).ready(function(){

	// window.setTimeout(function, milliseconds);

	$("#btn").click(function(){
		var city_name = $("#cityname").val();
		getValue(city_name);
		$("#city,#country,#temp,#sunny,#icon,#unit").css("visibility", "visible");
	});

	function getValue(city){
		// alert(city);
		$.ajax({
			url: 'https://api.apixu.com/v1/current.json?key=fd48aae7884d4ddcbf192605171202&q='+city,
			dataType: 'json',
			success: function(data){
				// console.log(data);

				$("#city").text(data.location.name);
				$("#country").text(data.location.country);
				$("#temp").text(data.current.temp_c);
				$("#sunny").text(data.current.condition.text);

				// image=data.current.condition.icon;
				var str = data.current.condition.icon;
				str = str.replace("//", "https://");
				$("#icon").attr("src", str);				
			}
		});
	}
	

});
