let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-btn'
let total = document.getElementById('totalCount');
let interview = document.getElementById('interviewCount');
let rejected = document.getElementById('rejectedCount');
const allJobs = document.getElementById('allJobs');
const mainContainer = document.querySelector('main');
const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');
const filterSection = document.getElementById('filtered-section');
const jobCount = document.getElementById('jobCountText');


// Count Function 01
function count() {
    total.innerText = allJobs.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;

}
count();
changeJobCount();



// change job count function

function changeJobCount() {
    const totalJobs = allJobs.children.length;

    if (currentStatus === 'all-btn') {
        jobCount.innerText = `${totalJobs} jobs`;
    }
    else if (currentStatus === 'interview-btn') {
        jobCount.innerText = `${interviewList.length} of ${totalJobs} jobs`;
    }
    else if (currentStatus === 'rejected-btn') {
        jobCount.innerText = `${rejectedList.length} of ${totalJobs} jobs`;
    }
}



// All jobs button function

function toggleAllJobsBtn(id) {
    allBtn.classList.add('text-[#64748B]', 'bg-white');
    interviewBtn.classList.add('text-[#64748B]', 'bg-white');
    rejectedBtn.classList.add('text-[#64748B]', 'bg-white');

    allBtn.classList.remove('text-white', 'bg-[#3B82F6]');
    interviewBtn.classList.remove('text-white', 'bg-[#3B82F6]');
    rejectedBtn.classList.remove('text-white', 'bg-[#3B82F6]');

    const selected = document.getElementById(id);
    currentStatus = id


    selected.classList.remove('text-[#64748B]', 'bg-white');
    selected.classList.add('text-white', 'bg-[#3B82F6]');

    if (id == 'interview-btn') {
        allJobs.classList.add('hidden')
        filterSection.classList.remove('hidden')
        interviewListRender()
        count();
        changeJobCount()
    }
    else if (id == 'all-btn') {
        allJobs.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if (id == 'rejected-btn') {
        allJobs.classList.add('hidden')
        filterSection.classList.remove('hidden')
        rejectedListRender()
        count();
        changeJobCount()
    }
    changeJobCount()
}

// function 03

mainContainer.addEventListener('click',
    function (event) {
        if (event.target.classList.contains('interview-btn-2')) {
            const parentNode = event.target.parentNode.parentNode;
            const statusBar = parentNode.querySelector('.status-bar');
            statusBar.innerText = 'INTERVIEW'
            statusBar.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]');
            statusBar.classList.add(
                'text-green-500',
                'border',
                'border-green-500',
                'bg-white',
                'font-semibold',
                'rounded-md'
            );


            const jobTitle = parentNode.querySelector('.jobTitle').innerText;
            const jobPosition = parentNode.querySelector('.job-position').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const status = parentNode.querySelector('.status-bar').innerText;
            const skills = parentNode.querySelector('.skills').innerText;

            const cardInfo = {
                jobTitle,
                jobPosition,
                salary,
                status,
                skills
            }
            const cardExist = interviewList.find(item => item.jobTitle == cardInfo.jobTitle);
            if (!cardExist) {
                interviewList.push(cardInfo);
            }
            rejectedList = rejectedList.filter(item => item.jobTitle != cardInfo.jobTitle);
            if (currentStatus == 'rejected-btn') {
                rejectedListRender();
            }
            count();
            changeJobCount();
        }
        else if (event.target.classList.contains('rejected-btn-2')) {
            const parentNode = event.target.parentNode.parentNode;
            const statusBar = parentNode.querySelector('.status-bar');
            statusBar.innerText = 'REJECTED'
            statusBar.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]');
            statusBar.classList.add(
                'text-red-500',
                'border',
                'border-red-500',
                'bg-white',
                'font-semibold',
                'rounded-md'
            );


            const jobTitle = parentNode.querySelector('.jobTitle').innerText;
            const jobPosition = parentNode.querySelector('.job-position').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const status = parentNode.querySelector('.status-bar').innerText;
            const skills = parentNode.querySelector('.skills').innerText;

            const cardInfo = {
                jobTitle,
                jobPosition,
                salary,
                status,
                skills
            }
            const cardExist = rejectedList.find(item => item.jobTitle == cardInfo.jobTitle);
            if (!cardExist) {
                rejectedList.push(cardInfo);
            }
            interviewList = interviewList.filter(item => item.jobTitle != cardInfo.jobTitle);
            if (currentStatus == 'interview-btn') {
                interviewListRender();
            }
            count();
            changeJobCount();
        }
        else if (event.target.classList.contains('fa-trash-can')) {

            const parentNode = event.target.parentNode.parentNode.parentNode;
            const jobTitle = parentNode.querySelector('.jobTitle').innerText;

            interviewList = interviewList.filter(item => item.jobTitle !== jobTitle)

            rejectedList = rejectedList.filter(item => item.jobTitle !== jobTitle)
            const allJobss = document.querySelectorAll('#allJobs .card-container');
            for (let job of allJobss) {
                const title = job.querySelector('.jobTitle').innerText;
                if (title === jobTitle) {
                    job.remove();
                }
            }
            if (currentStatus === 'interview-btn') {
                interviewListRender();
            }
            if (currentStatus === 'rejected-btn') {
                rejectedListRender();
            }

            count();
            changeJobCount();
        }
    }

);

