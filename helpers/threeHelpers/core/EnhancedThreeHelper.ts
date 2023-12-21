import type { IThreeHelper } from '../interfaces/IThreeHelper'

export class EnhancedThreeHelper implements IThreeHelper {
  constructor(private base: IThreeHelper) {}

  public animate(): void {
    this.base.animate()
    // Add additional functionality here
  }
}
