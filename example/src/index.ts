import Regl from "regl";

// Importing shaders
import vertShader from "./shaders/triangle.vs.glsl";
import fragShader from "./shaders/triangle.fs.glsl";

const regl = Regl(".app");

const drawTriangle = regl({
  vert: vertShader,
  frag: fragShader,
  attributes: {
    position: [-0.5, -0.5, 0, 0.5, 0.5, -0.5],
  },
  uniforms: {
    color: [0, 0.55, 0.75, 1],
  },
  // vertex count
  count: 3,
});

regl.clear({ color: [0.8, 0.82, 0.74, 1] });
drawTriangle();
