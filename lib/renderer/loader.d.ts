export interface RenderData {
  html?: string
  tplFile?: string
  saveId?: string
  viewport?: {
    width: number
    height: number
    deviceScaleFactor?: number
  }
  scale?: number
  type?: "jpeg" | "png" | "webp"
  imgType?: "jpeg" | "png"
  quality?: number
  omitBackground?: boolean
  path?: string
  multiPage?: boolean
  multiPageHeight?: number
  pageGotoParams?: Record<string, unknown>
  [key: string]: unknown
}

export interface ImageRenderer {
  /**
   * 将HTML或模板渲染为图片。
   *
   * @param name 截图任务名称
   * @param data 渲染参数
   * @returns 图片数据，渲染失败时返回false
   */
  render(name: string, data: RenderData): Promise<Buffer | Buffer[] | false>
}

declare const Renderer: {
  /**
   * 获取当前配置的图片渲染器。
   *
   * @param name 渲染器名称
   * @returns 图片渲染器
   */
  getRenderer(name?: string): ImageRenderer
}

export default Renderer
