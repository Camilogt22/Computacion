//1. creacion de la escena
const scene = new THREE.Scene();
//2. configuracion de camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//3. iniciar render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//4. creacion del triangulo

const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array
([
    -1.0,-1.0,0,
     1.0,-1.0,0,
     0.0, 1.0,0,
]);
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

//5.color material

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide});

//6. malla(mesh)

const triangulo = new THREE.Mesh(geometry,material);

//7. Agregar escena 

scene.add(triangulo);

//8. funcion de animar(opcional)

function animate ()
{
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}

animate();