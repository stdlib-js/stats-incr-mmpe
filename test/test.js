/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var incrmmpe = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmmpe, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		3.14,
		true,
		null,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrmmpe( value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmmpe( 3 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a moving mean percentage error incrementally', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var acc;
	var tol;
	var N;
	var i;

	data = [
		[ 2.0, 3.0 ],
		[ 3.0, 1.0 ],
		[ 2.0, 5.0 ],
		[ 4.0, 4.0 ],
		[ 3.0, 10.0 ],
		[ 4.0, 5.0 ]
	];
	N = data.length;

	acc = incrmmpe( 3 );

	// Note: manually computed
	expected = [
		(100.0/1.0)*( ((3.0-2.0)/3.0) ),
		(100.0/2.0)*( ((3.0-2.0)/3.0)+((1.0-3.0)/1.0) ),
		(100.0/3.0)*( ((3.0-2.0)/3.0)+((1.0-3.0)/1.0)+((5.0-2.0)/5.0) ),
		(100.0/3.0)*( ((1.0-3.0)/1.0)+((5.0-2.0)/5.0)+((4.0-4.0)/4.0) ),
		(100.0/3.0)*( ((5.0-2.0)/5.0)+((4.0-4.0)/4.0)+((10.0-3.0)/10.0) ),
		(100.0/3.0)*( ((4.0-4.0)/4.0)+((10.0-3.0)/10.0)+((5.0-4.0)/5.0) )
	];
	for ( i = 0; i < N; i++ ) {
		actual = acc( data[i][0], data[i][1] );
		if ( actual === expected[i] ) {
			t.equal( actual, expected[i], 'returns expected value' );
		} else {
			delta = abs( expected[i] - actual );
			tol = 1.0 * EPS * abs( expected[i] );
			t.equal( delta <= tol, true, 'within tolerance. Actual: '+actual+'. Expected: '+expected[i]+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current mean percentage error', function test( t ) {
	var data;
	var acc;
	var i;

	data = [
		[ 2.0, 3.0 ],
		[ 3.0, 5.0 ],
		[ 1.0, 10.0 ]
	];
	acc = incrmmpe( 2 );
	for ( i = 0; i < data.length; i++ ) {
		acc( data[i][0], data[i][1] );
	}
	t.equal( acc(), 65.0, 'returns expected value' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrmmpe( 3 );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'if provided `NaN`, the accumulated value is `NaN` for at least `W` invocations', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	expected = [
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		-214.0,
		NaN,
		NaN,
		NaN,
		-214.0,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN
	];

	data = [
		[ NaN, 1.0 ],  // NaN
		[ 3.14, 1.0 ], // NaN, 3.14
		[ 3.14, 1.0 ], // NaN, 3.14, 3.14
		[ NaN, 1.0 ],  // 3.14, 3.14, NaN
		[ 3.14, 1.0 ], // 3.14, NaN, 3.14
		[ 3.14, 1.0 ], // NaN, 3.14, 3.14
		[ 3.14, 1.0 ], // 3.14, 3.14, 3.14
		[ NaN, 1.0 ],  // 3.14, 3.14, NaN
		[ 3.14, 1.0 ], // 3.14, NaN, 3.14
		[ 3.14, 1.0 ], // NaN, 3.14, 3.14
		[ 3.14, 1.0 ], // 3.14, 3.14, 3.14
		[ NaN, 1.0 ],  // 3.14, 3.14, NaN
		[ 3.14, 1.0 ], // 3.14, NaN, 3.14
		[ 3.14, 1.0 ], // NaN, 3.14, 3.14
		[ NaN, 1.0 ],  // 3.14, 3.14, NaN
		[ NaN, 1.0 ],  // 3.14, NaN, NaN
		[ NaN, 1.0 ],  // NaN, NaN, NaN
		[ NaN, 1.0 ],  // NaN, NaN, NaN
		[ 3.14, 1.0 ]  // NaN, NaN, 3.14
	];

	acc = incrmmpe( 3 );

	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[i][0], data[i][1] );
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v ), true, 'returns expected value for window '+i );
			t.equal( isnan( acc() ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
			t.equal( acc(), expected[ i ], 'returns expected value for window '+i );
		}
	}

	expected = [
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		214.0 / 3.14,
		NaN,
		NaN,
		NaN,
		214.0 / 3.14,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN
	];

	data = [
		[ 1.0, NaN ],  // NaN
		[ 1.0, 3.14 ], // NaN, 3.14
		[ 1.0, 3.14 ], // NaN, 3.14, 3.14
		[ 1.0, NaN ],  // 3.14, 3.14, NaN
		[ 1.0, 3.14 ], // 3.14, NaN, 3.14
		[ 1.0, 3.14 ], // NaN, 3.14, 3.14
		[ 1.0, 3.14 ], // 3.14, 3.14, 3.14
		[ 1.0, NaN ],  // 3.14, 3.14, NaN
		[ 1.0, 3.14 ], // 3.14, NaN, 3.14
		[ 1.0, 3.14 ], // NaN, 3.14, 3.14
		[ 1.0, 3.14 ], // 3.14, 3.14, 3.14
		[ 1.0, NaN ],  // 3.14, 3.14, NaN
		[ 1.0, 3.14 ], // 3.14, NaN, 3.14
		[ 1.0, 3.14 ], // NaN, 3.14, 3.14
		[ 1.0, NaN ],  // 3.14, 3.14, NaN
		[ 1.0, NaN ],  // 3.14, NaN, NaN
		[ 1.0, NaN ],  // NaN, NaN, NaN
		[ 1.0, NaN ],  // NaN, NaN, NaN
		[ 1.0, 3.14 ]  // NaN, NaN, 3.14
	];

	acc = incrmmpe( 3 );

	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[i][0], data[i][1] );
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v ), true, 'returns expected value for window '+i );
			t.equal( isnan( acc() ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
			t.equal( acc(), expected[ i ], 'returns expected value for window '+i );
		}
	}
	t.end();
});
