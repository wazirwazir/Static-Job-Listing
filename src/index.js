// app.js
let dett;
document.addEventListener('DOMContentLoaded', () => {
    fetch('src/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const output = document.getElementById('output');
            dett = data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});







const filteredSpace = document.querySelector('.filtered')
const main = document.querySelector('main')

let clearBtn = document.querySelector('.clearBtn')
let searchArray = []
let sample = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
    },
    {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    },
    {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Ruby"],
        "tools": ["Sass"]
    },
    {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
    },
    {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
    },
    {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
    },
    {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
    },
    {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    }]
    let filteredJobs;
    const filterJobs = (jobs, terms) => {
        return jobs.filter(job => 
                terms.every(term => 
                    // Check if term matches role or level (which are strings)
                    job.role.toLowerCase().includes(term.toLowerCase()) || 
                    job.level.toLowerCase().includes(term.toLowerCase()) ||
                    // Check if term matches any language
                    job.languages.some(lang => lang.toLowerCase().includes(term.toLowerCase())) ||
                    // Check if term matches any tool
                    job.tools.some(tool => tool.toLowerCase().includes(term.toLowerCase()))
                )
            );
    };

    
    //Render containers
function renderJobs(e) {
    return e.map(conts => { 
        return ` 
            <div class="container">
                <img class="companyLogo" src="${conts.logo}" alt="user photo">
                <div class="info">
                <div class="first"> 
                    <span class="company">${conts.company}</span>
                    ${conts.new ? `<span class="new">NEW!</span>` : ''}
                    ${conts.featured ? `<span class="featured">FEATURED</span>` : ''}
            </div>
            <div class="position">${conts.position}</div>
            <div class="third">
                ${conts.postedAt}
                <div class="dotted"></div>${conts.contract}
                <div class="dotted"></div>${conts.location}
            </div>
            </div>
            <div class="divider"></div>
            <div class="btn">
                <button class="keys">${conts.role}</button>
                <button class="keys">${conts.level}</button>
                ${conts.languages.map(lang => `<button class="keys">${lang}</button>`).join('')}
                ${conts.tools.map(tool => `<button class="keys">${tool}</button>`).join('')}
            </div>
            </div>
            `}).join('')
    }
    let getter = renderJobs(sample)
    let gettest =      
    main.innerHTML = getter

    // Renders keywords
    function InsertKeyword(e) {
        const searchBox = document.querySelector('.search')
        const sea = document.createElement('div')
        const removeBtn = document.createElement('button')
        let keyword = `<p>${e.textContent}</p>`
        
        sea.classList.add('searchs')
        sea.innerHTML = keyword
        searchBox.append(sea)
        sea.append(removeBtn)

        removeBtn.classList.add('removeBtn')
        removeBtn.innerHTML = `<img src="images/icon-remove.svg" alt="remove-icon">`
        
        searchArray.push(e.textContent)

        //Remove keyword from search bar
        removeBtn.addEventListener('click', () => {
            const text = removeBtn.parentElement.querySelector('p').textContent
            searchArray = searchArray.filter(me => me !== text)
            removeBtn.parentElement.remove()
            filteredSpace.replaceWith(main)
        })

        filteredJobs = filterJobs(sample, searchArray)
    }
    
    // Inserts keyword in search
    let keys = document.querySelectorAll('.keys')
    keys.forEach(key => {
        key.addEventListener('click', () => {
            if  (!searchArray.includes(key.textContent)){
                InsertKeyword(key)
                
                filteredSpace.innerHTML = renderJobs(filteredJobs)
                keys = document.querySelectorAll('.keys')
                main.replaceWith(filteredSpace)
                console.log('pick')
            }
        })
    });

    clearBtn.addEventListener('click', () => {
        const searchBox = document.querySelector('search')
        const searchs = searchBox.querySelectorAll('.searchs')
        remove(searchs)
    })