/// <reference types="vite/client" />
declare module "*.module.css";
declare module "*.gif";
declare module "*.jpg";
declare module "*.mp4" {
  const src: string;
  export default src;
}
