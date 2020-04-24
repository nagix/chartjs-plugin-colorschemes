// https://github.com/nagix/chartjs-plugin-colorschemes/issues/12
export default {
	config: {
		type: 'bar',
		data: {
			labels: [0, 1, 2, 3, 4, 5],
			datasets: [{
				data: [0, 5, 10, 0, -10, -5]
			}, {
				data: [10, 0, -10, -5, 0, 5]
			}, {
				data: [-10, -5, 0, 5, 10, 0]
			}]
		},
		options: {
			legend: false,
			title: false,
			layout: {
				padding: 4
			},
			scales: {
				xAxes: [{display: false}],
				yAxes: [{display: false}]
			},
			plugins: {
				colorschemes: {
					scheme: 'brewer.Accent3',
					fillAlpha: 0.2
				}
			}
		}
	},
	options: {
		canvas: {
			height: 256,
			width: 512
		}
	}
};
