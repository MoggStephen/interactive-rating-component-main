let selected = false;

//GET CONTAINER
const ratingBtnContainer = document.getElementById("rating-button-container");

//ADD RATING BUTTONS TO DOM!
for (let i = 0; i < 5; i++) {
    const ratingBtn = document.createElement("button");

    ratingBtn.classList.add("rating-btn");
    ratingBtn.textContent = i + 1;

    ratingBtnContainer.appendChild(ratingBtn);
}

//SELECTED RATING LOGIC
const buttons = document.querySelectorAll("button.rating-btn");
buttons.forEach(button =>{
    button.addEventListener("click", (event)=>{

        //allow submit btn to change to thank you element
        selected = true;

        //RESET ALL BUTTONS SELECTED CLASSLIST
        buttons.forEach(button => {
            button.classList.remove("selected")
        })

        //Set rating with buttons text content
        const userRating = document.getElementById("user-rating");
        userRating.textContent = parseInt(button.textContent);
    })
})

//CHANGE DISPLAY VALUES TO SHOW THANK YOU CONTAINER
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (event) => {

    //Quick if logic to figure out if user has selected a rating!
    if(selected !== false){
        const ratingContainer = document.getElementById("rating-container-show");
        const thankYouContainer = document.getElementById("thank-you-container-none");

        ratingContainer.id = "rating-container-none";
        thankYouContainer.id = "thank-you-container-show";
    }
    else{
        alert("You have not selected a rating!");
    }
})