"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var regl_1 = __importDefault(require("regl"));
var triangle_vs_glsl_1 = __importDefault(require("./shaders/triangle.vs.glsl"));
var triangle_fs_glsl_1 = __importDefault(require("./shaders/triangle.fs.glsl"));
var regl = (0, regl_1.default)(".app");
var drawTriangle = regl({
    vert: triangle_vs_glsl_1.default.default,
    frag: triangle_fs_glsl_1.default.default,
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
