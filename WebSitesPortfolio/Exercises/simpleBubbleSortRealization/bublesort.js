var arr = [],
	i, j, k, n = 6;

	for(i=0; i<n; i++){
		arr.push(Math.floor(Math.random()*10));
	}

	console.log("Our random array: " + arr);

for(j=0; j<n; j++){
	for(i=0 ; i < n - 1; i++) {
		if(arr[i] > arr[i+1]) {
			k = arr[i+1];
			arr[i+1] = arr[i];
			arr[i] = k;
		}
		console.log("New array: " + arr);
	}
}


	