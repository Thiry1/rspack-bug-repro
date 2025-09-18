import {defineConfig} from '@rspack/cli';

export default defineConfig({
    entry: "./src/index.ts",
    target: "node",
    output: {
        library: {
            type: "commonjs2",
        }
    },
    resolve: {
        extensions: [".js", ".ts",],
    },
    experiments: {
        inlineConst: true,
    }
});