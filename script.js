
let daily = document.getElementById('daily');
let monthly = document.getElementById('monthly');
let yearly = document.getElementById('yearly');



daily.addEventListener("click",()=>{
  let classes = document.getElementsByClassName('duration-type');
  for(let index =0; index<classes.length; index++){
    classes[index].innerHTML = 'Day';
    daily_value();
  }
})

weekly.addEventListener("click",()=>{
  let classes = document.getElementsByClassName('duration-type');
  for(let index =0; index<classes.length; index++){
    classes[index].innerHTML = 'Week';
    weekly_value();
  }
})

monthly.addEventListener("click",()=>{
  let classes = document.getElementsByClassName('duration-type');
  for(let index =0; index<classes.length; index++){
    classes[index].innerHTML = 'Month';
    monthly_value();
  }
})

function daily_value(){
  fetch('data.json')
  .then(response => response.json())
  .then(data => {

    let my_data = data;
    let array = [];

    for (const iterator of my_data) {
      array.push(iterator.title);
      array.forEach(element => {
        if(element===iterator.title){
          document.getElementById(`${element}-duration`).innerHTML = `${iterator.timeframes.daily.current}hrs`;
          document.getElementById(`${element}-previous-duration`).innerHTML = `${iterator.timeframes.daily.previous}hrs`;
        }
      });
    }
  })
}

function monthly_value(){
  fetch('data.json')
  .then(response => response.json())
  .then(data => {

    let my_data = data;
    let array = [];

    for (const iterator of my_data) {
      array.push(iterator.title);
      array.forEach(element => {
        if(element===iterator.title){
          document.getElementById(`${element}-duration`).innerHTML = `${iterator.timeframes.monthly.current}hrs`;
          document.getElementById(`${element}-previous-duration`).innerHTML = `${iterator.timeframes.monthly.previous}hrs`;
        }
      });
    }
  })
}

function weekly_value(){
  fetch('data.json')
  .then(response => response.json())
  .then(data => {

    let my_data = data;
    let array = [];

    for (const iterator of my_data) {
      array.push(iterator.title);
      array.forEach(element => {
        if(element===iterator.title){
          document.getElementById(`${element}-duration`).innerHTML = `${iterator.timeframes.weekly.current}hrs`;
          document.getElementById(`${element}-previous-duration`).innerHTML = `${iterator.timeframes.weekly.previous}hrs`;
        }
      });
    }
  })
}

