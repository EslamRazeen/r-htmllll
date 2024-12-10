let btn = document.getElementById("btn");
let yes = document.getElementById("yes");
let del = document.getElementById("del");

let input= document.getElementById("input");
let create= document.getElementById("create");

// let arr ;
// if(localStorage.item!=null){
//     arr= JSON.stringify(localStorage.item)
// }
// else{
//     arr = [];
// }


let c=0;

btn.onclick = function(){
    
    c++;
    // arr.push(1);
    
    if(input.value != ''){
        show();
    }
    console.log("hello");
    input.value='';
    
    
    // if(input.value!=''){
    //     for(let i=0;i<arr.length;i++){
    //         arr.push()
    //     }
    // }
    

    // localStorage.setItem("item",JSON.stringify(arr));
}
function show(){
    let d = ``;
    for(let i=0;i<c;i++){
        d+=`
        <div>
            <p>${input.value}</p>
            <span><button id="yes">Done</button><button id="del">Trash</button></span>
        </div>
        `
    }
    
    create.innerHTML = d;
}

