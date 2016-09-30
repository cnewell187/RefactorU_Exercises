function fallDown(){
    var posFall = 0;

}


function launchRocket(){
    var rocket = document.createElement('img');
    rocket.src = "http://thumb7.shutterstock.com/photos/thumb_large/773638/166888049.jpg";

    rocket.classList.add("rocketship")

    rocket.style.height = "50px";
    rocket.style.width = "50px";

  var launchPad = document.getElementById("launchPad");
    document.body.insertBefore(rocket, launchPad);

    var id = setInterval(shoot, .01);
    var pos = 0;
    //var rand = Math.random()*5-2.5;
    var initialVelocityX = Math.random()*4-2;
    var initialVelocityY = Math.random()*2;
    function shoot(){
        if (pos === 400){
            clearInterval(id);
            rocket.src = "http://clipartix.com/wp-content/uploads/2016/06/Explosion-free-to-use-clip-art.png";
            rocket.style.height = "70px";
            rocket.style.width = "70px";
            fallDown();
        }
        else{
            pos+= 1;
            rocket.style.bottom = pos*initialVelocityY + 50 + "px";
            rocket.style.left = 50 + pos*initialVelocityX + "px";


        }
}

}

// function setRocketPosition(){
//     var rocket = document.getElementsByClassName("rocketship");
//     var id = setInterval(shoot, 10);
//     var pos = 20;
//     function shoot(){
//         if (pos === 300){
//             clearInterval(id);
//         }
//         else{
//             pos++;
//             rocket.style.bottom = pos + 'px';
//         }
//     }
//
// }

/*function render(){
    setRocketPosition();
    setParticlePosition();
    requestAnimationFrame(render);
}

*/
