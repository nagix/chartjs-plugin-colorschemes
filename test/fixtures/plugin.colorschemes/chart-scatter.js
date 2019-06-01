export default {
	config: {
		type: 'scatter',
		data: {
			datasets: [{
				data: [
					{x: 0, y: 0},
					{x: 1, y: 5},
					{x: 2, y: 10},
					{x: 3, y: 0},
					{x: 4, y: -10},
					{x: 5, y: -5}
				]
			}, {
				data: [
					{x: 0, y: 10},
					{x: 1, y: 0},
					{x: 2, y: -10},
					{x: 3, y: -5},
					{x: 4, y: 0},
					{x: 5, y: 5}
				]
			}, {
				data: [
					{x: 0, y: -10},
					{x: 1, y: -5},
					{x: 2, y: 0},
					{x: 3, y: 5},
					{x: 4, y: 10},
					{x: 5, y: 0}
				]
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
					scheme: 'brewer.Accent3'
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
