let answer = (18 < 12) ? "NotAllowed":"Allowed";

console.log(answer);

if ((5 > 2)&&(6 > 3)) {
	console.log("They are both true");
} else if (5 == 5 || 4 == 3) {
	console.log("One of them is true");
} else {
	console.log("None of them is true");
}

let day;

switch (-1) {
	case 0:
 		day = "Sunday";
 		break;
 	case 1:
 		day = "Monday";
 		break;
 	case 2:
 		day = "Tuesday";
 		break;
 	case 3:
 		day = "Wednesday";
 		break;
 	case 4:
 		day = "Thursday";
 		break;
 	case 5:
 		day = "Friday";
 		break;
 	case 6:
 		day = "Saturday";
 		break;
	case -1:
 	default:
 		day = "There is probably an error"
}


console.log(day)
