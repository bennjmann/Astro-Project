module.exports = {
    plugins: {
        'postcss-preset-env' :
            {
                stage: 0,
                features: {
                    'custom-media-queries': true,
                    }
                },
        autoprefixer: {},
        '@csstools/postcss-global-data':
            {
                files: ["./node_modules/open-props/src/props.media.css"],
            },
        'postcss-custom-media': {},
        cssnano : {},
    },
}
