export default {
	config: {
		type: 'polarArea',
		data: {
			labels: [0, 1, 2, 3, 4, 5],
			datasets: [{
				data: [0, 5, 10, 0, -10, -5]
			}]
		},
		options: {
			scale: {
				display: false
			},
			plugins: {
				legend: false,
				title: false,
				colorschemes: {
					scheme: 'brewer.Accent6'
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
