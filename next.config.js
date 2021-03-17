const path = require('path');

module.exports = (phase, { defaultConfig }) => {
    const pageExtensions = ['page.tsx'];

    return {
        pageExtensions,
        webpack: (config) => {
            config.resolve.alias['@Styles'] = path.resolve(__dirname, 'styles');
            config.resolve.alias['@Utils'] = path.resolve(__dirname, 'src/utils');
            config.resolve.alias['@Pages'] = path.resolve(__dirname, 'src/pages');
            config.resolve.alias['@Config'] = path.resolve(__dirname, 'src/config');
            config.resolve.alias['@Components'] = path.resolve(__dirname, 'src/components');

            return config;
        },
    };
};
