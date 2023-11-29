import { ThreeScene } from './ThreeScene'
import { ThreeCamera } from './ThreeCamera'
import { ThreeControls } from './ThreeControls'
import { ThreeRenderer } from './ThreeRenderer'
import { ThreeGrid } from './ThreeGrid'
import { ThreeLights } from './ThreeLights'
import { MAX_SCALE } from './constants/ThreeConstants'
import type { IThreeHelper } from '../interfaces/IThreeHelper'

export class ThreeHelper implements IThreeHelper {
  private scene: ThreeScene
  private camera: ThreeCamera
  private renderer: ThreeRenderer
  private controls: ThreeControls
  private grid: ThreeGrid
  private scale: number
  private lights: ThreeLights
  
  constructor(private canvas?: HTMLCanvasElement) {
    this.scale = 0.01
    this.scene = new ThreeScene()
    this.camera = new ThreeCamera(window.innerWidth / window.innerHeight)
    this.renderer = new ThreeRenderer(this.canvas)
    this.controls = new ThreeControls(this.camera, this.renderer.domElement)
    this.grid = new ThreeGrid()
    this.lights = new ThreeLights()

    this.controls.enabled = false
    this.setupScrollHandling();

    this.scene.add(this.grid.getGridMesh())
    this.lights.forEach((light) => this.scene.add(light))
    this.setupWindowResize(this.camera, this.renderer)
  }

  // listen to window size changes
  private setupWindowResize( camera: ThreeCamera, renderer: ThreeRenderer): void {
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    })
  }

  private throttle(func: (ev: Event) => any, limit: number): (this: Window, ev: Event) => void {
    let inThrottle: boolean;
    return function(this: Window, ev: Event) {
      if (!inThrottle) {
        func.call(this, ev);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  private setupScrollHandling(): void {
    window.addEventListener('scroll', this.throttle(() => {
      // Handle your scroll-related updates here
      // Maybe adjust camera, lights, or other elements
    }, 100)); // Adjust the 100ms to whatever feels right
  }



  public animate(): void {
    const animateLoop = () => {
      requestAnimationFrame(animateLoop)

      // animate grid expansion
      if (this.scale < MAX_SCALE) {
        this.scale += 0.005
        this.grid.getGridMesh().scale.set(this.scale, this.scale, this.scale)
      }
      this.camera.position.x += 0.1;
      

      this.controls.update()
      this.renderer.render(this.scene, this.camera)
    }
    animateLoop()
  }
}
