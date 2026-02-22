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

// step: 5.1 main Container
const mainContainer = document.querySelector('main');

//Step: 4.1 get tabs btn
const allTab = document.getElementById('all-tab')
const interviewTab = document.getElementById('interview-tab')
const rejectedTab = document.getElementById('rejected-tab')

// Step: 3.1 calculate count function
function calculateCount() {
    // Step: 2 here we need to update total in 2 places so i create a loop and update total value
    for (const element of total) {
        element.textContent = cardsClild;
    }
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length
}
calculateCount()

//Step: 4 toggle
function toggle(id) {
    // add all text color
    allTab.classList.add('text-[#64748B]');
    interviewTab.classList.add('text-[#64748B]');
    rejectedTab.classList.add('text-[#64748B]');

    // removing all btn bg color and text color
    allTab.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewTab.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedTab.classList.remove('bg-[#3B82F6]', 'text-white');

    // get id from param
    const selected = document.getElementById(id)

    // adding & removing text color and add bg + text color for current button
    selected.classList.remove('text-[#64748B]')
    selected.classList.add('bg-[#3B82F6]', 'text-white');

    // console.log(allTab);
    // console.log(interviewTab);
    // console.log(rejectedTab);
}

// Step: 5 we add event leistener on main tag so we can do event delegation
mainContainer.addEventListener('click', function(event) {
    // console.log(event);
    
})
