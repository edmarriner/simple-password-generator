/*
 *	@name : Simple Password Generator
 *	@Description: Generates random passwords with a simple API.
 *	@Version: 10.0.1
 *
 *	@changelog: 
 *		
 *		1.0.1 : Documented the code a little more. Added a Changelog
 *		1.0.0 : A first release. 
*/
!(function(){
	
	/*
	 * Generates a random password.
	 */
	exports.getPassword = function(length)
	{

		// Generate a random number.
		var number = Math.random()

		// Convert this number into a string.
		var string = number.toString(36)

		// Grab a section of the string as the password
		var password = slice(-length);

		// Return the password back!
		return password;
	}

})();