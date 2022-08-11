import { testCompiler } from "../test/compiler";
import * as fs from "fs";
import * as path from "path";

const shader = (extension: string) =>
  path.resolve(__dirname, `../test/exampleShader${extension}`);
const shaderContents = (extension: string) =>
  JSON.stringify(fs.readFileSync(shader(extension)).toString());

describe("Test extensions", () => {
  test.each([".glsl", ".vs", ".fs"])("extension %s", async (extension) => {
    const { stats, bundleJs } = await testCompiler(shader(extension));
    const data = stats.toJson({ source: true });

    console.log(bundleJs, stats.toJson());

    expect(data.errors).toEqual([]);
    expect(data.modules).toBeDefined();

    // Just to satisfy typescript.
    if (data.modules === undefined) return;

    expect(data.modules[0].source).toBe(
      `export default ${shaderContents(extension)}`
    );
  });
});