// empty message function 

function emptyMessage() {
    filterSection.innerHTML = `
        <div class="text-center bg-white p-20 rounded-lg">
            <img src="image/assignment_7959593 1.png" 
                 class="mx-auto w-[100px] mb-4" />
            <h2 class="text-2xl font-semibold text-[#002C5C]">
                No jobs available
            </h2>
            <p class="text-[#64748B] mt-2">Check back soon for new job opportunities</p>
        </div>
    `
}


// render interview function
function interviewListRender() {
    if (interviewList.length === 0) {
        emptyMessage()
        return;
    }


    filterSection.innerHTML = '';
    for (let interview of interviewList) {
        console.log(interview);
        console.log(interviewList);
        let newDiv = document.createElement('div');
        newDiv.className = 'flex justify-between bg-white p-6 rounded-lg';
        newDiv.innerHTML = `
                  <div class="space-y-5">
                    <div>
                        <h3 class="jobTitle text-[18px] font-semibold text-[#002C5C]">${interview.jobTitle}</h3>
                        <p class="job-position text-[#64748B]">${interview.jobPosition}</p>
                    </div>
                    <div>
                        <p class="salary text-[#64748B]">${interview.salary}</p>
                    </div>
                    <div>
                        <button class="status-bar py-1 px-2 text-[12px] text-green-500 border border-green-500 bg-white font-semibold rounded-md">
                        ${interview.status}
                    </button>
                        <p class="skills text-[#323B49] text-[14px]">${interview.skills}</p>
                    </div>
                    <div class="flex gap-2">
                        <button
                            class="interview-btn-2 btn px-2 py-3 text-green-500 font-semibold rounded-md border border-green-500 bg-white">INTERVIEW</button>
                        <button
                            class="rejected-btn-2 btn px-2 py-3 text-red-500 font-semibold rounded-md border border-red-500 bg-white">REJECTED</button>
                    </div>
                </div>
                <!-- 2nd -->
                <div>
                    <span class="border border-gray-300 p-[10px] rounded-full">
                        <i class="fa-solid fa-trash-can"></i>
                    </span>
                </div>
        `
        filterSection.appendChild(newDiv);
    }
}


// render rejected function

function rejectedListRender() {
    if (rejectedList.length === 0) {
        emptyMessage()
        return;
    }


    filterSection.innerHTML = '';
    for (let rejected of rejectedList) {
        let newDiv = document.createElement('div');
        newDiv.className = 'card-container flex justify-between bg-white p-6 rounded-lg';
        newDiv.innerHTML = `
                  <div class="space-y-5">
                    <div>
                        <h3 class="jobTitle text-[18px] font-semibold text-[#002C5C]">${rejected.jobTitle}</h3>
                        <p class="job-position text-[#64748B]">${rejected.jobPosition}</p>
                    </div>
                    <div>
                        <p class="salary text-[#64748B]">${rejected.salary}</p>
                    </div>
                    <div>
                        <button class="status-bar py-1 px-2 text-[12px] text-red-500 border border-red-500 bg-white font-semibold rounded-md">
                        ${rejected.status}
                    </button>
                        <p class="skills text-[#323B49] text-[14px]">${rejected.skills}</p>
                    </div>
                    <div class="flex gap-2">
                        <button
                            class="interview-btn-2 btn px-2 py-3 text-green-500 font-semibold rounded-md border border-green-500 bg-white">INTERVIEW</button>
                        <button
                            class="rejected-btn-2 btn px-2 py-3 text-red-500 font-semibold rounded-md border border-red-500 bg-white">REJECTED</button>
                    </div>
                </div>
                <!-- 2nd -->
                <div>
                    <span class="border border-gray-300 p-[10px] rounded-full">
                        <i class="fa-solid fa-trash-can"></i>
                    </span>
                </div>
        `
        filterSection.appendChild(newDiv);
    }
}