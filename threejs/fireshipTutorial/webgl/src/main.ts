import "./style.css";

import * as THREE from "three";
//@ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

// args: FOV, screen ratio, and the other two arguments tell hwo mcuh screen it will see somehow
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg") as Element, // element to render on
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30); //by default camera is positioned at 0 so we move it up on the z axis

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshBasicMaterial({
//   color: 0xFF6347,
//   wireframe: true
// }); wrapping paper for geometry
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material); //combining them both

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 20);

const ambientLight = new THREE.AmbientLight(0x999999);

const pointLightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
// scene.background = spaceTexture

scene.add(torus);
scene.add(pointLight);
scene.add(pointLightHelper);
scene.add(gridHelper);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const starGeometry = new THREE.SphereGeometry(0.25, 24, 24); //args: radius, ?, ?
  const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(starGeometry, starMaterial);

  const [x, y, z] = Array(3)
    .fill(true)
    .map(() => THREE.MathUtils.randFloatSpread(100)); //generate random numberes between 100 to -100

  star.position.set(x, y, z);

  scene.add(star);
}

for (let x = 0; x <= 200; x++) {
  addStar();
}

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate();
