let string = "";

let stringReplace = "";
let input = document.getElementById('inputVal');
let btns = document.querySelectorAll('button');
let btnarr = Array.from(btns);

btnarr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == "="){
            stringReplace = string.replace("x","*");
            try {
                string = eval(stringReplace);
                input.value = string;
            } catch (error) {
                input.value = "Error"; 
            }
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML; 
            input.value = string;
        }
        }
    )}
)
