const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('core', resolve('src/modules/core'))
            .set('info', resolve('src/modules/info'))
            .set('menu', resolve('src/modules/menu'))
            .set('feedback', resolve('src/modules/feedback'))
            .set('shared', resolve('src/modules/shared'))
            .set('wishlist', resolve('src/modules/wishlist'))
    },
    transpileDependencies: [
        'vuetify',
    ],
}
