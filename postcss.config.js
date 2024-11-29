const path = require('path')

module.exports = {
    parser: require('postcss-comment'),
    plugins: {
        'autoprefixer': {},
        'postcss-mixins': {},
        'postcss-each': {},
        'postcss-nested': {},
        'postcss-simple-vars': {
            silent: true
        },
        'postcss-nested-ancestors': {},
        'cssnano': {
            preset: 'default'
        },
        'postcss-preset-env': {},
        'at-rule-packer': {},
        'postcss-custom-properties': {},
        'postcss-custom-media': {},
        'postcss-nth-list': {}
    }
}
