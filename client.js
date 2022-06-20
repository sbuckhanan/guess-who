console.log('Here are all the available people:', people);

$(document).ready(onReady);
let person;

function onReady() {
	addImg();
	pickPerson();
	$(document).on('click', 'img', nameCheck);
}

function addImg() {
	for (let i = 0; i < people.length; i++) {
		console.log('Looping');
		$('.homeForImg').append(`
    <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of Chris" data-name="${people[i].name}">
    `);
	}
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function pickPerson() {
	person = randomNumber(0, people.length - 1);
	// people[person].name
	console.log(people[person].name);
	$('.personName').text(` ${people[person].name}`);
}

function nameCheck() {
	console.log('Clicked');
	if ($(this).data('name') === people[person].name) {
		console.log('right person');
		alert('Congrats you picked the right one!');
	} else {
		alert('Try again pal');
	}
}
