console.log("Inside color-tracker");

// commenting because, video will be captured from index.html localVideo element

// var video = document.querySelector("#myVideo");

// navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
// if (navigator.getUserMedia) {       
//     navigator.getUserMedia({video: true}, handleVideo, videoError);
// }
 
// function handleVideo(stream) {
//     video.src = window.URL.createObjectURL(stream);
// }
 
// function videoError(e) {
//     // do something
// }

// var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
var colors = new tracking.ColorTracker(['yellow']);

var previousX = null ;
var previousY = null ;

var arotaBanner = null ;
var leftAtriumBanner = null ;
var leftVentricleBanner = null ;
var rightAtriumBanner = null ;
var rightVentricleBanner = null ;
var pointer = null ;

var threeDIconSelected = null ;
var heartLoaded = null ;
var glassLoaded = null ;
var carLoaded = null ;

colors.on('track', function(event) {
  if (event.data.length === 0) {
    // No colors were detected in this frame.
  } else {
    event.data.forEach(function(rect) {


      if(previousX && previousY){
          if(pointer){
              pointer.remove();
          }

          pointer = showPointer(rect.x, rect.y);
          

          var currentX = rect.x ;
          var currentY = rect.y ;

          if(is3dModelHeart){


          
                        if(currentX < 590 && currentX > 460 && currentY < 360 && currentY > 250){

                          if(arotaBanner){
                            arotaBanner.remove();
                          }

                          console.log("showing banner currentX    "+currentX+"  currentY    "+currentY);
                          arotaBanner = showBanner("Aorta", currentX+250, currentY);

                        }

                        if(currentX < 700 && currentX > 600 && currentY < 510 && currentY > 410){

                          if(leftAtriumBanner){
                            leftAtriumBanner.remove();
                          }

                          console.log("showing banner currentX    "+currentX+"  currentY    "+currentY);
                          leftAtriumBanner = showBanner("Left atrium", currentX+250, currentY);

                        }

                        if(currentX < 700 && currentX > 600 && currentY < 630 && currentY > 530){

                          if(leftVentricleBanner){
                            leftVentricleBanner.remove();
                          }

                          console.log("showing banner currentX    "+currentX+"  currentY    "+currentY);
                          leftVentricleBanner = showBanner("Left Ventricle", currentX+250, currentY);

                        }

                        if(currentX < 590 && currentX > 490 && currentY < 510 && currentY > 410){

                          if(rightAtriumBanner){
                            rightAtriumBanner.remove();
                          }

                          console.log("showing banner currentX    "+currentX+"  currentY    "+currentY);
                          rightAtriumBanner = showBanner("Right atrium", currentX-250, currentY);

                        }

                        if(currentX < 590 && currentX > 490 && currentY < 650 && currentY > 550){

                          if(rightVentricleBanner){
                            rightVentricleBanner.remove();
                          }

                          console.log("showing banner currentX    "+currentX+"  currentY    "+currentY);
                          rightVentricleBanner = showBanner("Right Ventricle", currentX-250, currentY);

                        }
          }


          // on 3d icon selected
          if(currentX < 80 && currentY < 80){
              if(!threeDIconSelected){
                  console.log("3d icon selected");
                  threeDIconSelected = true ;
                  expand3dBanner();
              }
          }

          if(currentX > 140 && currentX < 240 && currentY < 100){
            if(threeDIconSelected && !heartLoaded){
              console.log("Showing heart");
              heartLoaded = true ;
              glassLoaded = false ;
              carLoaded = false ;
              unloadGlass();
              unloadCar();
              loadHeart();
              compress3dBanner();
              threeDIconSelected = false ;
            }
          }

          if(currentX > 300 && currentX < 400 && currentY < 100){
            if(threeDIconSelected && !glassLoaded){
              console.log("Showing glass");
              heartLoaded = false ;
              glassLoaded = true ;
              carLoaded = false ;
              unloadHeart();
              unloadCar();
              loadGlass();

              compress3dBanner();
              threeDIconSelected = false ;
            }
          }

          if(currentX > 460 && currentX < 560 && currentY < 100){
            if(threeDIconSelected && !carLoaded){
              console.log("Showing glass");
              heartLoaded = false ;
              glassLoaded = false ;
              carLoaded = true ;

              unloadHeart();
              unloadGlass();
              loadCar();

              compress3dBanner();
              threeDIconSelected = false ;
            }
          }
          

          if(currentX > 620 && currentX < 720 && currentY < 100){
            if(threeDIconSelected ){
              console.log("Closing 3d banner");
              heartLoaded = false ;
              glassLoaded = false ;
              carLoaded = false ;

              unloadHeart();
              unloadGlass();
              unloadCar();

              compress3dBanner();
              threeDIconSelected = false ;
            }
          }


          // ////////////
          if(currentY < 780 && currentY > 700){
            if((currentX < previousX) && ((previousX - currentX) > 10)){
              // console.log("Moving right currentX "+currentX+" previousX "+previousX);
              console.log("Moving left ");
              isMovingRight = false ;
              isMovingLeft = true ;

            }else if(currentX > previousX && ((currentX - previousX) > 10)){
                console.log("Moving right ");
                isMovingRight = true ;
                isMovingLeft = false ;
            }
          }

          if(currentY > 100 && currentY < 700 && currentX > 0 && currentX < 50){
              if((currentY < previousY) && (previousY - currentY) > 10){
                console.log("Moving top ");
                isMovingUp = true ;
                isMovingDown = false;

              }else if(currentY > previousY && (currentY - previousY) > 10){
                  console.log("Moving bottom ");
                  isMovingUp = false ;
                isMovingDown = true;
              }
            }
          
      }
      previousX = rect.x ; 
      previousY = rect.y ;
      // console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
    });
  }
});

