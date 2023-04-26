# Tamagui Vite Error Reproduction Example

To run this repo just:

1. Clone the repo.
2. Install dependencies (`pnpm i`).
3. And run `pnpm dev`.

## Recreate this example manually

1. Create a vite app (`pnpm create vite`).
2. Install dependencies (`pnpm i`).
3. [Follow the installation instructions](https://tamagui.dev/docs/intro/installation).
4. [Install the vite plugin](https://tamagui.dev/docs/guides/vite).

Thats it! You'll get the following error message:

```
failed to load config from /.../tamagui-vite-error/vite.config.ts
error when starting dev server:
file:///.../tamagui-vite-error/vite.config.ts.timestamp-1682535145073-40314530980dd.mjs:3
import { tamaguiPlugin } from "file:///.../tamagui-vite-error/node_modules/.pnpm/@tamagui+vite-plugin@1.16.5_@babel+core@7.21.4_react-dom@18.2.0_react-native-web@0.19.4_react@18.2.0/node_modules/@tamagui/vite-plugin/dist/esm/index.mjs";
         ^^^^^^^^^^^^^
SyntaxError: The requested module 'file:///.../tamagui-vite-error/node_modules/.pnpm/@tamagui+vite-plugin@1.16.5_@babel+core@7.21.4_react-dom@18.2.0_react-native-web@0.19.4_react@18.2.0/node_modules/@tamagui/vite-plugin/dist/esm/index.mjs' does not provide an export named 'tamaguiPlugin'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:190:5)
 ELIFECYCLE  Command failed with exit code 1.
```

To be fair, the docs don't explain how to setup a web app with the `tamagui` package properly. I want to create a PR to the docs to include a page that explains this in a easy way, but the vite plugin error is stopping me to do that.
