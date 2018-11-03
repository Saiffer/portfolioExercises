const people = [{
	firstname: 'John',
	workedMicrosoft: true,
	workedApple: false,
},{
	firstname: 'Jim',
	workedMicrosoft: false,
	workedApple: true,
},{
	firstname: 'Ann',
	workedMicrosoft: true,
	workedApple: false,
},{
	firstname: 'Mike',
	workedMicrosoft: false,
	workedApple: true,
},{
	firstname: 'Ben',
	workedMicrosoft: true,
	workedApple: false,
},{
	firstname: 'Mary',
	workedMicrosoft: true,
	workedApple: false,
}];


var distinct = [];
for( var firstname in people ){
 if( typeof(people[people[firstname].workedApple]) == "true"){
  distinct.push(people[firstname].workedApple);
 }
 people[people[firstname].workedApple] = 0;
}

console.log(distinct);





//let microsoft = [...new Set(people.map(item => item.firstname))];
//console.log(microsoft);


/*for (var i = 0 ; i < people.length; i++) {
	if(people.workedApple == true) {
		console.log(people.firstname);
	}
	else {
		console.log(people.firstname);
	}
}*/
