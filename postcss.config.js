module.exports = {
    parser: require('postcss-comment'),
    plugins: {
        'autoprefixer': {},
        'postcss-import': {},
        'postcss-simple-vars': {},
        'postcss-mixins': {},
        'postcss-each': {},
        'postcss-nested': {},
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
