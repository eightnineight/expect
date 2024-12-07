
let config = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
    ],
    plugins: [
        ["@babel/plugin-transform-runtime",
            {
                "regenerator": true
            }
        ]
    ],
}

export default config;
