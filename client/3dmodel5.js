// var container;
// var camera, scene, renderer, controls;
// var mouseX = 0, mouseY = 0;
// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;
// init();
// animate();

// var abc = 1 ;

// function init() {
// 	container = document.getElementById('3dContainer');

//  	camera = new THREE.OrthographicCamera(
//     (window.innerWidth / -2),   // Left
//     (window.innerWidth / 2),    // Right
//     (window.innerHeight / 2),   // Top
//     (window.innerHeight / -2),  // Bottom
//     -2000,            // Near clipping plane
//     1000 );           // Far clipping plane


//  	camera.position.y = 100;

//  	camera.position.x=-152;
//  	camera.position.z=141;

//  	camera.zoom = 1.5;
// 	camera.updateProjectionMatrix();

// 	// scene
// 	scene = new THREE.Scene();
// 	var ambient = new THREE.AmbientLight( 0x101030 );
// 	scene.add( ambient );
// 	var directionalLight = new THREE.DirectionalLight( 0xffffff );
// 	directionalLight.position.set( 1, 1, 1 );
// 	scene.add( directionalLight );


// 	var extraLight = new THREE.DirectionalLight( 0xffffff );
// 	extraLight.position.set( -1, -1, -1 );
// 	scene.add( extraLight );

// 	scene.add(camera);


// 	// texture
// 	var manager = new THREE.LoadingManager();
// 	manager.onProgress = function ( item, loaded, total ) {
// 		console.log( item, loaded, total );
// 	};
// 	var texture = new THREE.Texture();
// 	var onProgress = function ( xhr ) {
// 		if ( xhr.lengthComputable ) {
// 			var percentComplete = xhr.loaded / xhr.total * 100;
// 			console.log( Math.round(percentComplete, 2) + '% downloaded' );
// 		}
// 	};
// 	var onError = function ( xhr ) {
// 	};

// 	var mtlLoader = new THREE.MTLLoader();
// 	mtlLoader.setPath('assets/');
// 	mtlLoader.load('car2.mtl', function(materials) {
// 	  materials.preload();
// 	  var objLoader = new THREE.OBJLoader();
// 	  objLoader.setMaterials(materials);
// 	  objLoader.setPath('assets/');
// 	  objLoader.load('car2.obj', function(object) {
// 	    object.position.x = 0;
// 	    object.position.y = 0;
// 	    object.position.z = 0;
// 	    scene.add(object);
// 	  }, onProgress, onError);
// 	});


// 	renderer = new THREE.WebGLRenderer({ alpha: true });
// 	renderer.setPixelRatio( window.devicePixelRatio );
// 	// renderer.setClearColor( 0xffffff, 0 );
// 	renderer.setSize( window.innerWidth, window.innerHeight );


// 	container.appendChild( renderer.domElement );



// 	controls = new THREE.OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true;

// 	window.addEventListener('resize', onWindowResize, false);

// }
// function onWindowResize() {
// 	windowHalfX = window.innerWidth / 2;
// 	windowHalfY = window.innerHeight / 2;
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// }

// var tempX =0, tempY =0, tempZ =0;

//  function animate() {

//  	var x = Math.floor(camera.position.x);
// 	var y = Math.floor(camera.position.y);
// 	var z = Math.floor(camera.position.z);

// 	if(tempX != x || tempY != y || tempZ != z){
// 		console.log("camera.position.x="+camera.position.x+"; camera.position.y="+camera.position.y+"; camera.position.z="+camera.position.z+";");
// 		tempX = x ;
// 		tempY = y ;
// 		tempZ = z ;
// 	}

// 	if(isMovingRight){
// 		moveCameraRight();
// 		isMovingRight = false ;
// 	}else if(isMovingLeft){
// 		moveCameraLeft();
// 		isMovingLeft = false ;
// 	}

// 	if(isMovingUp){
// 		if(camera.position.y < 160){
// 			camera.position.y += 20;
// 		}
// 		isMovingUp = false ;
// 	}else if(isMovingDown){
// 		if(camera.position.y > 20){
// 			camera.position.y -= 20;
// 		}
		
// 		isMovingDown = false ;
// 	}
	

//     requestAnimationFrame(animate);

//     controls.update();



//     render();

// }

// function moveCameraRight(){
// 	camera.position.x = Math.floor(Math.cos( abc ) * 200);
// 	camera.position.z = Math.floor(Math.sin( abc ) * 200);

// 	abc += 100 ;
// }

// function moveCameraLeft(){
// 	camera.position.x = Math.floor(Math.sin( abc ) * 200);
// 	camera.position.z = Math.floor(Math.cos( abc ) * 200);

// 	abc += 100;
// }
// function render() {
	
//   camera.lookAt( scene.position ); 
//   renderer.render(scene, camera);

// }

