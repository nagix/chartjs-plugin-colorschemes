'use strict';

import Chart from 'chart.js';
import colorschemes from '../colorschemes/index';

var helpers = Chart.helpers;

Chart.defaults.global.plugins.colorschemes = {
	scheme: 'brewer.Paired12',
	fillAlpha: 0.5
};

export default {
	id: 'colorschemes',

	beforeUpdate: function(chart, options) {
		var s = options.scheme.split('.');
		var category = colorschemes[s[0]];
		var scheme, color;

		if (category) {
			scheme = category[s[1]];
			if (scheme) {
				// Set scheme colors
				chart.config.data.datasets.forEach(function(dataset, datasetIndex) {
					color = scheme[datasetIndex % scheme.length];

					// Object to store which color option is set
					dataset.colorschemes = {};

					switch (dataset.type || chart.config.type) {
					// For line, radar and scatter chart, borderColor and backgroundColor (50% transparent) are set
					case 'line':
					case 'radar':
					case 'scatter':
						if (typeof dataset.backgroundColor === 'undefined') {
							dataset.backgroundColor = helpers.color(color).alpha(options.fillAlpha).rgbString();
							dataset.colorschemes.backgroundColor = true;
						}
						if (typeof dataset.borderColor === 'undefined') {
							dataset.borderColor = color;
							dataset.colorschemes.borderColor = true;
						}
						if (typeof dataset.pointBackgroundColor === 'undefined') {
							dataset.pointBackgroundColor = helpers.color(color).alpha(options.fillAlpha).rgbString();
							dataset.colorschemes.pointBackgroundColor = true;
						}
						if (typeof dataset.pointBorderColor === 'undefined') {
							dataset.pointBorderColor = color;
							dataset.colorschemes.pointBorderColor = true;
						}
						break;
					// For doughnut and pie chart, backgroundColor is set to an array of colors
					case 'doughnut':
					case 'pie':
						if (typeof dataset.backgroundColor === 'undefined') {
							dataset.backgroundColor = dataset.data.map(function(data, dataIndex) {
								return scheme[dataIndex % scheme.length];
							});
							dataset.colorschemes.backgroundColor = true;
						}
						break;
					// For the other chart, only backgroundColor is set
					default:
						if (typeof dataset.backgroundColor === 'undefined') {
							dataset.backgroundColor = color;
							dataset.colorschemes.backgroundColor = true;
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
			if (dataset.colorschemes) {
				if (dataset.colorschemes.backgroundColor) {
					delete dataset.backgroundColor;
				}
				if (dataset.colorschemes.borderColor) {
					delete dataset.borderColor;
				}
				if (dataset.colorschemes.pointBackgroundColor) {
					delete dataset.pointBackgroundColor;
				}
				if (dataset.colorschemes.pointBorderColor) {
					delete dataset.pointBorderColor;
				}
				delete dataset.colorschemes;
			}
		});
	}
};
