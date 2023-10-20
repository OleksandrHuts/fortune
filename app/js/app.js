const BASE_LIST = [
	{
		title: 'Генератор цитат',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'Давай виводити випадкові і максимально пафосні цитати для твоїх інстаграм сторіс!'
	},
	{
		title: 'Модальне вікно',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'Симпатичний попап для виведення інформації, з анімацією :)'
	},
	{
		title: 'Калькулятор чайових',
		difficulity: 'medium',
		difficulityColor: 'yellow',
		description: 'Ти ж їх залишаєш?)'
	},
	{
		title: 'Таймер зворотнього відліку',
		difficulity: 'medium',
		difficulityColor: 'yellow',
		description: 'Щоб було легше дочекатися кінця уроку.'
	},
	{
		title: 'Лічильник слів',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'Просто рахує слова.'
	},
	{
		title: 'Камінь-ножиці-папір',
		difficulity: 'medium',
		difficulityColor: 'yellow',
		description: 'Інтерактивна гра з випадковим результатом.'
	},
	{
		title: 'Слайдер зображень',
		difficulity: 'hard',
		difficulityColor: 'red',
		description: 'Симпатичний слайдер для перегляду фото.'
	},
	{
		title: 'To-do список',
		difficulity: 'hard',
		difficulityColor: 'red',
		description: 'Список планів на день, в який можна додавати нові справи і видаляти виконані.'
	},
	{
		title: 'Форма зворотнього звязку з валідацією',
		difficulity: 'hard',
		difficulityColor: 'red',
		description: 'Форма з іменем, паролем та імейлом користувача.'
	},
	{
		title: 'Рекурсія: Сума всіх чисел до даного',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'Напишіть функцію sumTo(n), що обчислює суму чисел 1 + 2 + ... + n.'
	},
	{
		title: 'А ти щасливчик!',
		difficulity: 'easy',
		difficulityColor: 'green',
		description: 'Достатньо розказати, за що ти поважаєш своїх одногрупників.'
	},
	{
		title: 'Reduce!!!!',
		difficulity: 'medium',
		difficulityColor: 'yellow',
		description: 'Маючи масив, створи об\'єкт, ключі - це унікальні елементи масиву, їх значення - скільки разів цей елемент повторюється у масиві.'
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