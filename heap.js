

var mainArray = [];
var ultimoInsertado = 0;
var tama = 0;


function insertar(val){
	mainArray [ultimoInsertado++] = val;
	tama++;
	checkInsertar();
}

function borrar(){
	var temp = mainArray[0];
	tama--;
	ultimoInsertado--;
	intercambio(0, ultimoInsertado);
	mainArray[ultimoInsertado] = null;
	checkBorrar();
	return temp;
}

function intercambio(pos1, pos2){
	var temp = mainArray[pos1];
	mainArray[pos1] = mainArray[pos2];
	mainArray[pos2] = temp;
}

function checkInsertar(){
	var pos = ultimoInsertado-1;
	do{
		if (mainArray[(pos-1)/2]<mainArray[pos]){
			intercambio((pos-1), pos);
			pos = (pos-1)/2;
		}
		else{
			break;
		}
	}while(pos<mainArray.length-1)
}

function checkBorrar(){
	var pos = 0;
	do{
		if (mainArray[2*pos+1] < mainArray[2*pos+2]){
			if (mainArray[pos]<mainArray[2*pos+1]){
						intercambio(pos, (2*pos+1));
						pos = 2*pos+1;
					}
		}
		else if (mainArray[2*pos +1]<mainArray[2*pos + 2]){
			if (mainArray[pos]<mainArray[2*pos+2]){
						intercambio(pos, (2*pos+2));
						pos = 2*pos+2;
					}
		}
		else{
			break;
		}

	}while(pos < mainArray.length);
}

function imprimir(){
	for (var i = 0; i < mainArray.length; i++) {
		console.log(mainArray[i]);
	}
	console.log();
}

function main(){
		imprimir();
		insertar(2);
		imprimir();
		insertar(3);
		imprimir();
		insertar(4);
		imprimir();
		insertar(5);
		imprimir();
		borrar();
		imprimir();
		borrar();
		imprimir();
		insertar(50);
		imprimir();
		insertar(200);
		imprimir();
		borrar();
		imprimir();
		insertar(500);
		imprimir();
		borrar();
		imprimir();
}