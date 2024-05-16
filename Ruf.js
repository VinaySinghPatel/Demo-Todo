const Home_Button = document.getElementById("Home_Button");
const New_Button = document.getElementById("New_Button");
const Show_All = document.getElementById("ShowAll");
const input_Holder = document.getElementById("input_Holder");
const Submit_Button = document.getElementById("Submit_Button");
const Todo_Lists = document.getElementById("Todo-List");
const New_Todos = document.getElementById("New_Todos");

addTodoFunc();
let save = localStorage.getItem('user');
Array = JSON.parse(save);
let Array = [];
function addTodoFunc(){
   
        Submit_Button.addEventListener("click",()=>{
            const TodoVal = input_Holder.value.trim();
            const l = document.createElement('li');
            l.innerHTML = '${TodoVal}';
            New_Todos.appendChild(l);
           input_Holder.value = "";
            l.textContent = TodoVal;
            console.log(TodoVal);


        })     
}

function Savedata(Array){
    let str = JSON.stringify(Array)
    localStorage.setItem('user ',str);
}