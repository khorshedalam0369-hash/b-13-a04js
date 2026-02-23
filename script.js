//  primary data
let jobs = [
    { 
        id: 1, 
        companyName: "Mobile First Corp", 
        position: "React Native Developer", 
        location: "Remote", 
        type: "Full-time", 
        salary: "$100,000 - $110,000", 
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", 
        status: "NOT APPLIED" },
    { 
        id: 2, 
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer", 
        location: "Los Angeles, CA", 
        type: "Part-time", 
        salary: "$80,000 - $100,000", 
        
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", 
        status: "NOT APPLIED" },
    { 
        id: 3, 
        companyName: "DataViz Solutions", 
        position: "Data Visualization Specialist", 
        location: "Boston, MA", 
        type: "Full-time", 
        salary: "$120,000 - $140,000", 
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", 
        status: "NOT APPLIED" },
    { 
        id: 4, 
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA", 
        type: "Full-time", 
        salary: "$140,000 - $150,000", 
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", 
        status: "NOT APPLIED" },
    { 
        id: 5, 
        companyName: "Innovation Labs", 
        position: "UI/UX Engineer", 
        location: "Austin, TX", 
        type: "Full-time", 
        salary: "$110,000 - $130,000", 
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", 
        status: "NOT APPLIED" },
    { 
        id: 6, 
        companyName: "MegaCorp Solutions", 
        position: "JavaScript Developer", 
        location: "New York, NY", 
        type: "Full-time", 
        salary: "$130,000 - $170,000", 
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", 
        status: "NOT APPLIED" },
    { 
        id: 7, 
        companyName: "StartupXYZ", 
        position: "Full Stack Engineer", 
        location: "Remote", 
        type: "Full-time", 
        salary: "$120,000 - $150,000", 
        description: "Join our fast-growing startup and work on our core platform. Experience with Next.js and React required. Great benefits and equity package included.", 
        status: "NOT APPLIED" },
    { 
        id: 8, 
        companyName: "TechCorp Industries", 
        position: "Senior Frontend Developer", 
        location: "San Francisco, CA",
        type: "Full-time", 
        salary: "$150,000 - $180,000", 
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", 
        status: "NOT APPLIED" }
];

// DOM manipulation
const jobsList = document.getElementById('jobs-list');
const totalCountEl = document.getElementById('total-count');
const jobsCountEl = document.getElementById('jobs-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');

// Dashboard update function
function updateDashboard() {
    const interviewCount = jobs.filter(job => job.status === "INTERVIEW").length;
    const rejectedCount = jobs.filter(job => job.status === "REJECTED").length;

    totalCountEl.innerText = jobs.length;
    interviewCountEl.innerText = interviewCount;
    rejectedCountEl.innerText = rejectedCount;
}


// Status update function with Toggle
function updateStatus(jobId, newStatus) {
    const jobIndex = jobs.findIndex(job => job.id === jobId);
    if (jobIndex !== -1) {
        jobs[jobIndex].status = newStatus;
        updateDashboard();
        
        const activeTabText = document.querySelector('.btn-active-tab').innerText;
        handleTabFilter(activeTabText);
    }
}



// Filter logic
function handleTabFilter(tabText) {
    if (tabText === "All") {
        renderJobs(jobs);
    } else if (tabText === "Interview") {
        renderJobs(jobs.filter(job => job.status === "INTERVIEW"));
    } else if (tabText === "Rejected") {
        renderJobs(jobs.filter(job => job.status === "REJECTED"));
    }
}

// Delete job function
function deleteJob(jobId) {
    jobs = jobs.filter(job => job.id !== jobId);
    updateDashboard();
    
    const activeTabText = document.querySelector('.btn-active-tab').innerText;
    handleTabFilter(activeTabText);
}

//  main function
function renderJobs(jobsToRender) {
    jobsList.innerHTML = "";

    if (jobsToRender.length === 0) {
        jobsList.innerHTML = `
            <div class="flex flex-col items-center justify-center bg-white border border-[#f1f2f4] rounded-lg p-20 text-center">
                <img src="./assets/jobs.png" alt="No jobs" class="mb-4">
                <h4 class="text-2xl font-semibold text-[#002c5c] mb-2">No jobs available</h4>
                <p class="text-[#64748b]">Check back soon for new job opportunities</p>
            </div>`;
        jobsCountEl.innerText = 0;
        return;
    }

    jobsToRender.forEach(job => {
        const card = document.createElement('div');
        card.className = "bg-white border border-[#f1f2f4] p-6 rounded-lg shadow-sm relative mb-4";
        
        let statusClass = "bg-[#eef4ff] text-[#002c5c]";
        if(job.status === "INTERVIEW") statusClass = "border border-[#10b981] text-[#10b981]";
        if(job.status === "REJECTED") statusClass = "border border-[#ef4444] text-[#ef4444]";

        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h3 class="text-lg font-semibold text-[#002c5c]">${job.companyName}</h3>
                    <p class="text-[#64748b] text-base">${job.position}</p>
                </div>
                <button onclick="deleteJob(${job.id})" class="p-2 border border-[#f1f2f4] rounded-full hover:bg-red-50">
                    <img src="./assets/delete.png" alt="Delete" class="w-4 h-4">
                </button>
            </div>
            
            <div class="flex flex-wrap gap-x-4 gap-y-1 text-[#64748b] text-sm mb-4">
                <span>${job.location}</span><span>•</span><span>${job.type}</span><span>•</span><span>${job.salary}</span>
            </div>

            <div class="inline-block px-3 py-1 rounded ${statusClass} text-sm font-semibold mb-4">
                ${job.status}
            </div>

            <p class="text-[#323b49] text-sm mb-6 leading-relaxed">${job.description}</p>

            <div class="flex gap-3">
                <button onclick="updateStatus(${job.id}, 'INTERVIEW')" class="px-4 py-2 border border-[#10b981] text-[#10b981] rounded text-sm font-semibold hover:bg-[#10b981] hover:text-white transition-all">INTERVIEW</button>
                <button onclick="updateStatus(${job.id}, 'REJECTED')" class="px-4 py-2 border border-[#ef4444] text-[#ef4444] rounded text-sm font-semibold hover:bg-[#ef4444] hover:text-white transition-all">REJECTED</button>
            </div>
        `;
        jobsList.appendChild(card);
    });

    jobsCountEl.innerText = jobsToRender.length;
}

// Tab Button
document.querySelectorAll('#tab-container button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('#tab-container button').forEach(btn => btn.classList.remove('btn-active-tab'));
        this.classList.add('btn-active-tab');
        handleTabFilter(this.innerText);
    });
});



// Initial run
updateDashboard();
renderJobs(jobs);