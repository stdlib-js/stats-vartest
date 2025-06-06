<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Two-sample F-test

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Two-sample F-test for equal variances.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-vartest
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var vartest = require( '@stdlib/stats-vartest' );
```

#### vartest( x, y\[, opts] )

By default, the function performs a two-sample F-test for the null hypothesis that the data in [arrays][mdn-array] or [typed arrays][mdn-typed-array] `x` and `y` is independently drawn from normal distributions with _equal_ variances.

```javascript
var x = [ 610, 610, 550, 590, 565, 570 ];
var y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];

var out = vartest( x, y );
/* returns
    {
        'rejected': false,
        'pValue': ~0.399,
        'statistic': ~1.976,
        'ci': [ ~0.374, ~13.542 ],
        // ...
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
console.log( out.print() );
/* e.g., =>
    F test for comparing two variances

    Alternative hypothesis: True ratio in variances is not equal to 1

        pValue: 0.3992
        statistic: 1.976
        variance of x: 617.5 (df of x: 5)
        variance of y: 312.5 (df of y: 7)
        95% confidence interval: [0.3739,13.5417]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that the true ratio of variances is greater than one (`greater`), smaller than one (`less`), or that the variances are the same (`two-sided`). Default: `two-sided`.
-   **ratio**: positive `number` denoting the ratio of the two population variances under the null hypothesis. Default: `1`.

By default, the hypothesis test is carried out at a significance level of `0.05`. To choose a different significance level, set the `alpha` option.

```javascript
var x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
var y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];

var out = vartest( x, y, {
    'alpha': 0.01
});
var table = out.print();
/* e.g., returns
    F test for comparing two variances

    Alternative hypothesis: True ratio in variances is not equal to 1

        pValue: 0.0081
        statistic: 9.1458
        variance of x: 2858.0556 (df of x: 9)
        variance of y: 312.5 (df of y: 7)
        90% confidence interval: [2.4875,30.1147]

    Test Decision: Reject null in favor of alternative at 1% significance level

    Exited with status 0
*/
```

By default, a two-sided test is performed. To perform either of the one-sided tests, set the `alternative` option to `less` or `greater`.

```javascript
var x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
var y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];

var out = vartest( x, y, {
    'alternative': 'less'
});
var table = out.print();
/* e.g., returns
    Alternative hypothesis: True ratio in variances is less than 1

        pValue: 0.996
        statistic: 9.1458
        variance of x: 2858.0556 (df of x: 9)
        variance of y: 312.5 (df of y: 7)
        95% confidence interval: [0,30.1147]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level

    Exited with status 0
*/

out = vartest( x, y, {
    'alternative': 'greater'
});
table = out.print();
/* e.g., returns
    Alternative hypothesis: True ratio in variances is greater than 1

        pValue: 0.004
        statistic: 9.1458
        variance of x: 2858.0556 (df of x: 9)
        variance of y: 312.5 (df of y: 7)
        95% confidence interval: [2.4875,Infinity]

    Test Decision: Reject null in favor of alternative at 5% significance level

    Exited with status 0
*/
```

To test whether the ratio in the population variances is equal to some other value than `1`, set the `ratio` option.

```javascript
var x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
var y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];

var out = vartest( x, y, {
    'ratio': 10.0
});
/* e.g., returns
    {
        'rejected': false,
        'pValue': ~0.879,
        'statistic': ~-0.915,
        'ci': [ ~1.896, ~38.385 ],
        // ...
    }
*/

var table = out.print();
/* e.g., returns
    F test for comparing two variances

    Alternative hypothesis: True ratio in variances is not equal to 10

        pValue: 0.8794
        statistic: 0.9146
        variance of x: 2858.0556 (df of x: 9)
        variance of y: 312.5 (df of y: 7)
        95% confidence interval: [1.8962,38.3853]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var rnorm = require( '@stdlib/random-base-normal' );
var vartest = require( '@stdlib/stats-vartest' );

var table;
var out;
var x;
var y;
var i;

x = new Array( 60 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = rnorm( 2.0, 1.0 );
}
y = new Array( 40 );
for ( i = 0; i < y.length; i++ ) {
    y[ i ] = rnorm( 1.0, 2.0 );
}

// Test whether the variances of `x` and `y` are the same:
out = vartest( x, y );
table = out.print();
/* e.g., returns
    F test for comparing two variances

    Alternative hypothesis: True ratio in variances is not equal to 1

        pValue: 0
        statistic: 0.1717
        variance of x: 0.6406 (df of x: 60)
        variance of y: 3.7306 (df of y: 40)
        95% confidence interval: [0.0953,0.2995]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/

// Test whether the variance of `x` is one fourth of the variance of `y`:
out = vartest( x, y, {
    'ratio': 0.25
});
table = out.print();
/* e.g., returns
    F test for comparing two variances

    Alternative hypothesis: True ratio in variances is not equal to 0.25

        pValue: 0.1847
        statistic: 0.6869
        variance of x: 0.6406 (df of x: 60)
        variance of y: 3.7306 (df of y: 40)
        95% confidence interval: [0.0953,0.2995]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-bartlett-test`][@stdlib/stats/bartlett-test]</span><span class="delimiter">: </span><span class="description">Bartlett’s test for equal variances.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-vartest.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-vartest

[test-image]: https://github.com/stdlib-js/stats-vartest/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-vartest/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-vartest/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-vartest?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-vartest.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-vartest/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-vartest/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-vartest/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-vartest/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-vartest/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-vartest/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-vartest/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-vartest/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-vartest/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

<!-- <related-links> -->

[@stdlib/stats/bartlett-test]: https://github.com/stdlib-js/stats-bartlett-test

<!-- </related-links> -->

</section>

<!-- /.links -->
