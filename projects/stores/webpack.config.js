const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'stores',

  exposes: {
    './Component': './projects/stores/src/app/app.component.ts',
    './Module': './projects/stores/src/app/stores/stores.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});