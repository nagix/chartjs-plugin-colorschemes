'use strict';

import Chart from 'chart.js';
import colorschemes from './colorschemes/index';
import colorSchemesPlugin from './plugins/plugin.colorschemes';

Chart.colorschemes = colorschemes;
Chart.plugins.register(colorSchemesPlugin);

export default colorSchemesPlugin;
