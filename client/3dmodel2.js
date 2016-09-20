// var container;
// var camera, scene, renderer, controls;
// var mouseX = 0, mouseY = 0;
// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;
// init();
// animate();
// function init() {
// 	// container = document.createElement( 'div' );
// 	container = document.getElementById('3dContainer');
// 	// document.body.appendChild( container );
// 	// camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
// 	// camera.position.z = 250;

// 	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
//     camera.position.z = 250;

// 	// scene
// 	scene = new THREE.Scene();
// 	var ambient = new THREE.AmbientLight( 0x101030 );
// 	scene.add( ambient );
// 	var directionalLight = new THREE.DirectionalLight( 0xffeedd );
// 	directionalLight.position.set( 1, 1, 1 );
// 	scene.add( directionalLight );


// 	var extraLight = new THREE.DirectionalLight( 0xffeedd );
// 	extraLight.position.set( -1, -1, -1 );
// 	scene.add( extraLight );


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
// 	var loader = new THREE.ImageLoader( manager );
// 	loader.load( 'assets/heart-texture-3.jpg', function ( image ) {
// 		texture.image = image;
// 		texture.needsUpdate = true;
// 	} );
// 	// model
// 	var loader = new THREE.OBJLoader( manager );
// 	loader.load( 'assets/heart.obj', function ( object ) {
// 		object.traverse( function ( child ) {
// 			if ( child instanceof THREE.Mesh ) {
// 				child.material.map = texture;
// 				child.scale.set(15,15,15);
// 				// child.scale.set(100,100,100);
// 			}
// 		} );
// 		object.position.y = -95;
// 		scene.add( object );
// 	}, onProgress, onError );
// 	//
// 	renderer = new THREE.WebGLRenderer({ alpha: true });
// 	renderer.setPixelRatio( window.devicePixelRatio );
// 	renderer.setClearColor( 0xffffff, 0 );
// 	renderer.setSize( window.innerWidth, window.innerHeight );


// 	container.appendChild( renderer.domElement );



// 	controls = new THREE.OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true;

// 	window.addEventListener('resize', onWindowResize, false);
//     // window.addEventListener('keydown', onKeyboardEvent, false);


// 	// document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	
// 	// window.addEventListener( 'resize', onWindowResize, false );
// }
// function onWindowResize() {
// 	windowHalfX = window.innerWidth / 2;
// 	windowHalfY = window.innerHeight / 2;
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// }
// // function onDocumentMouseMove( event ) {
// // 	mouseX = ( event.clientX - windowHalfX ) / 2;
// // 	console.log("---clientX----"+event.clientX+"===windowHalfX=="+windowHalfX);
// // 	mouseY = ( event.clientY - windowHalfY ) / 2;
// // 	console.log("---clientY----"+event.clientY+"===windowHalfY=="+windowHalfY);
// // }

//  function animate() {
//     requestAnimationFrame(animate);

//     controls.update();

//     render();

// }

// function render() {

//     renderer.render(scene, camera);

// }



// // function animate() {
// // 	requestAnimationFrame( animate );
// // 	render();
// // }
// // function render() {

// // 	camera.position.x += ( mouseX - camera.position.x ) ;
// // 	console.log("====camera.position.x==="+camera.position.x);
// // 	camera.position.y += ( mouseY - camera.position.y );
// // 	console.log("====camera.position.y==="+camera.position.y);

// // 	camera.position.z = 50 ;

// // 	camera.lookAt( scene.position );
// // 	renderer.render( scene, camera );
// // }