export {}

declare global {
  namespace Express {
    export interface Request {
      fileData: IFile
      filesData: IFile[]
    }
  }
}
