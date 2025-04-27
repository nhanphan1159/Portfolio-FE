export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  video?: string;
  img?:string
  stack: Array<string>;
  preview?: string;
  front?: string;
  back?: string;
}
