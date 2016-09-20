// var container;
// var camera, scene, renderer, controls;
// var mouseX = 0, mouseY = 0;
// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;
// init();
// animate();
// function init() {
// 	container = document.getElementById('3dContainer');

// 	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 20000);
//     camera.position.z = 2800;
//     camera.position.y = 1000;
//     camera.position.x = 2800 ;

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
// 	loader.load( 'assets/dna_texture_1.jpg', function ( image ) {
// 		texture.image = image;
// 		texture.needsUpdate = true;
// 	} );
// 	// model
// 	var loader = new THREE.OBJLoader( manager );
// 	loader.load( 'assets/dna.obj', function ( object ) {
// 		object.traverse( function ( child ) {
// 			if ( child instanceof THREE.Mesh ) {
// 				child.material.map = texture;
// 				// child.scale.set(1,1,1);
// 				// child.scale.set(30,30,30);
// 				child.scale.set(25,25,25);

// 			}
// 		} );
// 		// object.position.y = -95;
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
// }
// function onWindowResize() {
// 	windowHalfX = window.innerWidth / 2;
// 	windowHalfY = window.innerHeight / 2;
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// }

//  function animate() {
//     requestAnimationFrame(animate);

//     controls.update();

//     render();

// }

// function render() {

//     renderer.render(scene, camera);

// }