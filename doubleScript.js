function func() {
	var elem = document.getElementById('test');
	alert(elem.value); 
    elem.style.color = 'red';
 	elem.style.fontSize = '30px';

} 

function func3() {
	  document.write("<p>Нажмите F12 и посмотрите консоль потом обновите страницу клавишей F5!</p>");  
	  
	  var date = new Date();
var day = date.getDay();
var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
alert("Сегодня "+days[day]+"->"+date.getDate()+":"+date.getMonth()+":"+date.getFullYear());

} 

function func4() {
	var elem = document.getElementById('test4'); //получаем наш абзац
	elem.innerHTML = '<b>Новый текст</b>';
	$('#test4').clone().insertAfter('#test4');

	//console.log(document.body);
	alert(document.body); //body уже есть

} 

function func5() {
	var elems = document.getElementsByClassName('www');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = 'Ура!';
	}
}

function start() {
	//По нажатию на кнопку наш таймер начнет работать:
	window.setInterval(timer, 1000);

	$('.www').each(function() {
		console.log($(this).html());
	});
	
}

//Эта функция будет запускаться каждую секунду
function timer() {
	var elem = document.getElementById('test5');
	elem.value = (parseInt(elem.value)+1); //parseInt преобразует строку в число

if (elem.value % 6 == 2) $('.www').css({color: 'red', font: '24px Times new roman'}).html('Это новый текст');
if (elem.value % 6 == 4) $('.www').css('color', 'blue').html('Старый текст в консоли');


}

var li = document.querySelectorAll('#ul li');

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener('click', addSign);
}
function addSign() {	
	this.innerHTML = this.innerHTML + '!';
}

//Реализация кнопочки добавления новой li:
var ul = document.getElementById('ul');
var button = document.getElementById('button');
button.addEventListener('click', addLi);
function addLi() {
	var li = document.createElement('li');
	li.innerHTML = 'новая li';
	li.addEventListener('click', addSign); //навесим событие на новую li
	ul.appendChild(li);
}


var buttons = document.getElementsByClassName('a1');

for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = (function() {
		var counter = 0;
		//Эта функция привяжется к onclick:
		return function() {
			counter++; //берется из замыкания - для каждой кнопки своя переменная
			this.innerHTML = counter;
		}
	})();
}



var obj = {
	name: 'Иван',
	age: 20,
	bool: true,
	arr: [1, 2, 3, 4],
	value1: null,
	value2: NaN,
	value3: Infinity,
};

var json = JSON.stringify(obj);
console.log('Тут содержимое формата JSON:');
console.log(json);

//тут мы скрываем и показываем текст
$('#hide').click(function() {
	$('#elem').hide(1000);
});

$('#show').click(function() {
	$('#elem').show(1000);
});

var xx1 = 1;
$('#toggle').click(function() {
	$('#elem1').slideToggle(1000, function() {
		xx1++;
		if (xx1 % 2 == 0) $('#toggle').html('Спрятано'); 
		else $('#toggle').html('Спрятать');
	});
	
});

//тут анимация дива
$('#button4').click(function() {
	$('#elem4').animate({height: '+=50', width: '+=50'}, 1000);
});

$('#button5').click(function() {
	$('#elem4').animate({height: '-=50', width: '-=50'}, 1000);
});