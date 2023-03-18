// Get the container element and its dimensions
const container = document.getElementById('canvas-container');
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true});
renderer.setSize(containerWidth, containerHeight);
container.appendChild(renderer.domElement);




// Create the cone (ice cream)
const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
const coneMaterial = new THREE.MeshLambertMaterial({ color: 0xFFCC99 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
scene.add(cone);
cone.rotation.x = Math.PI;

// Create the sphere (scoop)
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xFF6B81 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 1.5, 0);
scene.add(sphere);

// Create the sphere (scoop)
const sphereGeometry2 = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial2 = new THREE.MeshLambertMaterial({ color: 0xFF6B81 });
const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere2.position.set(0, 2.5, 0);
scene.add(sphere2);

// Add lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 5, 5);
scene.add(light);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Added ambient light with a 50% intensity
scene.add(ambientLight);

// Set the camera position
//camera.position.z = 5;
camera.position.set(0, 3, 10);

//change



//Render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}





animate();

