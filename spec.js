describe('Protractor Demo App', function() {
	
	beforeEach(function() {
		browser.get('https://sapui5.hana.ondemand.com/#/controls');
	});

	by.addLocator('buttonTextSimple', function(buttonText,index, opt_parentElement, opt_rootSelector) {
  
		var using = opt_parentElement || document,
		buttons = using.querySelectorAll('button');
		// Return an array of buttons with the text.
		return Array.prototype.filter.call(buttons, function(button) {
			return button.textContent === buttonText;
		});
	});

	element(by.buttonTextSimple('Go!')).click();
	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
});

