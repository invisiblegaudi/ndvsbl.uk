import { MeshLineGeometry } from 'meshline';
const geometry = new MeshLineGeometry()
const length = 3; // the length of the sides of the triangle
const points = []
points.push(0, 0, 0);
points.push(length / 2, Math.sqrt(length ** 2 - (length / 2) ** 2), 0);
points.push(length, 0, 0);
points.push(0, 0, 0);
const xAxisToCentre = (p, i) => i % 3 ? p : p - (length / 2)
geometry.setPoints(points.map(xAxisToCentre));
export default geometry
