//make BMI Calculator

$(document).ready(function(){

	// window.setTimeout(function, milliseconds);

	$("#btn").click(function(){
		var city_name = $("#cityname").val();
		var days = $("#days").val();
		getValue(city_name);
		$("#label-1,#label-2,#city,#country,#region,#temp,#unit,#update,#forecast").css("visibility", "visible");
		// $("#label-2").css("visibility", "visible");

	});

	function getValue(city){
		// alert(city);
		$.ajax({
			url: 'https://api.apixu.com/v1/forecast.json?key=7b195b0bdd35453ba6b54648171302&q='+city,
			dataType: 'json',
			success: function(value){
				// console.log(data);

				$("#city").text(value.location.name);
				$("#country").text(value.location.country);
				$("#region").text(value.location.region);
				$("#update").text(value.current.last_updated);
				$("#temp").text(value.current.temp_f);
				// $("#forecast").text(value.forecast.forecastday.day.maxtemp_c);
			}
		});
	}
	

	// function getValue(city){
	// 	$.ajax({
	// 	  dataType: 'json',
	// 	  url: 'https://api.apixu.com/v1/current.json?key=fd48aae7884d4ddcbf192605171202&q='+city,
	// 	  data: '',
	// 	  success: function(data){
		  			  		
	// 	  		if(data.error)
	// 	  		{
	// 	  			alert(data.error.message);
	// 	  		}
	// 	  		else
	// 	  		{
	// 	  			$("#city").text(data.location.name);
	// 	  			$("#country").text(data.location.country);
	// 	  			$("#temp").text(data.current.temp_c);
	// 	  		}


		  		
	// 	  },
	// 	  error: function(data){
	// 	  		console.log(data.error);
	// 	  }
	// 	});
	// }
});
