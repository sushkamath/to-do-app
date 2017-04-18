angular.module('toDoFilters', []).filter('altCaps', () => {
	return (input) => {
		var charArray = input.split('');
		charArray = charArray.map((char, index) => {
			return index % 2 === 0 ? char.toUpperCase(char) : char.toLowerCase(char);
		});
		return charArray.join('');
	}
});