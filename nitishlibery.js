//ALGORITHM2- IF MY RECT TOUCHES THEN CHANGE THEIR COLORS
function Nitish(object1, object2){

    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object1.width/2 + object2.width/2 &&
      object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object1.height/2 + object2.height/2 ){
        object1.shapeColor= "red";
        object2.shapeColor= "red";
    }
    else{
      object1.shapeColor= "green";
      object2.shapeColor= "green";
    }
  
}

//ALGORITHM2- IF MY RECT TOUCHES THEN THEY SHOULD CHANGE THEIR DIRECTIONS
function whitehat(object1, object2){

    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object1.width/2 + object2.width/2 
       ){
        object1.velocityX= (-1)*object1.velocityX;
        object2.velocityX= (-1)*object2.velocityX;
    }
  
  
}