var result = confirm("Завершить выполнение программы?");
if(result===true)
    window.close();
else
    document.write("Программа продолжает работать");
    console.log("В истории " + history.length + " станиц");




location = "http://google.com";
// аналогично
// location.href = "http://google.com";
// location.assign("http://google.com");




var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
function closeWindow(){
    popup.close();
}
setTimeout(closeWindow, 10000);



let kv = [];
for (let i = 0; i < 5; i++) {
    kv.push(i * i);
}
console.table(kv);


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let vasya = new Person("Василий", "Иванович");
let petka = new Person("Петька", "Семёнович");
let anka = new Person("Анька", "Пулемётчица");

console.table([vasya, petka, anka]);




function* takeItem(arr){
        for(var i=0; i < arr.length; i++){
            yield arr[i];
        }
    }
    var users = ["Tom", "Bob", "Sam", "Alice", "Kate", "Ann"];
     
    var userGenerator = takeItem(users);
     
    var timer = setInterval(function(){
        var user = userGenerator.next();
        if(user.done){
            clearInterval(timer);
            console.log("The End...");
        } else{
            console.log(user.value);
        }
    }, 500);