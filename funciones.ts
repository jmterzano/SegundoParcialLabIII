namespace General
{
    var rowGlobal;
    window.addEventListener("load",function(){
       
        document.getElementById("tipoVehiculo").addEventListener("change",cambioVehiculo);
        document.getElementById("verForm").addEventListener("click", mostrarForm);
        document.getElementById("btnGuardar").addEventListener("click",guardar); 
        document.getElementById("btnEliminar").addEventListener("click",eliminar); 
        document.getElementById("filtrar").addEventListener("click",filtrarTabla); 
        
    })

    window.addEventListener("load",hideForm);

    var listaVehiculos:Array<Vehiculo> = new Array<Vehiculo>();
    

    export function hideForm()
    {
        document.getElementById("infoCamioneta").hidden = true;
        
    }

    export function cambioVehiculo()
    {
        if(document.getElementById("tipoVehiculo").value == "1")
        {
            document.getElementById("infoAuto").hidden = false;
            document.getElementById("infoCamioneta").hidden = true;
            
        }else if(document.getElementById("tipoVehiculo").value == "2")
        {
            document.getElementById("infoAuto").hidden = true;
            document.getElementById("infoCamioneta").hidden = false;
            
        }
    }

    function mostrarForm(){
    document.getElementById("formulario").hidden=false;
    }

    export function guardar()
    {
        var tCuerpo = document.getElementById("tCuerpo");
        var marca= document.getElementById("marca").value;
        var modelo= document.getElementById("modelo").value;
        var precio= document.getElementById("precio").value;
        var cantPuertas:number = document.getElementById("cantPuertas").value;
        
        var idRow:number;
        if(document.getElementById("cuatroXcuatro").value == "1")
        {
            var cuatroXcuatro=document.createTextNode("Si");
        }else if(document.getElementById("cuatroXcuatro").value == "2")
        {
            var cuatroXcuatro=document.createTextNode("No");
        }
        var control:boolean = false;
        var row = document.createElement("tr");
        var cel1 = document.createElement("td");
        var cel2 = document.createElement("td");
        var cel3 = document.createElement("td");
        var cel4 = document.createElement("td");
        var text1;
        var text2; 
        var text3; 
        var text4; 

        switch(document.getElementById("tipoVehiculo").value)
        {
            case "1":
                
                    var miAuto:Auto = new Auto(marca,modelo,precio,cantPuertas);
                    miAuto.id = calcularID();
                    idRow = miAuto.id;
                    listaVehiculos.push(miAuto);

                    text1 = document.createTextNode(marca);
                    text2 = document.createTextNode(modelo);
                    text3 = document.createTextNode(precio);
                    text4 = document.createTextNode(cantPuertas.toString());
                    control = true;
               
            break;
            case "2":

                    var miCamioneta:Camioneta = new Camioneta(marca,modelo,precio,cuatroXcuatro);
                    miCamioneta.id = calcularID();
                    idRow = miCamioneta.id;
                    listaVehiculos.push(miCamioneta);

                    text1 = document.createTextNode(marca);
                    text2 = document.createTextNode(modelo);
                    text3 = document.createTextNode(precio);
                    if(document.getElementById("cuatroXcuatro").value == "1")
                    {
                        text4 = miCamioneta.getCuatroXcuatro();
                    }else if(document.getElementById("cuatroXcuatro").value == "2")
                    {
                        text4 = miCamioneta.getCuatroXcuatro(); 
                    }
                    control = true;
                     
            break;
        }
        if(control == true)
        {
            row.setAttribute("idVehiculo",idRow.toString());
            if(document.getElementById("tipoVehiculo").value == "1")
            {
                row.setAttribute("tipoVehiculo","Auto");
            }else if(document.getElementById("tipoVehiculo").value == "2")
            {
                row.setAttribute("tipoVehiculo","Camioneta");
            }
            cel1.appendChild(text1);
            cel2.appendChild(text2);
            cel3.appendChild(text3);
            cel4.appendChild(text4);
            row.appendChild(cel1);
            row.appendChild(cel2);
            row.appendChild(cel3);
            row.appendChild(cel4);
            row.addEventListener("dblclick",clickGrilla);
            tCuerpo.appendChild(row);
            //tablaGlobal = tCuerpo;
            control = false;
            document.getElementById("marca").value = "";
            document.getElementById("modelo").value = "";
            document.getElementById("precio").value = 1;
            document.getElementById("cantPuertas").value = 3;
            document.getElementById("cuatroXcuatro").value = "1";
            promedio()
        }
        
    }

    export function clickGrilla(e)
    {
        
        var trClick = e.target.parentNode;
        rowGlobal = trClick;
        document.getElementById("ID").value = trClick.getAttribute("idVehiculo") ;
        document.getElementById("marca").value = trClick.childNodes[0].innerHTML;
        document.getElementById("modelo").value = trClick.childNodes[1].innerHTML;
        document.getElementById("precio").value = trClick.childNodes[2].innerHTML;
        if(trClick.getAttribute("tipoVehiculo") == "Auto")
        {
            document.getElementById("tipoVehiculo").value = "1";
            document.getElementById("cantPuertas").value = trClick.childNodes[3].innerHTML;
            cambioVehiculo();
        }else if(trClick.getAttribute("tipoVehiculo") == "Camioneta")
        {
            document.getElementById("tipoVehiculo").value = "2";
            switch(trClick.childNodes[3].innerHTML)
            {
                case "Si":
                document.getElementById("cuatroXcuatro").value = "1";
                break;
                case "No":
                document.getElementById("cuatroXcuatro").value = "2";
                break;
            }
            cambioVehiculo();
        }
    }

    export function eliminar()
    {
        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        document.getElementById("precio").value = 1;
        document.getElementById("cantPuertas").value = 3;
        document.getElementById("cuatroXcuatro").value = "1";
        rowGlobal.remove();
    }


    function calcularID():number
    {
        return listaVehiculos.length+1;
    }


    function promedio(){  

       var total:number  = listaVehiculos.reduce(function(total:number,user):number{
         return total=total + user.precio;
      },0);
        
          console.log(total);
          console.log("le setie number por todos lados y no pude hacer que me los sume u.u");
          var promedio= total / listaVehiculos.length;
          document.getElementById("mostrar").value = promedio;  
         
    }

    function filtrarTabla(){
        var marca=document.getElementById("filtrado").value;
        var arrayvehiculos= listaVehiculos.filter(function(item){
            return item.marca = marca ;
          });
       
          var arrayObj = arrayvehiculos.map(function(item){
            return {marca:item.marca,modelo:item.modelo,precio:item.precio};
          });
         
           alert(arrayObj);
    }


}