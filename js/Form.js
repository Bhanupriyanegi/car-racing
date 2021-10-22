class Form{
constructor(){

}
display(){
  var title=createElement("h2")
  title.html("Car Racing Game")  
  title.position(500,0)
  var input=createInput("Name")
  input.position(380,150)
  var button=createButton("PLAY")
  button.position(450,200)
  button.mousePressed(function(){
  input.hide()
  button.hide()
  var name=input.value()
  var Greeting=createElement("h3")
  Greeting.html("Hello "+name)
  Greeting.position(400,250)
  })



}




}