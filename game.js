function getpoints()
{
   if(localsotrage.x){
   localstorage.x=localstorage.x.times(localstorage.x)  
  document.getElementById("pts").innerHTML=localstorage.x
}
else{
   localstorage.x=new D(2)
}
}
function resetpoints()
{
  localstorage.x=new D(2)
}
