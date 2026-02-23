/* ----------------- Code logic for Job Application Tracker ----------------- */
// Step: 3.2 make arr for two state
let interviewList = [];
let rejectedList = [];
//Step: 6.1 check current status
let currentStatus = 'all';

// Step: 1 get total, interview and rejected
let total = document.getElementsByClassName('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

// Step: 3 get cards clild length
const cards = document.getElementById('cards');

// step: 5.1 main Container
const mainContainer = document.querySelector('main');

// step: 6.1 get card tab
const cardTab = document.getElementById('tab-card');

// step: 6.2 get filtered cards
const filteredCard = document.getElementById('filtered-cards')

//Step: 4.1 get tabs btn
const allTab = document.getElementById('all-tab')
const interviewTab = document.getElementById('interview-tab')
const rejectedTab = document.getElementById('rejected-tab')

// Step: 3.1 calculate count function
function calculateCount() {
    const cardsClild = cards.children.length;
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

    // set current status = id
    currentStatus = id;

    // console.log(allTab);
    // console.log(interviewTab);
    // console.log(rejectedTab);

    if (id === 'interview-tab') {
        cards.classList.add('hidden');
        cardTab.classList.remove('hidden');
        if (interviewList.length) {
            filteredCard.classList.remove('hidden');
            cardTab.classList.add('hidden');
            renderInterview()
        } else {
            filteredCard.classList.add('hidden')
        }

    } else if (id === 'rejected-tab') {
        cards.classList.add('hidden');
        cardTab.classList.remove('hidden')
        if (rejectedList.length) {
            filteredCard.classList.remove('hidden');
            cardTab.classList.add('hidden');
            renderRejected()
        } else {
            filteredCard.classList.add('hidden')
        }
    } else if (id === 'all-tab') {
        filteredCard.classList.add('hidden')
        cards.classList.remove('hidden')
        cardTab.classList.add('hidden')
    }

}

// Step: 5 we add event leistener on main tag so we can do event delegation
mainContainer.addEventListener('click', function (event) {
    // console.log(event);
    if (event.target.classList.contains('btn-interview')) {
        const parentNode = event.target.closest('.card');
        // console.log(parentNode)

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.btn-status');
        const description = parentNode.querySelector('.description').innerText;

        // update status btn
        parentNode.querySelector('.btn-status').innerText = 'Interview';

        status.classList.remove('btn-error', 'bg-[#EEF4FF]', 'bg-red-100')
        status.classList.add('btn-outline', 'btn-success', 'bg-green-100')

        // create an object and push particular arr
        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            status: "Interview",
            description
        }
        // console.log(cardInfo)

        const companyExist = interviewList.find(item => item.companyName === cardInfo.companyName);

        if (!companyExist) {
            interviewList.push(cardInfo);
            // console.log(interviewList)
        }

        // step: 7 remove if card has another tab
        // removing the dublicate job list from interview
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

        // after remove rerender the html
        if (currentStatus == 'rejected-tab') {
            renderRejected()
            if (rejectedList.length === 0) {
                filteredCard.classList.add('hidden');
                cardTab.classList.remove('hidden');
            }
        }

        calculateCount();

    } else if (event.target.classList.contains('btn-rejected')) {
        const parentNode = event.target.closest('.card');
        // console.log(parentNode)

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.btn-status');
        const description = parentNode.querySelector('.description').innerText;

        status.classList.remove('btn-success', 'bg-[#EEF4FF]', 'bg-green-100')
        status.classList.add('btn-outline', 'btn-error', 'bg-red-100')

        // update status btn
        parentNode.querySelector('.btn-status').innerText = 'Rejected';

        // create an object and push particular arr
        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            status: "Rejected",
            description
        }
        // console.log(cardInfo)

        const companyExist = rejectedList.find(item => item.companyName === cardInfo.companyName);

        if (!companyExist) {
            rejectedList.push(cardInfo);
            // console.log(rejectedList)
        }

        // step: 7 remove if card has another tab
        // removing the dublicate job list from interview
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

        // after remove rerender the html
        if (currentStatus == 'interview-tab') {
            renderInterview()
            if (interviewList.length === 0) {
                filteredCard.classList.add('hidden');
                cardTab.classList.remove('hidden');
            }
        }

        calculateCount();

        if (rejectedList.length === 0) {
            cardTab.classList.remove('hidden')
        }

    } else if (event.target.closest('.delete-btn')) {
        // step: 8  delele btn
        const button = event.target.closest('.delete-btn');
        const parentNode = button.closest('.card');

        const companyName = parentNode.querySelector('.companyName').innerText;

        // remove from interview & rejected list
        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        // show alert and delete
        alert(`You want to delete ${companyName} card`)
        parentNode.remove();

        calculateCount()

        if (cards.children.length === 0) {
            cardTab.classList.remove('hidden');
        }

        // render current tab if needed
        if (currentStatus === 'interview-tab') {
            renderInterview()
            if (interviewList.length === 0) {
                filteredCard.classList.add('hidden');
                cardTab.classList.remove('hidden');
            }
        } else if (currentStatus === 'rejected-tab') {
            renderRejected()
            if (rejectedList.length === 0) {
                filteredCard.classList.add('hidden');
                cardTab.classList.remove('hidden');
            }
        }

    }
});

