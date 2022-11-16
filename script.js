let btnClick = (e) => {
    let inputBox = document.getElementById("res");
    inputBox.value += e.value;

};

let clr = document.getElementById('clr');
clr.addEventListener('click', clr = (e) => {
    let inputBox = document.getElementById("res");
    inputBox.value = null;
});

let calculate = document.getElementById('equal');
calculate.addEventListener('click', function (e) {
   
    let inputBox = document.getElementById("res");
    
    inputBox.value = eval(inputBox.value);
    
})



    

    



