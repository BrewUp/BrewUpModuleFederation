const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'purchases',

  exposes: {
    './Component': './projects/purchases/src/app/app.component.ts',
    './Module': './projects/purchases/src/app/purchases/purchases.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
