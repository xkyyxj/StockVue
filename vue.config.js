const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    configureWebpack: {
        // Webpack configuration applied to web builds and the electron renderer process
        module:{
            rules: [
                {
                   test: /\.js$/,
                   loader: 'babel-loader',
                   exclude: [path.resolve('src/wasm')], // 你的wasm文件路径
                //    use: [
                //     'babel-loader'
                //    ],
                //    options: {
                //     presets: ['es2015'],
                //     plugins:['syntax-dynamic-import']
                //   },
                }
             ],
        },
        
        // plugins: [
        //
        //     new WasmPackPlugin({
        //       crateDirectory: path.resolve(__dirname, "src/wasm"),
        //
        //       // Check https://rustwasm.github.io/wasm-pack/book/commands/build.html for
        //       // the available set of arguments.
        //       //
        //       // Optional space delimited arguments to appear before the wasm-pack
        //       // command. Default arguments are `--verbose`.
        //       args: "--log-level warn",
        //       // Default arguments are `--typescript --target browser --mode normal`.
        //       extraArgs: "--no-typescript"
        //       // Optional array of absolute paths to directories, changes to which
        //       // will trigger the build.
        //       // watchDirectories: [
        //       //   path.resolve(__dirname, "another-crate/src")
        //       // ],
        //
        //       // The same as the `--out-dir` option for `wasm-pack`
        //       // outDir: "pkg",
        //
        //       // The same as the `--out-name` option for `wasm-pack`
        //       // outName: "index",
        //
        //       // If defined, `forceWatch` will force activate/deactivate watch mode for
        //       // `.rs` files.
        //       //
        //       // The default (not set) aligns watch mode for `.rs` files to Webpack's
        //       // watch mode.
        //       // forceWatch: true,
        //
        //       // If defined, `forceMode` will force the compilation mode for `wasm-pack`
        //       //
        //       // Possible values are `development` and `production`.
        //       //
        //       // the mode `development` makes `wasm-pack` build in `debug` mode.
        //       // the mode `production` makes `wasm-pack` build in `release` mode.
        //       // forceMode: "development",
        //
        //       // Controls plugin output verbosity, either 'info' or 'error'.
        //       // Defaults to 'info'.
        //       // pluginLogLevel: 'info'
        //     }),
        //
        //   ],
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true
        }
    }
}