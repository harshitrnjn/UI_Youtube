// var input=document.querySelector(".cmnts>input")
// input.addEventListener("click", function(){
//     input.style.border="none"
//     input.style.bgclr="red"
// })

document.querySelector('.cmnts>button').onclick = function(){
    if(document.querySelector('.cmnts>input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('.comment-store').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('.cmnts>input').value}
                </span>
                <button class="delete">
                <i class="ri-delete-bin-line"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}