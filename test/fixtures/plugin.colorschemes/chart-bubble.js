export default {
	config: {
		type: 'bubble',
		data: {
			datasets: [{
				data: [
					{x: 0, y: 0, r: 30},
					{x: 1, y: 5, r: 20},
					{x: 2, y: 10, r: 20},
					{x: 3, y: 0, r: 10},
					{x: 4, y: -10, r: 10},
					{x: 5, y: -5, r: 30}
				]
			}, {
				data: [
					{x: 0, y: 10, r: 10},
					{x: 1, y: 0, r: 30},
					{x: 2, y: -10, r: 30},
					{x: 3, y: -5, r: 20},
					{x: 4, y: 0, r: 20},
					{x: 5, y: 5, r: 10}
				]
			}, {
				data: [
					{x: 0, y: -10, r: 20},
					{x: 1, y: -5, r: 10},
					{x: 2, y: 0, r: 10},
					{x: 3, y: 5, r: 30},
					{x: 4, y: 10, r: 30},
					{x: 5, y: 0, r: 20}
				]
			}]
		},
		options: {
			legend: false,
			title: false,
			layout: {
				padding: 30
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
