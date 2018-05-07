
var moreBtn = document.getElementById("more_btn");
var moreBtnState = 0;

moreBtn.addEventListener("click", function () {
	if(moreBtnState == 0){
		document.getElementById("description").style.top = "30px";
		document.getElementById("arrow-left").style.left = "10px";
		document.getElementById("arrow-right").style.left = "10px";
		document.getElementById("main-wrapper").style.opacity = "0.05";
		document.getElementById("particles").style.opacity = "0.05";
		moreBtnState = 1;
	}
	else{
		document.getElementById("description").style.top = "calc(100vh - 70px)";
		document.getElementById("arrow-left").style.left = "1px";
		document.getElementById("arrow-right").style.left = "19px";
		document.getElementById("main-wrapper").style.opacity = "1";
		document.getElementById("particles").style.opacity = ".7";
		moreBtnState = 0;
	}

});

var beginBtn = document.getElementById("begin_btn");

beginBtn.addEventListener("mouseover", function() {
	buttonSound.play();
});

beginBtn.addEventListener("click", function() {
	document.getElementById("site-wrapper").style.opacity = "0";

	fadeOut(landingSound);

	setTimeout(function(){
		window.location = "generate.html";
	}, 1400)
});

var status = 'pause';

var landingSound = new Audio('/audio/landing.mp3');
var buttonSound =  new Audio('/audio/begin.mp3'); 
landingSound.play();
landingSound.loop = true;
status = 'play';

function fadeOut(p_audio){
    if(status != 'play') return false;

    var actualVolume = p_audio.volume;
    var fadeOutInterval = setInterval(function(){
        actualVolume = (parseFloat(actualVolume) - 0.1).toFixed(1);
        if(actualVolume >= 0){
            p_audio.volume = actualVolume;
        } else {
            p_audio.pause();
            status = 'pause';
            clearInterval(fadeOutInterval);
        }
    }, 100);
}


//ThreeJs Particle Sphere

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x111111 );

let container = document.getElementById('particles'),
    loader = new THREE.TextureLoader(),
    renderer,
    camera,
    elapsed = 0,
    maxParticles = 7500,
    particlesDelay = .7,
    radius = 50,
    sphereGeometry,
    sphere;

function init() {
    let vw = window.innerWidth,
        vh = window.innerHeight;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(vw, vh);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera = new THREE.PerspectiveCamera(45, vw / vh, 1, 300);
    camera.position.z = 220;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.lookAt(scene.position);
    scene.add(camera);
    // let controls = new THREE.OrbitControls(camera, renderer.domElement);
    // let axisHelper = new THREE.AxisHelper(50);
    // scene.add(axisHelper);
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onResize, true);
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function draw() {
    sphereGeometry = new THREE.Geometry();
	loader.crossOrigin = true;
    let particleTexture = loader.load('images/dotTexture.png'),
        material = new THREE.PointsMaterial({
            color: 0x0099ff,
            size: 1.2,
            transparent: true,
            blending: THREE.AdditiveBlending,
            map: particleTexture,
            depthWrite: false
        });
        for ( let i = 0; i < maxParticles; i++ ) {
            let xPos = i % 2 === 0 ? radius : -radius,
            vertex = new THREE.Vector3(xPos, 0, 0);
            vertex.rotationAxis = new THREE.Vector3(0, Math.random() * 2 - 1, Math.random() * 2 - 1);
            vertex.rotationAxis.normalize();
            vertex.delay = particlesDelay * i;
            sphereGeometry.vertices.push(vertex);
        }
		//sphereGeometry.translate(0, 0, -50);
        sphere = new THREE.Points(sphereGeometry, material);
        scene.add(sphere);
}

function update() {
    for ( let i = 0; i < maxParticles; i++ ) {
        let particle = sphereGeometry.vertices[i];
        if ( elapsed > particle.delay )
          if ( i < maxParticles / 10 ) {
            particle.applyAxisAngle(particle.rotationAxis, 0.006); //0.003 //0.008);
          } else {
            particle.applyAxisAngle(particle.rotationAxis, 0.003); //0.003 //0.008);
          }
    }
    sphere.geometry.verticesNeedUpdate = true;
}

function render() {
    elapsed += 1;
    update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();
draw();
render();
