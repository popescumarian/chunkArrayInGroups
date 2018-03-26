function chunkArrayInGroups(arr, size) 
{
	var newArr = [];

	for(var i = 0; i < arr.length; i++) {
		if(i % size == 0) {
			newArr.push(arr.slice(i, size + i));
		}		
	}
	return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 3));