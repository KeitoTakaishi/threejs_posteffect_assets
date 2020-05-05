function initGraphics(){
    renderer = new THREE.WebGLRenderer();
            renderer.setSize(800, 600);
            document.body.appendChild(renderer.domElement);

            cam = new THREE.PerspectiveCamera(55, 1080 / 720, 20, 3000);
            cam.position.z = 1000;
            scene = new THREE.Scene();
}

function initStats(){
    let stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    document.getElementById('container').appendChild(stats.domElement);
}