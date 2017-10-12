/*Es un cifrado familiar para muchos niños. Su clave 
es sencilla: cada letra del alfabeto es reemplazada con 
la siguiente letra, por ejemplo la A se reemplaza por 
la B, la B por la C y así las demás. “ROT1” literalmente 
significa “Rotar 1 letra hacia adelante en todo el 
alfabeto”. */

var frase = prompt("Ingrese una frase: ");



function Rot1(mensaje){
  
var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,
           j:10,k:11,l:12, m:13,n:14,o:15,p:16,q:17,
           r:18,s:19,t:20,u:21,v:22,w:23,x:24,
           y:25,z:26};
           
var ABC = {A:27,B:28,C:29,D:30,E:31,F:32,G:33,H:34,I:35,
           J:36,K:37,L:38, M:39,N:40,O:41,P:42,Q:43,
           R:44,S:45,T:46,U:47,V:48,W:49,X:50,
           Y:51,Z:52};
           
  
  //Contar los caracteres del alfabeto
  var countABC = 0;
    for (var i in abc){
      countABC++;
    }
 //Verificar si el mensaje esta vacio
      if(mensaje.length > 0){
      	
        //recorrido del mensaje
        var nuevoString = '';
        
        var arr = Array.from(mensaje);
          //console.log(arr);
          
          for(var j=0; j<arr.length;j++){
          	
            if(abc.hasOwnProperty(arr[j])){
              var valueC = abc[arr[j]];
              //console.log(valueC);
              var formV = (valueC-1+1)%26+1;
              
              for(var k in abc){
              	if(abc[k] === formV){
              		nuevoString += k;

              	}
              }
              
              
              


              

            }else if(ABC.hasOwnProperty(arr[j])){
              	
              
            }
          }
        return nuevoString;
  
}


  
}
Rot1(frase);

frase de prueba






