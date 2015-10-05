var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии
// my solution
function convertToRoman (number){
var numbersArray = [1, 4, 5, 9, 10, 40, 50];
var romanNumerals = {
            1 : 'I',
    		4 : 'IV',
    		5 : 'V',
    		9 : 'IX',
    		10 : 'X',
    		40 : 'XL',
    		50 : 'L'
                     };
var count = numbersArray.length-1;
var strInRoman = '';
if (number == 0){
      return '--';
	}
while (number > 0) {
    if (number >=numbersArray[count]) {
			strInRoman += romanNumerals[numbersArray[count]];
			number -= numbersArray[count];
    }
    else {
        count--;
         }
  }
	return strInRoman;
}
