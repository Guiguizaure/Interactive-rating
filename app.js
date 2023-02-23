// RATING 
const ratingBtn = [...document.getElementsByClassName('rating-btn')];
const ratingResult = document.querySelector('.rating-result');
console.log(ratingBtn)

printRatingResult(ratingResult);

function executeRating(btns, result) {
    const btnClassActive = "rating-btn is-active rating";
    const btnClassInactive = "rating-btn rating";
    const btnsLength = btns.length;
    let i;
    btns.map((btn) => {
        btn.onclick = () => {
            i = btns.indexOf(btn);

            if (btn.className.indexOf(btnClassInactive) !== -1) {
                printRatingResult(result, i + 1);
                for(i; i >= 0; --i) btns[i].className = btnClassActive;
            } else {
                printRatingResult(result, i);
                for (i; i < btnsLength; ++i) btns[i].className = btnClassInactive
            }
        }
    });
}

function printRatingResult(result, num = 0) {
    result.textContent = `You selected ${num} out of 5`;
}

executeRating(ratingBtn, ratingResult);


//SUBMIT BUTTON
const submitBtn = document.querySelector('.submit-btn');
const howModal = document.querySelector('#how-modal');
const thankyouModal = document.querySelector('#thankyou-modal');

submitBtn.addEventListener('click', () => {
    //set animation for closing the How modal when hitting the submit button
    howModal.setAttribute('closing', "");
    //set animation for opening the Thank You modal when hitting the submit button
    thankyouModal.setAttribute('open', "");

    //Once the animation end I want the How modal to disappear from the DOM
    howModal.addEventListener('animationend', () => {
        howModal.style.display = 'none';
    })
    //Once the animation end I want the open animation style to 
    //disappear from the Thankyou modal 
    thankyouModal.addEventListener('animationend', () => {
        thankyouModal.style.visibility = 'visible';
        thankyouModal.removeAttribute('open');
    })
    //I want to be able to close the modal when I click on Thank you!
    thankyouModal.addEventListener('click', (e) => {
        if(e.target.nodeName === "H2") {
            thankyouModal.style.display = 'none';
        }
    })
    });