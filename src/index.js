

document.addEventListener('DOMContentLoaded', () => {
    fetch('src/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            main.innerHTML = renderJobs(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});



const main = document.querySelector('main')

let searchArray = []

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
        })
        // Update filtergggguik
        filteredJobs = filterJobs(sample, searchArray)
    }
    
  // Inserts keyword in search
    const keys = document.querySelectorAll('.keys')
    keys.forEach(key => {
        key.addEventListener('click', () => {
            if  (!searchArray.includes(key.textContent)){
                InsertKeyword(key)
                console.log('pick')
               //main.innerHTML = renderJobs(filteredJobs)
            }
        })
    });