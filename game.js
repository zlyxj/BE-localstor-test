function getpoints()
{
   if(localStorage.x){
   localStorage.x=new D(localStorage.x).times(new D(localStorage.x))
   localStorage.x=new D.fromComponents((new D(localStorage.x)).sign,(new D(localStorage.x)).layer,Math.round(new D(localStorage.x).mag*1000)/1000)
  document.getElementById("pts").innerHTML=localStorage.x
}
else{
   localStorage.x=new D("2")
}
}
function resetpoints()
{
  localStorage.x=new D("2")
}
