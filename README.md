# chartjs-plugin-colorschemes

[![npm](https://img.shields.io/npm/v/chartjs-plugin-colorschemes.svg?style=flat-square)](https://npmjs.com/package/chartjs-plugin-colorschemes) [![Bower](https://img.shields.io/bower/v/chartjs-plugin-colorschemes.svg?style=flat-square)](https://libraries.io/bower/chartjs-plugin-colorschemes) [![Travis](https://img.shields.io/travis/nagix/chartjs-plugin-colorschemes/master.svg?style=flat-square)](https://travis-ci.org/nagix/chartjs-plugin-colorschemes) [![Code Climate](https://img.shields.io/codeclimate/maintainability/nagix/chartjs-plugin-colorschemes.svg?style=flat-square)](https://codeclimate.com/github/nagix/chartjs-plugin-colorschemes)

*Predefined color schemes for [Chart.js](https://www.chartjs.org)*

You can pick the perfect color combination for your charts from the predefined color schemes, which are based on popular tools such as [ColorBrewer](http://colorbrewer2.org), [Microsoft Office](https://products.office.com) and [Tableau](https://www.tableau.com).

This plugin requires Chart.js 2.5.0 or later.

## Installation

You can download the latest version of chartjs-plugin-colorschemes from the [GitHub releases](https://github.com/nagix/chartjs-plugin-colorschemes/releases/latest).

To install via npm:

```bash
npm install chartjs-plugin-colorschemes --save
```

To install via bower:

```bash
bower install chartjs-plugin-colorschemes --save
```

To use CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-colorschemes@latest/dist/chartjs-plugin-colorschemes.min.js"></script>
```
```html
<script src="https://unpkg.com/chartjs-plugin-colorschemes@latest/dist/chartjs-plugin-colorschemes.min.js"></script>
```

## Usage

chartjs-plugin-colorschemes can be used with ES6 modules, plain JavaScript and module loaders.

Include Chart.js and chartjs-plugin-colorschemes.js to your page, and specify a color scheme as shown in the example below. You can pick a scheme from [Color Chart](https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html).

```js
    options: {
    	plugins: {
            colorschemes: {
                scheme: 'brewer.Paired12'
            }
        }
    }
```

Every color scheme has a number at the end of its name, which indicates the number of that colors included in the scheme. If the number of the datasets is larger than it, the same colors will appear repeatedly. A color is not modified if it is specified by dataset options.

### Usage in ES6 as module

Nothing else than importing the module should be enough.

```js
import 'chartjs-plugin-colorschemes';
```

## Tutorial

You can find a tutorial at [nagix.github.io/chartjs-plugin-colorschemes](https://nagix.github.io/chartjs-plugin-colorschemes).

## Configuration

The plugin options can be changed at 2 different levels and with the following priority:

- per chart: `options.plugins.colorschemes.*`
- globally: `Chart.defaults.global.plugins.colorschemes.*`

All available options are listed below.

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `fillAlpha` | `Number` | `0.5` | The transparency value for the line fill color. Must be a number between `0.0` (fully transparent) and `1.0` (no transparency).
| `scheme` | `String` | `'brewer.Paired12'` | Color scheme name that is any of [Color Chart](https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html).
| `reverse` | `Boolean` | `false` | If set to `true`, the order of the colors in the selected  scheme is reversed.

## Building

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):

```bash
npm install
```

The following commands will then be available from the repository root:

```bash
gulp build      # build dist files
gulp watch      # watch for changes and build automatically
gulp lint       # perform code linting
gulp package    # create an archive with dist files and samples
```

## License

chartjs-plugin-colorschemes is available under the [MIT license](https://opensource.org/licenses/MIT).
