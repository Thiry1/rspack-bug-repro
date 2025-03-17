module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js/,
                use: "swc-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "sass-loader",
                        options: {
                            api: "modern-compiler",
                            implementation: require("sass-embedded"),
                        }
                    }
                ],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".scss"],
    }
};