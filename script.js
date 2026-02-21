/* ----------------- Code logic for Job Application Tracker ----------------- */
// Step: 3.2 make arr for two state
let interviewList = [];
let rejectedList = [];

// Step: 1 get total, interview and rejected
let total = document.getElementsByClassName('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

// Step: 3 get cards clild length
const cards = document.getElementById('cards');
const cardsClild = cards.children.length;


// Step: 3.1
function calculateCount() {
    // Step: 2 here we need to update total in 2 places so i create a loop and update total value
    for (const element of total) {
        element.textContent = cardsClild;
    }
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length
}
calculateCount()
