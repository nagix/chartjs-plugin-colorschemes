'use strict';

import Chart from 'chart.js';
import colorschemes from '../colorschemes/index';

var helpers = Chart.helpers;

// Element models are always reset when hovering in Chart.js 2.7.2 or earlier
var hoverReset = Chart.DatasetController.prototype.removeHoverStyle.length === 2;

var EXPANDO_KEY = '$colorschemes';

Chart.defaults.global.plugins.colorschemes = {
	scheme: 'brewer.Paired12',
	fillAlpha: 0.5,
	reverse: false,
	override: false
};

export default {
	id: 'colorschemes',

	beforeUpdate: function(chart, options) {
		var s = options.scheme.split('.');
		var category = colorschemes[s[0]];
		var fillAlpha = options.fillAlpha;
		var reverse = options.reverse;
		var override = options.override;
		var scheme, schemeClone, length, colorIndex, color;

		if (category) {
			scheme = category[s[1]];

			if (scheme) {

				// clone the original scheme
				schemeClone = scheme.slice();

				// Execute own custom color function
				var colorFunctionResult = helpers.callback(options.custom, [schemeClone]);

				// check if we really received a filled array; otherwise we keep and use the originally cloned scheme
				if (helpers.isArray(colorFunctionResult) && colorFunctionResult.length > 0) {
					schemeClone = colorFunctionResult;
				}

				length = schemeClone.length;

				// Set scheme colors
				chart.config.data.datasets.forEach(function(dataset, datasetIndex) {
					colorIndex = datasetIndex % length;
					color = schemeClone[reverse ? length - colorIndex - 1 : colorIndex];

					// Object to store which color option is set
					dataset[EXPANDO_KEY] = {};

					switch (dataset.type || chart.config.type) {
					// For line, radar and scatter chart, borderColor and backgroundColor (50% transparent) are set
					case 'line':
					case 'radar':
					case 'scatter':
						if (typeof dataset.backgroundColor === 'undefined' || override) {
							dataset[EXPANDO_KEY].backgroundColor = dataset.backgroundColor;
							dataset.backgroundColor = helpers.color(color).alpha(fillAlpha).rgbString();
						}
						if (typeof dataset.borderColor === 'undefined' || override) {
							dataset[EXPANDO_KEY].borderColor = dataset.borderColor;
							dataset.borderColor = color;
						}
						if (typeof dataset.pointBackgroundColor === 'undefined' || override) {
							dataset[EXPANDO_KEY].pointBackgroundColor = dataset.pointBackgroundColor;
							dataset.pointBackgroundColor = helpers.color(color).alpha(fillAlpha).rgbString();
						}
						if (typeof dataset.pointBorderColor === 'undefined' || override) {
							dataset[EXPANDO_KEY].pointBorderColor = dataset.pointBorderColor;
							dataset.pointBorderColor = color;
						}
						break;
					// For doughnut and pie chart, backgroundColor is set to an array of colors
					case 'doughnut':
					case 'pie':
						if (typeof dataset.backgroundColor === 'undefined' || override) {
							dataset[EXPANDO_KEY].backgroundColor = dataset.backgroundColor;
							dataset.backgroundColor = dataset.data.map(function(data, dataIndex) {
								colorIndex = dataIndex % length;
								return schemeClone[reverse ? length - colorIndex - 1 : colorIndex];
							});
						}
						break;
					// For the other chart, only backgroundColor is set
					default:
						if (typeof dataset.backgroundColor === 'undefined' || override) {
							dataset[EXPANDO_KEY].backgroundColor = dataset.backgroundColor;
							dataset.backgroundColor = color;
						}
						break;
					}
				});
			}
		}
		return true;
	},

	afterUpdate: function(chart) {
		// Unset colors
		chart.config.data.datasets.forEach(function(dataset) {
			if (dataset[EXPANDO_KEY]) {
				if (dataset[EXPANDO_KEY].hasOwnProperty('backgroundColor')) {
					dataset.backgroundColor = dataset[EXPANDO_KEY].backgroundColor;
				}
				if (dataset[EXPANDO_KEY].hasOwnProperty('borderColor')) {
					dataset.borderColor = dataset[EXPANDO_KEY].borderColor;
				}
				if (dataset[EXPANDO_KEY].hasOwnProperty('pointBackgroundColor')) {
					dataset.pointBackgroundColor = dataset[EXPANDO_KEY].pointBackgroundColor;
				}
				if (dataset[EXPANDO_KEY].hasOwnProperty('pointBorderColor')) {
					dataset.pointBorderColor = dataset[EXPANDO_KEY].pointBorderColor;
				}
				delete dataset[EXPANDO_KEY];
			}
		});
	},

	beforeEvent: function(chart, event, options) {
		if (hoverReset) {
			this.beforeUpdate(chart, options);
		}
		return true;
	},

	afterEvent: function(chart) {
		if (hoverReset) {
			this.afterUpdate(chart);
		}
	}
};
