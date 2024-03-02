let string = "";
let buttons = document.querySelectorAll(".bt");

Array.from(buttons).forEach((bt) => {
    bt.addEventListener("click", (e) => {
        // if (e.target.innerHTML == "=" ) {
        //     string = eval(string);
        //     document.querySelector("input").value = string;
        //     }
        // else if (e.target.innerHTML == "AC" ) {
        //     string = " ";
        //     document.querySelector("input").value = string;
        //     }
        // else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
    // }
    })
});