// Step: 6 check ary length & rander card in tab section
function renderInterview() {
    // remove all thing every time 
    filteredCard.innerHTML = '';
    // console.log(cardTab.innerHTML)

    for (let interview of interviewList) {
        // console.log(interview);

        let div = document.createElement('div');
        div.innerHTML = `
                <div class="card p-6 bg-white border border-[#F1F2F4] shadow space-y-4">
                    <div class="flex justify-between items-center">
                        <div class="space-y-1">
                            <h3 class="companyName text-[#002C5C] text-xl sm:text-2xl md:text-[2rem] font-semibold">${interview.companyName}</h3>
                            <p class="position text-[#64748B]">${interview.position}</p>
                        </div>

                        <div>
                            <button class="delete-btn btn btn-circle text-[#64748B] border-2 border-[#F1F2F4] hover:border-red-500 hover:bg-red-100">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="text-[#64748B] text-sm"><span class="location">${interview.location}</span> • <span
                                class="type">${interview.type}</span> • <span class="salary">${interview.salary}</span></p>
                    </div>

                    <div class="space-y-2">
                        <button class="btn-status btn btn-outline btn-success bg-green-100 uppercase font-medium">${interview.status}</button>
                        <p class="description text-[#323B49] text-sm">${interview.description}</p>
                    </div>

                    <div class="space-x-2">
                        <button class="btn-interview btn btn-outline btn-success uppercase">interview</button>
                        <button class="btn-rejected btn btn-outline btn-error uppercase">Rejected</button>
                    </div>
                </div>
        `
        filteredCard.appendChild(div)
    }

}

function renderRejected() {
    // remove all thing every time 
    filteredCard.innerHTML = '';
    // console.log(cardTab.innerHTML)

    for (let rejected of rejectedList) {
        // console.log(interview);

        let div = document.createElement('div');
        div.innerHTML = `
                <div class="card p-6 bg-white border border-[#F1F2F4] shadow space-y-4">
                    <div class="flex justify-between items-center">
                        <div class="space-y-1">
                            <h3 class="companyName text-[#002C5C] text-xl sm:text-2xl md:text-[2rem] font-semibold">${rejected.companyName}</h3>
                            <p class="position text-[#64748B]">${rejected.position}</p>
                        </div>

                        <div>
                            <button class="delete-btn btn btn-circle text-[#64748B] border-2 border-[#F1F2F4] hover:border-red-500 hover:bg-red-100">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="text-[#64748B] text-sm"><span class="location">${rejected.location}</span> • <span
                                class="type">${rejected.type}</span> • <span class="salary">${rejected.salary}</span></p>
                    </div>

                    <div class="space-y-2">
                        <button class="btn-status btn btn-outline btn-error bg-red-100 uppercase font-medium">${rejected.status}</button>
                        <p class="description text-[#323B49] text-sm">${rejected.description}</p>
                    </div>

                    <div class="space-x-2">
                        <button class="btn-interview btn btn-outline btn-success uppercase">interview</button>
                        <button class="btn-rejected btn btn-outline btn-error uppercase">Rejected</button>
                    </div>
                </div>
        `
        filteredCard.appendChild(div)
    }

}
