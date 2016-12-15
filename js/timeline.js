$( document ).ready(function() {
	var maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag, zaalma, zaaldi, zaalwo, zaaldo, zaalvr, zaalza, zaalzo, uurbeginma, uurbegindi, uurbeginwo, uurbegindo, uurbeginvr, uurbeginza, uurbeginza, uurbeginzo, uureindma, uureinddi, uureindwo, uureinddo, uureindvr, uureindza, uureindzo, plaats, movieId;
	//open de data API voor het weergeven van films op movieId
	$.getJSON("../js/uurregeling.json", function(data){
		
		//session store ophalen uit vorige js
		movieId = sessionStorage.getItem("movieId");
		
		/*for (i = 0; i < data[movieId][0].Dagen.length; i++){
				document.getElementById("gegevens").innerHTML += "<tr><td><h5 class='white'>"+data[movieId][0].Dagen[i].Dag+"</h5></td><td><h5 class='white'>"+data[movieId][0].Dagen[i].Uren+"</h5></td><td><h5 class='white'>"+data[movieId][0].Dagen[i].Zalen+"</h5></td></tr>";
				}*/
		
		studioSkoop();
		$(".gegevens").attr("id","studioskoop");
		$("#cinema0").addClass("active");
		draw();
		
	
		function studioSkoop(){
			plaats = "studioskoop",
			maandag = 	data[movieId][0].Dagen[0].Dag,
			dinsdag = 	data[movieId][0].Dagen[1].Dag,
			woensdag = 	data[movieId][0].Dagen[2].Dag,
			donderdag = 	data[movieId][0].Dagen[3].Dag,
			vrijdag = 	data[movieId][0].Dagen[4].Dag,
			zaterdag = 	data[movieId][0].Dagen[5].Dag,
			zondag = 	data[movieId][0].Dagen[6].Dag,
			zaalma= 		data[movieId][0].Dagen[0].Zalen,
			zaaldi= 		data[movieId][0].Dagen[1].Zalen,
			zaalwo= 		data[movieId][0].Dagen[2].Zalen,
			zaaldo= 		data[movieId][0].Dagen[3].Zalen,
			zaalvr= 		data[movieId][0].Dagen[4].Zalen,
			zaalza= 		data[movieId][0].Dagen[5].Zalen,
			zaalzo= 		data[movieId][0].Dagen[6].Zalen,
			uurbeginma= 		parseInt(data[movieId][0].Dagen[0].Uren),
			uurbegindi= 		parseInt(data[movieId][0].Dagen[1].Uren),
			uurbeginwo= 		parseInt(data[movieId][0].Dagen[2].Uren),
			uurbegindo= 		parseInt(data[movieId][0].Dagen[3].Uren),
			uurbeginvr= 		parseInt(data[movieId][0].Dagen[4].Uren),
			uurbeginza= 		parseInt(data[movieId][0].Dagen[5].Uren),
			uurbeginzo= 		parseInt(data[movieId][0].Dagen[6].Uren),
			uureindma= 		2+parseInt(data[movieId][0].Dagen[0].Uren),
			uureinddi= 		2+parseInt(data[movieId][0].Dagen[1].Uren),
			uureindwo= 		2+parseInt(data[movieId][0].Dagen[2].Uren),
			uureinddo= 		2+parseInt(data[movieId][0].Dagen[3].Uren),
			uureindvr= 		2+parseInt(data[movieId][0].Dagen[4].Uren),
			uureindza= 		2+parseInt(data[movieId][0].Dagen[5].Uren),
			uureindzo= 		2+parseInt(data[movieId][0].Dagen[6].Uren)
		}
			
			
		function kinepolis(){
			plaats = "kinepolis",
			maandag = 	data[movieId][1].Dagen[0].Dag,
			dinsdag = 	data[movieId][1].Dagen[1].Dag,
			woensdag = 	data[movieId][1].Dagen[2].Dag,
			donderdag = 	data[movieId][1].Dagen[3].Dag,
			vrijdag = 	data[movieId][1].Dagen[4].Dag,
			zaterdag = 	data[movieId][1].Dagen[5].Dag,
			zondag = 	data[movieId][1].Dagen[6].Dag,
			zaalma= 		data[movieId][1].Dagen[0].Zalen,
			zaaldi= 		data[movieId][1].Dagen[1].Zalen,
			zaalwo= 		data[movieId][1].Dagen[2].Zalen,
			zaaldo= 		data[movieId][1].Dagen[3].Zalen,
			zaalvr= 		data[movieId][1].Dagen[4].Zalen,
			zaalza= 		data[movieId][1].Dagen[5].Zalen,
			zaalzo= 		data[movieId][1].Dagen[6].Zalen,
			uurbeginma= 		parseInt(data[movieId][1].Dagen[0].Uren),
			uurbegindi= 		parseInt(data[movieId][1].Dagen[1].Uren),
			uurbeginwo= 		parseInt(data[movieId][1].Dagen[2].Uren),
			uurbegindo= 		parseInt(data[movieId][1].Dagen[3].Uren),
			uurbeginvr= 		parseInt(data[movieId][1].Dagen[4].Uren),
			uurbeginza= 		parseInt(data[movieId][1].Dagen[5].Uren),
			uurbeginzo= 		parseInt(data[movieId][1].Dagen[6].Uren),
			uureindma= 		2+parseInt(data[movieId][1].Dagen[0].Uren),
			uureinddi= 		2+parseInt(data[movieId][1].Dagen[1].Uren),
			uureindwo= 		2+parseInt(data[movieId][1].Dagen[2].Uren),
			uureinddo= 		2+parseInt(data[movieId][1].Dagen[3].Uren),
			uureindvr= 		2+parseInt(data[movieId][1].Dagen[4].Uren),
			uureindza= 		2+parseInt(data[movieId][1].Dagen[5].Uren),
			uureindzo= 		2+parseInt(data[movieId][1].Dagen[6].Uren)
		}
			
		function sphinx(){
			plaats = "sphinx",
			maandag = 	data[movieId][2].Dagen[0].Dag,
			dinsdag = 	data[movieId][2].Dagen[1].Dag,
			woensdag = 	data[movieId][2].Dagen[2].Dag,
			donderdag = 	data[movieId][2].Dagen[3].Dag,
			vrijdag = 	data[movieId][2].Dagen[4].Dag,
			zaterdag = 	data[movieId][2].Dagen[5].Dag,
			zondag = 	data[movieId][2].Dagen[6].Dag,
			zaalma= 		data[movieId][2].Dagen[0].Zalen,
			zaaldi= 		data[movieId][2].Dagen[1].Zalen,
			zaalwo= 		data[movieId][2].Dagen[2].Zalen,
			zaaldo= 		data[movieId][2].Dagen[3].Zalen,
			zaalvr= 		data[movieId][2].Dagen[4].Zalen,
			zaalza= 		data[movieId][2].Dagen[5].Zalen,
			zaalzo= 		data[movieId][2].Dagen[6].Zalen,
			uurbeginma= 		parseInt(data[movieId][2].Dagen[0].Uren),
			uurbegindi= 		parseInt(data[movieId][2].Dagen[1].Uren),
			uurbeginwo= 		parseInt(data[movieId][2].Dagen[2].Uren),
			uurbegindo= 		parseInt(data[movieId][2].Dagen[3].Uren),
			uurbeginvr= 		parseInt(data[movieId][2].Dagen[4].Uren),
			uurbeginza= 		parseInt(data[movieId][2].Dagen[5].Uren),
			uurbeginzo= 		parseInt(data[movieId][2].Dagen[6].Uren),
			uureindma= 		2+parseInt(data[movieId][2].Dagen[0].Uren),
			uureinddi= 		2+parseInt(data[movieId][2].Dagen[1].Uren),
			uureindwo= 		2+parseInt(data[movieId][2].Dagen[2].Uren),
			uureinddo= 		2+parseInt(data[movieId][2].Dagen[3].Uren),
			uureindvr= 		2+parseInt(data[movieId][2].Dagen[4].Uren),
			uureindza= 		2+parseInt(data[movieId][2].Dagen[5].Uren),
			uureindzo= 		2+parseInt(data[movieId][2].Dagen[6].Uren)
		}
		
		$("#cinema0").on("click", function(){
			studioSkoop();
			$(".gegevens").attr("id",plaats);
			$("#cinema0").addClass("active");
			$("#cinema1").removeClass("active");
			$("#cinema2").removeClass("active");
			draw();
			});
		
		$("#cinema1").on("click", function(){
			kinepolis();
			$(".gegevens").attr("id",plaats);
			$("#cinema0").removeClass("active");
			$("#cinema1").addClass("active");
			$("#cinema2").removeClass("active");
			draw();
			});
		
		$("#cinema2").on("click", function(){
			sphinx();
			$(".gegevens").attr("id",plaats);
			$("#cinema0").removeClass("active");
			$("#cinema1").removeClass("active");
			$("#cinema2").addClass("active");
			draw();
			});
			
	function draw(){		
	google.charts.load("current", {packages:["timeline"]});
  	google.charts.setOnLoadCallback(drawChart);
  	function drawChart() {

    var container = document.getElementById(plaats);
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Room' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ maandag, 	zaalma, 			new Date(0,0,0,uurbeginma,0),  new Date(0,0,0,uureindma,0) ],
	  [ dinsdag,		zaaldi,       	new Date(0,0,0,uurbegindi,0),  new Date(0,0,0,uureinddi,0) ],
	  [ woensdag, 	zaalwo,      	new Date(0,0,0,uurbeginwo,0),  new Date(0,0,0,uureindwo,0) ],
	  [ donderdag, 	zaaldo,       	new Date(0,0,0,uurbegindo,0),  new Date(0,0,0,uureinddo,0) ],
	  [ vrijdag, 	zaalvr,       	new Date(0,0,0,uurbeginvr,0),  new Date(0,0,0,uureindvr,0) ],
	  [ zaterdag, 	zaalza,       	new Date(0,0,0,uurbeginza,0),  new Date(0,0,0,uureindza,0) ],
	  [ zondag, 		zaalzo,       	new Date(0,0,0,uurbeginzo,0),  new Date(0,0,0,uureindzo,0) ],
	]);


    var options = {
	colors: ['#2c3e50'],
    timeline: { rowLabelStyle: {color: 'white', fontSize: 20 },
                     barLabelStyle: {fontSize: 14 } },
	backgroundColor: '#396a77',
    };

    chart.draw(dataTable, options);
  }
	
	
	
	}
	});
	
});