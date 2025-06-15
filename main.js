'use strict';

// 課題１
console.log('Hello world');

// 課題２
console.log(3 +7);

// 課題３
console.log('3 +7' );

// 課題４
console.log(5 * 2);

// 課題５
const p='プログラミング';
const s='スクール';
console.log(p + s);

// 課題６
let name='プログラミングスクール';
console.log(name);

// 課題７
const a=100;
console.log(a *a);

// 課題８
let box='プログラム初心者';
box='プログラム中級者';
console.log(box);

// 課題９
const language='日本語';
console.log(language+'を話せます。');

// 課題１０
 name='伶奈';
const age=23;
console.log(`私の名前は${name}です。 現在${name}は${age}歳です。よろしくお願いします。`);

// 課題１１
const level=prompt('レベルを入力してください');
if (level>=10) {
  console.log('強い');
}else if(level<10) {
  console.log('弱い');
} 

// 課題１２
const n=prompt('数字を入力してください');
switch (n) {
  case '1':
    console.log('大吉');
    break;
  case '2':
    console.log('吉');
    break;
  case '3':
    console.log('小吉');
    break;
}

// 課題１３
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
  }
}


// 課題１４
const menu=prompt('メニューを入力してください');
switch(menu) {
    case 'コーヒー':
        console.log('コーヒーが注文されました。お楽しみください！');
        break;
    case '紅茶':
        console.log('紅茶が注文されました。ミルクや砂糖を加えると美味しいですよ！');
        break;
    case 'アイスティー':
        console.log('アイスティーが注文されました。暑い日にぴったりです！');
        break;
     default:
        console.log('申し訳ありませんが、そのメニューはありません。コーヒー、紅茶、アイスティーのいずれかを選んでください。');
        break;
}
