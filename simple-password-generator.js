!(function(){
	exports.getPassword = function(length)
	{
		return Math.random().toString(36).slice(-length);
	}	
})();