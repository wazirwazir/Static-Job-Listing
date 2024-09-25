
const main = document.querySelector('main')
let removeBtns;
let buttons = main.querySelectorAll('button')
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


    

    let getter = sample.map(conts => { 
        return ` 
        <div class="container">
            <img class="companyLogo" src="${conts.logo}" alt="user photo">
            <div class="info">
                <div class="first"> 
                    <span class="company">${conts.company}</span>
                    <span class="new ${conts.new}">NEW!</span>
                    <span class="featured ${conts.featured}">FEATURED</span>
                </div>
                <div class="position">${conts.position}</div>
                <div class="third">
                    ${conts.postedAt}<div class="dotted"></div>${conts.contract}<div class="dotted"></div>${conts.location}</div>
                </div>
                <div class="divider"></div>
                <div class="btn">
                <button class="keys">${conts.role}</button>
                <button class="keys">${conts.level}</button>
                ${conts.languages.map(lang => {
                    return `
                    <button class="keys">${lang}</button>`
                    }).join('')}
                ${conts.tools.map(tool => {
                    return `
                    <button class="keys">${tool}</button>`
                    }).join('')}
            </div>
            </div>
            
        </div>
        `}).join('')

    main.innerHTML = getter

    function InsertKeyword(e) {
        const searchBox = document.querySelector('.search')
        const sea = document.createElement('div')
        sea.classList.add('searchs')
        
        let keyword = `<p>${e.textContent}</p>
                <button class="removeBtn"><img src="images/icon-remove.svg" alt="remove-icon"></button>
            `
            sea.innerHTML = keyword
        searchBox.append(sea)
        searchArray.push(e.textContent)
        removeKeyword()
    }
    //let there = searchArray.filter(me => me !== 'CSS')
    const keys = document.querySelectorAll('.keys')
    keys.forEach(key => {
        key.addEventListener('click', () => {
            if  (!searchArray.includes(key.textContent)){
                InsertKeyword(key)
            }
        })
    });
    function removeKeyword() {
        if (removeBtns) {
            removeBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove()
                    console.log('me')
                })
            });
            } 
    }
    
    
/* 
    function filterConts() {
        const container = document.querySelectorAll('.container')
        container.forEach(cont => {
            let btns = cont.querySelectorAll('button')
            btns.forEach(btn => {
            
                let bike =  [...btns].filter(item => 
                    searchArray.every(term =>
                        item.includes(term)
                    )
                )
                console.log(bike)
            });
        });
    } 
    function protsearch(array, searchterms) {
    return array.filter(item => 
        searchterms.every(term =>
            item.includes(term)
        )
    )
} */
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        werter(btn)
    })
});

    function werter(e) {
        if(!searchArray.includes(e.textContent)){
        e.parentElement.parentElement.classList.add('false')
        console.log(e.parentElement.parentElement.classLis)
    }}
    