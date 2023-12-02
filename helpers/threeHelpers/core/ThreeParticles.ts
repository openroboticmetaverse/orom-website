import * as THREE from "three"

class ThreeParticles {
  private particleGeometry: THREE.Geometry;
  private particleCloud: THREE.Points;
  private WIDTH: number;
  private HEIGHT: number;
  private SEPARATION: number;

  constructor(width: number, height: number, separation: number) {
    this.WIDTH = width;
    this.HEIGHT = height;
    this.SEPARATION = separation;
    this.particleGeometry = new THREE.Geometry();
    this.createGeometry();

    // Create a sparkling PointsMaterial
    const material = new THREE.PointsMaterial({
      color: 0xffffff, // White color for maximum glam
      size: 1.0, // Adjust the size to your liking
      // Add more properties if you want more razzle-dazzle
    });

    this.particleCloud = new THREE.Points(this.particleGeometry, material);
  }

  private createGeometry(): void {
    for (let ix = 0; ix < this.WIDTH; ix++) {
      for (let iz = 0; iz < this.HEIGHT; iz++) {
        let vert = new THREE.Vector3();
        vert.x = ix * this.SEPARATION - ((this.WIDTH * this.SEPARATION) / 2);
        vert.y = (Math.cos((ix / this.WIDTH) * Math.PI * 6) + Math.sin((iz / this.HEIGHT) * Math.PI * 6));
        vert.z = iz * this.SEPARATION - ((this.HEIGHT * this.SEPARATION) / 2);
        this.particleGeometry.vertices.push(vert);
      }
    }
  }

  public getParticleCloud(): THREE.Points {
    return this.particleCloud;
  }
}

export default ThreeParticles;
