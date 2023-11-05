import * as t from "three";
import "./style.css";
import { randFloat } from "three/src/math/MathUtils.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function render(
    scene: t.Scene,
    camera: t.Camera,
    beforeRender: CallableFunction,
) {
    const canvas = document.querySelector(".scene");
    if (canvas === null) {
        console.error(
            "Error: There should be a canvas, with the class of scene in your html",
        );
        return;
    }
    const controls = new OrbitControls(camera, canvas as HTMLElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = true;
    const renderer = new t.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    animate(renderer, scene, camera, beforeRender, controls);
}

function animate(
    renderer: t.WebGLRenderer,
    scene: t.Scene,
    camera: t.Camera,
    beforeRender: CallableFunction,
    controls: OrbitControls,
) {
    controls.update();
    requestAnimationFrame(function () {
        animate(renderer, scene, camera, beforeRender, controls);
    });
    beforeRender();
    renderer.render(scene, camera);
}

const scene = new t.Scene();

const camera = new t.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);

camera.position.set(0, 0, 50);

const numLights = 20;
const lights = Array(numLights)
    .fill(true)
    .map(
        () =>
            new t.PointLight(
                new t.Color(randFloat(0, 1), randFloat(0, 1), randFloat(0, 1)),
                70,
            ),
    );
lights.forEach((light) =>
    light.position.set(randFloat(0, 20), randFloat(0, 20), 15),
);

const pointLightHelpers = lights.map((light) => new t.PointLightHelper(light));

const ambientLight = new t.AmbientLight(0x222222);

const geometry = new t.SphereGeometry(10, 100, 100);
const material = new t.MeshPhysicalMaterial({
    roughness: 0.2,
    metalness: 0.65,
    reflectivity: 1,
    iridescence: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.7,
});
// const material = new t.MeshStandardMaterial({
//     color: 0xffffff,
// });

const mesh = new t.Mesh(geometry, material);

scene.add(camera);
scene.add(mesh);
lights.forEach((light) => scene.add(light));
// pointLightHelpers.forEach((pointLightHelper) => scene.add(pointLightHelper));
// scene.add(pointLightHelper);
// scene.add(ambientLight);

const increaseX = Array(numLights).fill(1.25);
const increaseY = Array(numLights).fill(0.5);
const increaseZ = Array(numLights).fill(0.2);

render(scene, camera, () => {
    lights.forEach((light, index) => {
        if (light.position.x > 5) {
            increaseX[index] -= 0.04;
        } else if (light.position.x < -5) {
            increaseX[index] += 0.04;
        }

        if (light.position.y > 5) {
            increaseY[index] -= 0.02;
        } else if (light.position.y < -5) {
            increaseY[index] += 0.03;
        }

        if (light.position.z > 5) {
            increaseZ[index] -= 0.02;
        } else if (light.position.z < -5) {
            increaseZ[index] += 0.02;
        }
        light.position.set(
            light.position.x + increaseX[index],
            // 10,
            light.position.y + increaseY[index],
            // 10,
            light.position.z + increaseZ[index],
            // 20,
        );
    });
});
