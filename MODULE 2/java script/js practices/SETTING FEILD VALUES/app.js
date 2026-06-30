


function Cityfill(){
   var cityname;
  var enterzip = document.getElementById("zip").value;
    
    if(enterzip === "75260"){
        cityname = "Pakistan"
    }else{
        cityname = "not valid"
        
    }


  document.getElementById("city").value = cityname;

  
}
