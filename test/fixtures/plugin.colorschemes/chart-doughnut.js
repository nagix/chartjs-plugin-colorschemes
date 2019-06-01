export default {
	config: {
		type: 'doughnut',
		data: {
			labels: [0, 1, 2, 3, 4, 5],
			datasets: [{
				data: [1, 2, 3, 1, 3, 2]
			}, {
				data: [3, 1, 3, 2, 1, 2]
			}, {
				data: [3, 2, 1, 2, 3, 1]
			}]
		},
		options: {
			legend: false,
			title: false,
			plugins: {
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
