const Home_Button = document.getElementById("Home_Button");
const New_Mode = document.getElementById("New_Button");
const input_Holder = document.getElementById("input_Holder");
const Submit_Button = document.getElementById("Submit_Button");
const Todo_Lists = document.getElementById("Todo-List");
const New_Todos = document.getElementById("New_Todos");
const size_of_Box = document.getElementById("MAinBOX");
const deleted = document.getElementById("DELETE_BUTTON");

addTodoFunc();
let b = true;
New_Mode.addEventListener("click",()=>{
    const bg = document.getElementById("MAinBOX");
    const outbg = document.getElementById("Your_Todo");
    
    if(b === true){
       bg.style.backgroundColor = "Black";
   outbg.style.color = "white";
    b = false;
    }else if(b === false){
       bg.style.backgroundColor = "White";
       outbg.style.color = "black";
       b = true;
    }
})

function newtodo(){

}


function addTodoFunc(){
        Submit_Button.addEventListener("click",()=>{
            const TodoVal = input_Holder.value.trim();
            if(TodoVal === ""){
                alert("Please Enter Something");
            }else{
                const v = deleted.innerHTML;
            const l = document.createElement('li');
           input_Holder.value = "";
            l.innerHTML = TodoVal+"      "+' <i class="fa-solid fa-trash"></i> ';
            New_Todos.appendChild(l);
            console.log(TodoVal);
            deleted.addEventListener("click",()=>
                l.remove());
        //  l.appendChild(deleted);
        let q = l.querySelector("i");

q.addEventListener("click",DeleteFunc);
function DeleteFunc(){
    l.remove();
}



            }
        })     
}

// input_Holder.addEventListener("keypress",()=>{
//     const TodoVal = input_Holder.value.trim();
//     const l = document.createElement('li');
//     l.innerHTML = '${TodoVal}';
//     New_Todos.appendChild(l);
//    input_Holder.value = "";
//     l.textContent = TodoVal;
//     console.log(TodoVal);
// });

const p = document.querySelector("li");

