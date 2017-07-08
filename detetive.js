function verificaVazio(){
	var caso,fase,erro,numCasos,caso3vazio;
	erro=[false, false, false];
	erroLabel=false;
	numCasos=3;
	

	if(caso3vazio()){
		numCasos=2;
		document.getElementById('descricao'+caso+'_text').style.color = "black";
		for(fase=1;fase<=6;fase++)
			document.getElementById('caso3_etapa'+fase).style.color = "black";
	}

	
	for(caso=1;caso<=numCasos;caso++){
		
		for(fase=1;fase<=6;fase++){
			erroLabel=false;
			if(document.getElementById('pergunta'+fase+'_caso'+caso).value == "" || document.getElementById('pergunta'+fase+'_caso'+caso).value.length > 50){
				document.getElementById('pergunta'+fase+'_caso'+caso+'_text').style.color = "#d50000";
				erroLabel=true;
			}
			else document.getElementById('pergunta'+fase+'_caso'+caso+'_text').style.color = "black";

			if(document.getElementById('resposta'+fase+'_caso'+caso).value == "" || document.getElementById('resposta'+fase+'_caso'+caso).value.length > 15){
				document.getElementById('resposta'+fase+'_caso'+caso+'_text').style.color = "#d50000";
				erroLabel=true;
			}
			else document.getElementById('resposta'+fase+'_caso'+caso+'_text').style.color = "black";
			
			if(erroLabel){
				erro[caso-1]=true;
				document.getElementById('caso'+caso+'_etapa'+fase).style.color = "#d50000";
			}else{
				document.getElementById('caso'+caso+'_etapa'+fase).style.color = "black";
			}
		}

		if(document.getElementById('descricao'+caso).value == "" || document.getElementById('descricao'+caso).value.length > 200){
			document.getElementById('descricao'+caso+'_text').style.color = "#d50000";
			erro[caso-1]=true;
		}
		else document.getElementById('descricao'+caso+'_text').style.color = "black";
	}

	if(erro[0]||erro[1]||erro[2]){
		alert('Corrija os campos em vermelho!');
	}
}

function verificaVazio(){

	var caso3vazio = true;
	
	if(document.getElementById('descricao3').value == ""){
		caso3vazio=false;
	}
	
	for(fase=1;fase<=6;fase++){
		
		if(document.getElementById('pergunta'+fase+'_caso3').value == "")
			caso3vazio=(true&&caso3vazio);
		else caso3vazio=false;

		if(document.getElementById('resposta'+fase+'_caso3').value == "")
			caso3vazio=(true&&caso3vazio);
		else caso3vazio=false;
	}

	return caso3vazio;
}

