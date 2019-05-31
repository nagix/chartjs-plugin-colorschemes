# chartjs-plugin-colorschemes

[![npm](https://img.shields.io/npm/v/chartjs-plugin-colorschemes.svg?style=flat-square)](https://npmjs.com/package/chartjs-plugin-colorschemes) [![Bower](https://img.shields.io/bower/v/chartjs-plugin-colorschemes.svg?style=flat-square)](https://libraries.io/bower/chartjs-plugin-colorschemes) [![Travis](https://img.shields.io/travis/nagix/chartjs-plugin-colorschemes/master.svg?style=flat-square)](https://travis-ci.org/nagix/chartjs-plugin-colorschemes) [![Code Climate](https://img.shields.io/codeclimate/maintainability/nagix/chartjs-plugin-colorschemes.svg?style=flat-square)](https://codeclimate.com/github/nagix/chartjs-plugin-colorschemes) [![Awesome](https://awesome.re/badge-flat2.svg)](https://github.com/chartjs/awesome)

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
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-colorschemes"></script>
```
```html
<script src="https://unpkg.com/chartjs-plugin-colorschemes"></script>
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

### Usage in ES6 as Module

Nothing else than importing the module should be enough.

```js
import 'chartjs-plugin-colorschemes';
```

If you want to reduce the size by only importing the plugin core and particular color schemes, see the example below.

```js
// import the plugin core
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';

// import a particular color scheme
import { Aspect6 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.office';

// ...
    options: {
        plugins: {
            colorschemes: {
                scheme: Aspect6
            }
        }
    }
//...
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
| `fillAlpha` | `number` | `0.5` | The transparency value for the line fill color. Must be a number between `0.0` (fully transparent) and `1.0` (no transparency).
| `scheme` | <code>string&#124;string[]</code> | `'brewer.Paired12'` | Color scheme name that is any of [Color Chart](https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html). It also accepts an array of color strings, which is primarily for ES modules. [more...](#usage-in-es6-as-module)
| `reverse` | `boolean` | `false` | If set to `true`, the order of the colors in the selected  scheme is reversed.
| `override` | `boolean` | `false` | If set to `true`, the specified color scheme will override the existing color options. If `false`, it is only applied when no color setting exists. [more...](#overriding-existing-color-settings)
| `custom` | `function` | `undefined` | A function that takes a copy of the color string array for `scheme` in order to extend the predefined scheme colors. [more...](#custom-function)

### Overriding Existing Color Settings

By default, this plugin doesn't apply a color scheme if any color options are already specified. This may cause a problem if you are using a third party library such as [ng-charts](https://valor-software.com/ng2-charts/), which automatically applies default color settings. In that case, the existing color settings can be overridden by setting the `override` option to `true`.

### `custom`-Function

With the help of the `custom`-Function you can extend the predefined scheme colors. This function takes a copy of the current scheme and is expected to return an array with at least one element. See the example below.

```js
var customColorFunction = function(schemeColors) {
    var myColors = ['#ff0000', '#00ff00', '#0000ff']; // define/generate own colors

    // extend the color scheme with own colors
    Array.prototype.push.apply(schemeColors, myColors);

    return schemeColors; // optional: this is not needed if the array is modified in place
};

// ...
    options: {
        plugins: {
            colorschemes: {
                scheme: 'brewer.Paired12',
                custom: customColorFunction
            }
        }
    }
//...

```

## Building

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):

```bash
npm install
```

The following commands will then be available from the repository root:

```bash
gulp build            # build dist files
gulp build --watch    # build and watch for changes
gulp lint             # perform code linting
gulp package          # create an archive with dist files and samples
```

## License

chartjs-plugin-colorschemes is available under the [MIT license](https://opensource.org/licenses/MIT).
