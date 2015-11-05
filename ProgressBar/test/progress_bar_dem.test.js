/*
 * Unit tests for lib/calculator.js
 */


describe('Progress Demo Bars', function() {

  // inject the HTML fixture for the tests
  beforeEach(function() {  

  });

  // remove the html fixture from the DOM
  afterEach(function() {
    selectedBar = 1;	
    bars = [
		{ id: 1, value: 35, width: 35, color: 1 },
	     { id: 2, value: 50, width: 50, color: 1 },
	     { id: 3, value: 75, width: 75, color: 1 }
	];
  });

  beforeEach(function() {
  });

  it('#progress1 width should be 45 for 35 + 10', function() {
    console.log("==========1============");
    add(10);
    expect(bars[0].width).toBe(45);
  });

  it('#progress2 width should be 75 for 50 + 25', function() {
    console.log("==========2============");
    setSelectedBar(2);
    add(25);
    expect(bars[1].width).toBe(75);
  });

  it('#progress3 should be 50 for 75 - 25', function() {
    console.log("==========3============");
    setSelectedBar(3);
    add(-25);
    expect(bars[2].width).toBe(50);
  });

  // progress bar width cannot be exceed over 100
  it('#progress3 width should be 100 for 75 + 25 + 25 and color should be 2(red) ', function() {
    console.log("==========4============");
    setSelectedBar(3);
    add(25);
    add(25);
    expect(bars[2].width).toBe(100);
    expect(bars[2].color).toBe(2); // red
  });  

  it('#progress3 value should be 125', function() {
    console.log("==========5============");
    setSelectedBar(3);
    add(25);
    add(25);
    expect(bars[2].value).toBe(125);
  }); 

});