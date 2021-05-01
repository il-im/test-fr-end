//1-задание
// DOM - это метод  связи между js , html и браузером
//2-задание
// getElementbyId,getElementbyClassname,quarySelectory
//3-задание

//4-задание
// через функцию createElement
//5-задание

//6-задание
// event - это "событие" к которому мы привязываем некое действие,например нажатие на клавишу
//7-задание
// addEventListener - функция ,которая привязывает  действиe к событию
//8-задание
// 'click','load'
//9-задание
// XMLHttpRequest
// 10-задание
// localStorage-это хранилище с объектами, в браузере
//11-задание
// AJAX
//12-задание
// выполнение определенной функции дочернимим элементами  заложенную для родительского






function getB() {
    const b = 1;
  
    return new Promise((resolve) => {
        resolve(b);
    });
 }
  
 async function test() {
    console.log('Started test...'); // ?
  
    setTimeout(() => {
        console.log('Set timeout callback #1'); // ?
    }, 2000);
  
    getB().then((b) => console.log('Getting b from then ..., b: ', b)); // ?
  
    console.log('Some code ...'); // ?
  
    const b = await getB();
  
    console.log('from await, b: ', b); // ?
  
    setTimeout(() => {
        console.log('Set timeout callback #2') // ?
    });
  
    return 200;
 }
  
 console.log('Main Thread'); // ?
  
 test().then((code) => {
    console.log('Test is ended, code: ', code) // ?
 });
 console.log('Other Sync code in Main Thread'); // ?
  
 setTimeout(() => {
    console.log('Outer set timeout #1') // ?
 }, 0);