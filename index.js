


const ratingButton = document.querySelectorAll(".button-rate")

let selectedBtn = null;

ratingButton.forEach(button => {
    button.addEventListener("click" ,  () =>{

        selectedBtn = button.textContent;

        document.getElementById('result').textContent= `You selected ${selectedBtn} out of 5`

    })
    
});


document.getElementById("Submit-btn").addEventListener("click" , ()=>{

    
    if(selectedBtn){
    document.getElementById("error").style.display = "none";

     document.getElementById("thank-you-container").style.display = "block";
     document.getElementById("rating-container").style.display = "none";
    }else{
        document.getElementById("error").style.display = "block";
    }
})

