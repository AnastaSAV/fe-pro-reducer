function capitalize(string) {
	let arr = string.split(' ');
	let newArr = arr.map(function (word) {
		return word[0].toUpperCase() + word.substring(1);
	})
	let result = newArr.join(' ');
	return result;
}
function upperCase(string) {
	let arr = string.split(' ');
	let newArr = arr.map(function (word) {
		return word.toUpperCase();
	})
	let result = newArr.join(' ');
	return result;
}

function lowerCase(string) {
	let arr = string.split(' ');
	let newArr = arr.map(function (word) {
		return word.toLowerCase();
	})
	let result = newArr.join(' ');
	return result;
}

function reducer(input, action) {
	switch (action) {
		case "upperCase" :
		return upperCase(input)
		break
		case "capitalize" :
		return capitalize(input)
		break
		case "lowerCase" :
		return lowerCase(input)
		break
	}

}
module.exports = reducer;
