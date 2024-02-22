import * as THREE from "three";

// once everything is loaded, we run our Three.js stuff.
export default function Particles(theme) {
  // create a scene, that will hold all our elements such as objects, cameras and lights.

  const scene = new THREE.Scene();
  let material;

  // create a camera, which defines where we're looking at.
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  // create a render and set the size
  const webGLRenderer = new THREE.WebGLRenderer();

  const bgColor = theme ? 0xffffff : 0x00000;
  webGLRenderer.setClearColor(new THREE.Color(bgColor)); // White bg color

  webGLRenderer.setSize(window.innerWidth, window.innerHeight);

  webGLRenderer.shadowMap.enabled = true;

  // position and point the camera to the center of the scene
  camera.position.x = 50;
  camera.position.y = 40;
  camera.position.z = 50;
  camera.lookAt(new THREE.Vector3(10, 0, 0));

  // add the output of the renderer to the html element
  const $ = (div) => document.getElementById(div);
  const container = $("WebGL-output");
  if (container.firstChild) container.removeChild(container.firstChild);
  container.append(webGLRenderer.domElement);

  // call the render function
  let step = 0,
    knot;

  // setup the control gui
  const controls = new (function () {
    // we need the first child, since it's a multimaterial
    this.radius = 50;
    this.tube = 30;
    this.radialSegments = 1000;
    this.tubularSegments = 12;
    this.p = 15;
    this.q = 41;
    this.heightScale = 1;
    this.asParticles = true;
    this.rotate = true;

    this.redraw = function () {
      // remove the old plane
      if (knot) scene.remove(knot);
      // create a new one
      const geom = new THREE.TorusKnotGeometry(
        controls.radius,
        controls.tube,
        Math.round(controls.radialSegments),
        Math.round(controls.tubularSegments),
        Math.round(controls.p),
        Math.round(controls.q),
        controls.heightScale
      );

      if (controls.asParticles) {
        knot = createParticleSystem(geom);
      } else {
        knot = createMesh(geom);
      }

      // add it to the scene.
      scene.add(knot);
    };
  })();

  controls.redraw();

  render();

  // from THREE.js examples
  function generateSprite() {
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;

    const context = canvas.getContext("2d");

    const gradient = context.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );
    // gradient.addColorStop(0, "rgba(255,255,255,1)");
    // gradient.addColorStop(0.2, "rgba(0,255,255,1)");
    // gradient.addColorStop(0.4, "rgba(0,0,64,1)");
    // gradient.addColorStop(1, "rgba(0,0,0,0)");

    const rgb = () => Math.floor(Math.random() * 255);

    gradient.addColorStop(0, `rgba(${rgb()}, ${rgb()}, ${rgb()},1)`);
    gradient.addColorStop(0.5, `rgba(${rgb()}, ${rgb()}, ${rgb()},0)`);
    gradient.addColorStop(0.5, `rgba(${rgb()}, ${rgb()}, ${rgb()},0)`);
    gradient.addColorStop(1, `rgba(${rgb()}, ${rgb()}, ${rgb()},0)`);

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  function createParticleSystem(geom) {
    material = new THREE.PointsMaterial({
      size: 2,
      transparent: true,
      // blending: THREE.AdditiveBlending,
      blending: THREE.NormalBlending,

      map: generateSprite(),
      alphaTest: 0.5 // Adjust this value
    });

    const system = new THREE.Points(geom, material);
    system.sortParticles = true;
    return system;
  }

  function createMesh(geom) {
    // assign two materials
    const meshMaterial = new THREE.MeshNormalMaterial({});
    meshMaterial.side = THREE.DoubleSide;

    // meshMaterial.transparent = true;

    // create a multimaterial
    const mesh = new THREE.Mesh(geom, meshMaterial); // Changed from createMultiMaterialObject to Mesh

    return mesh;
  }

  function render() {
    if (controls.rotate) {
      knot.rotation.y = step += 0.0005;
    }
    // render using requestAnimationFrame
    requestAnimationFrame(render);
    webGLRenderer.render(scene, camera);
  }

  function onWindowResize() {
    // Update camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer size
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
  }

  // Add event listener for window resize
  window.addEventListener("resize", onWindowResize, false);
}