tracking.track('#localVideo', colors);


function showPointer(x,y){
  // var $pointer = $('<div class="pointer"><label> x: '+x+', y: '+y+'</label></div>').appendTo('body');
  var $pointer = $('<div class="pointer"><label></label></div>').appendTo('body');
  $pointer.attr('style', 'top: '+(y+0)+'px; left: '+(x+160)+'px;');
  $pointer.delay(1000).fadeOut(300);

  return $pointer ;
}


function showBanner(text, x, y){

  if(x < 641){
      var $banner = $('<div id="annotateLeft" class="annotate" style="display:none"><div class="annotateTipLeft"><label>'+text+'</label></div><div class="annotateLineLeft"></div><div class="annotateCircleLeft"></div></div>').appendTo('body');

      $banner.attr('style', 'top: '+y+'px; left: '+x+'px;');
      $banner.delay(2000).fadeOut(300);

      return $banner ;
  }else{
    var $banner = $('<div id="annotateRight" class="annotate" style="display:none"><div class="annotateTipRight"><label>'+text+'</label></div><div class="annotateLineRight"></div><div class="annotateCircleRight"></div></div>').appendTo('body');

      $banner.attr('style', 'top: '+y+'px; left: '+x+'px;');
      $banner.delay(2000).fadeOut(300);

      return $banner ;
  }

}

function expand3dBanner(){
  $('#3dicon').animate({width:760+'px'});
  
  $('#heartImg').show();
  $('#glassImg').show();
  $('#carImg').show();
  $('#closeImg').show();
              
}
function compress3dBanner(){
  $('#heartImg').hide();
  $('#glassImg').hide();
  $('#carImg').hide();
  $('#closeImg').hide();
  $('#3dicon').animate({width:100+'px'});
}

function loadHeart(){
  console.log("loading heart ");
  loadModelHeart();
  is3dModelHeart = true ;
}
function unloadHeart(){
  console.log("Unloading heart");
  unloadModelHeart();
  is3dModelHeart = false;
}

function loadGlass(){
  console.log("loading glass");
  loadModelGlass();

  is3dModelHeart = false;
}
function unloadGlass(){
  console.log("unloading glass");
  unloadModelGlass();

  is3dModelHeart = false;
}
function loadCar(){
  console.log("loading car");
  loadModelCar();

  is3dModelHeart = false;
}
function unloadCar(){
  console.log("unloading car");
  unloadModelCar();

  is3dModelHeart = false;
}

