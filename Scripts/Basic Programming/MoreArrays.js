function Max(array) {
	var highest = 0;
	console.log(highest)
	console.log(array.length)
	for (let i = 0; i == array.length; i++) {
		let val1 = array(i);
		console.log(i, val1, highest)
		if (val1 > highest) {
			highest = val1
			console.log(highest)
		}
	}
	console.log("about to exit")
	return highest
}

const furniture = ["table", "chair", "sofa", "TV"];
const costs = [100, 30, 300, 500];
const toBeRandomized = [500, 400, 300, 200, 100];
const reverseFurniture = furniture.reverse();

costs.sort(function(a, b){return a-b})
costs.sort(function(a, b){return 0.5-Math.random()})
let highest = Math.max.apply(null, costs);
let lowest = Math.min.apply(null, costs);

console.log(reverseFurniture)
console.log(costs)
console.log(highest, lowest)
console.log(Max(costs))


