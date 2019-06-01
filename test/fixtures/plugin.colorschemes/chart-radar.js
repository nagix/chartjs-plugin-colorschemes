export default {
	config: {
		type: 'radar',
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
			scale: {
				display: false
			},
			plugins: {
				colorschemes: {
					scheme: 'brewer.Accent3'
				}
			}
		}
	},
	options: {
		canvas: {
			height: 512,
			width: 512
		}
	}
};
