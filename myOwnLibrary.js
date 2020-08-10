//to create our own library 
//step 1 == Create a new file and save it as my own library.js
//step 2 == write only the function defination in this file 
//step 3 == Include myOwnlibrary.js in the index.HTML file so that the computer knows where to take the defination from
//step 4 == give a call to the function which are inside the library in sketch.js 
//function with arguments are written so that it can work with any 2 game objects 
function bounceOff(obj1,obj2){

if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj1.width/2 + obj2.width/2) {
   obj1.velocityX = obj1.velocityX * (-1);
    obj2.velocityX = obj2.velocityX * (-1);
  }
  if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
   obj1.velocityY = obj1.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
  }

}