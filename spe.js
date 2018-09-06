
describe('Protractor Demo App', function() {
	
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  
  var selectDropdownbyNum = function (optionNum ) {
    if (optionNum){
	  
	  element(by.model('operator')).click().then(function(){
		  element(by.css('[value="'+optionNum+'"]')).click();
	  });  
	  
    }
  };
  
  // Add the custom locator.
	by.addLocator('buttonTextSimple',
		function(buttonText,index, opt_parentElement, opt_rootSelector) {
  
		// using = opt_parentElement || document,
		//buttons = using.querySelectorAll('button');
		element(by.className('btn'));
		// Return an array of buttons with the text.
		/*return Array.prototype.filter.call(buttons, function(button) {
			return button.textContent === buttonText;
		});*/
	});
  
  
  beforeEach(function() {
	  //browser.get('https://www.tutorialspoint.com/sap_ui5/sap_ui5_development_kit.htm');
	browser.get('http://juliemr.github.io/protractor-demo/');
	//browser.get('https://sapui5.hana.ondemand.com/#/controls');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);
	//selectDropdownbyNum('MULTIPLICATION');	
    //goButton.click();
	
	element(by.buttonTextSimple('Go!')).click();
	
    expect(latestResult.getText()).toEqual('3');
  });

  /* it('should add four and six', function() {
    // Fill this in.
	firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);
	goButton.click();
    expect(latestResult.getText()).toEqual('10');
  });
  
  it('should read the value from an input', function() {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  }); */
});


