import * as THREE from 'three';
import { MeshLineMaterial } from 'meshline';
import geometry from './triangle.js'
const scene = new THREE.Scene();
const color = new THREE.Color(0x808080)
const material = new MeshLineMaterial({lineWidth:0.1, color})
const mesh = new THREE.Mesh(geometry, material)
const raycaster = new THREE.Raycaster()
mesh.raycast = raycaster
scene.add(mesh)
export default scene
