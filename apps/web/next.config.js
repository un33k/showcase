const fs = require('fs-extra');
const CopyPlugin = require('copy-webpack-plugin');
// const EventHooksPlugin = require('event-hooks-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['preline', 'lodash-es'],
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/preline/dist/preline.js',
            to: 'public/assets/scripts/preline.js',
          },
        ],
      })
      // new EventHooksPlugin({
      //   afterCompile: () => {
      //     fs.copy(
      //       'node_modules/preline/dist/preline.js',
      //       '.next/public/assets/scripts/preline.js',
      //       (err) => {
      //         if (err) {
      //           return console.error(err);
      //         }
      //       }
      //     );
      //   },
      // })
    );
    return config;
  },
};

module.exports = nextConfig;
