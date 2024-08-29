const BASE_LIST = [
	{
		title: 'Quote generator',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'Lets display random and most pretentious quotes for your Instagram stories!'
	},
	{
		title: 'Calculator for tips',
		difficulity: 'medium',
		difficulityColor: 'yellow',
		description: 'I hope You leave them for the waiter, right?)'
	},
	{
		title: 'Print the even numbers',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'Use the for loop to print the even numbers from 2 to 10.'
	},
	{
		title: 'Function min(a, b)',
		difficulity: 'medium',
		difficulityColor: 'yellow',
		description: 'Write a function min(a,b) that returns the smaller of the numbers a and b.'
	},
	{
		title: 'data transformation function #1',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'write a function that takes a string and converts it to a number, if possible'
	},
	{
		title: 'data transformation function #2',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'write a function that takes a number and converts it to a string, if possible'
	},
	{
		title: 'data transformation function #3',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'write a function that takes a number and converts it to a boolean, if possible'
	},
	{
		title: 'data transformation function #4',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'write a function that takes a string and converts it to a boolean, if possible'
	},
	{
		title: 'Wild card',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'Tell us your favorite joke'
	},
];

function shuffleArr(array) {
	let i = array.length;
	while (i--) {
		const ri = Math.floor(Math.random() * i);
		[array[i], array[ri]] = [array[ri], array[i]];
	}
	return array;
}

function generateGrid() {
	let html = '';
	const arr = shuffleArr(BASE_LIST);
	arr.forEach(el => {
		html += `
		<div class="flip-card">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img src="https://i.pinimg.com/originals/44/45/4f/44454f54408f719aac56287292a14243.jpg" alt="Avatar"
						style="width:300px;height:300px;">
				</div>
				<div class="flip-card-back">
					<h2>${el.title}</h2>
					<p>${el.description}</p>
					<span class='label ${el.difficulityColor}'>${el.difficulity}</span>	
				</div>
			</div>
		</div>
		`;
	});
	document.querySelector('.container').innerHTML = html;
}

function toggleClass(event) {
	document.querySelector('.active')?.classList.remove('active');

	event.target.closest('.flip-card') && event.target.closest('.flip-card').classList.add('active')
}

function addClickToCards() {
	const cards = Array.from(document.querySelectorAll('.flip-card'));
	cards.forEach(card => {
		card.addEventListener('click', toggleClass)
	});
}

function initGame() {
	generateGrid();
	addClickToCards();
}

document.addEventListener('DOMContentLoaded', initGame);