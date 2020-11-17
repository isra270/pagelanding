/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/*create section 4*/
// let section4 = document.createElement('section')
// section4.setAttribute("id","section4")
// section4.setAttribute("data-nav","Section 3")
// let div1 = document.createElement("div")
// div1.setAttribute("class","landing__container")
// let heading = document.createElement("h2")
// heading.textContent='Section 4'
// let phar1 = document.createElement("p")
// phar1.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus'
// let phar2 = document.createElement("p")
// phar2.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentummetus faucibus'
//
// div1.appendChild(heading)
// div1.appendChild(phar1)
// div1.appendChild(phar2)
// section4.appendChild(div1)
// let fragramtsection = document.createDocumentFragment()
//
// let main= document.getElementsByTagName("main")
// fragramtsection.appendChild(section4)
// main.appendChild(fragramtsection)
// document.append(main,section4)

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section')
let ul = document.getElementById('navbar__list')
let fragramtLi = document.createDocumentFragment()


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//active link set active active and remove active link on other based on section active
function activeLink(activeSection){
     let links = document.querySelectorAll('a')
     let sectionData = activeSection.getAttribute('data-nav')
      for(let alink of links){
        alink.classList.remove('active_link')
        if(alink.textContent == sectionData){
            alink.classList.add('active_link')
            // console.log('active link',alink , 'content ===  ',alink.textContent  ,sectionData  )
         }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    sections.forEach(section => {
        let nameLink = section.getAttribute('data-nav')
        let sectionID = section.getAttribute('id')
        let li = document.createElement('li')
        let alink = document.createElement('a')
        // alink.setAttribute('href','#'+sectionID)
        alink.setAttribute('data-nav',sectionID)
        alink.textContent = nameLink
        alink.className = "menu__link"

        section.scrollIntoView({behavior:'smooth'})
        li.appendChild(alink)
        fragramtLi.appendChild(li)
    })
    ul.appendChild(fragramtLi)
}


// Scroll to anchor ID using scrollTO event
function scrollToClick() {
    ul.addEventListener('click', function (event) {
        const section = document.querySelector('#' + event.target.dataset.nav)
        const topPos = section.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
            top: topPos, // scroll so that the element is at the top of the view
            behavior: 'smooth' // smooth scroll
        })
        // Set sections as active
        sections.forEach(sectionel =>{
           if (sectionel.id !== section.id){
                sectionel.classList.remove('your-active-class')
            }
            //add active class to section active
            section.classList.add('your-active-class')
            activeLink(section)
        })
    })

}


function setActive(){
    window.addEventListener('scroll', function (event) {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect()
            // const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            if (rect.top >0 && rect.top <window.innerHeight){
                   setActiveSection(section)
            }
        })
    })
}

function setActiveSection(section){
    for(let sectionel of sections) {
        if (sectionel.id !== section.id) {
            sectionel.classList.remove('your-active-class')
        }
    }
            //add active class to section active
            section.classList.add('your-active-class')
            activeLink(section)
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav()
// Scroll to section on link click
scrollToClick()
//set section active
setActive()


