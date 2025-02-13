import {defineConfig} from "@rspack/cli";
import * as rspack from "@rspack/core";
import * as path from "node:path";

export default defineConfig({
    mode: "development",
    entry: path.resolve(import.meta.dirname, "src/entry.js"),
    cache: true,
    experiments: {
        css: false,
        cache: {
            type: "persistent",
            buildDependencies: [
                import.meta.filename,
            ],
        },
    },
    target: "node22",
});
