const postcss = require('postcss');
const postcssCustomMedia = require('postcss-custom-media');
const postcssGlobalData = require('@csstools/postcss-global-data');
const postcssPresetEnv = require("postcss-preset-env")


module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 0,
            features: {
                'custom-media-queries': true,
            }
        }),
        postcssGlobalData({
            files: ["./node_modules/open-props/src/props.media.css"],
        }),
        postcssCustomMedia(),
        require('autoprefixer'),
        require('cssnano'),

    ],
};