
localStorage.setItem('name', 'sanjay');
localStorage.setItem('age','45');
sessionStorage.setItem('name','santhi nanda');

console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('age'));

document.querySelector('.submit').addEventListener('click',function(){
    localStorage.setItem(String(document.querySelector('.name').value), String(document.querySelector('.value').value));
});
document.querySelector('.delete-all').addEventListener('click',function(){
    localStorage.clear();
});
document.querySelector('.submit-task').addEventListener('click',function(){
    var tasks =  localStorage.getItem('task');
    if(tasks === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('task'));
    }
    tasks.push(document.querySelector('.single').value);
    localStorage.setItem('task',JSON.stringify(tasks));
    alert('adding successful');
});
var display = document.querySelector('.display');
document.querySelector('.show-all').addEventListener('click',function(){
    var tasks = JSON.parse(localStorage.getItem('task'));
    display.textContent = "";
    tasks.forEach(ele => {
        display.innerHTML  += String(ele) + "<br>";       
    });
});