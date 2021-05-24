export { header }
export { change__button }

// -------------------------Module-Constant-Variables---------------------------------------
const header__btn = document.getElementById('header__btn'),
      header__title = document.getElementById('header__title'),
      header__calculators = document.getElementById('header__calculators'),
      header__link = document.querySelectorAll('#header__title h1'),
      header__img = document.querySelectorAll("#header__img img"),
      hover = document.getElementById('hover'),
      Currentlocation = window.location

// -----------------------Constant-Functions-to-Export---------------------------------------
const header = () => {
    if (!header__btn) {
        return
    } else {
            header__btn.addEventListener('click', (e) => {
                header__title.classList.toggle("header__title--withRadius")
                header__calculators.classList.toggle("header__calculators--selected")
                header__btn.classList.toggle("header__btn--selected")
                hover.classList.toggle("hover--selected")
            })
        }
    }

const change__button = () => {
    if (Currentlocation.href == "http://127.0.0.1/calculators/index" || Currentlocation.href == "http://localhost/calculators/index" 
    || Currentlocation.href == "http://localhost/calculators/" || Currentlocation.href == "http://127.0.0.1/calculators/") {
        var change = document.getElementById('Change'),
            howtoUse = document.getElementById('howToUse')
        change.addEventListener('click', (e) => {
            header__title.classList.toggle("header__title--withRadius")
            header__calculators.classList.toggle("header__calculators--selected")
            header__btn.classList.toggle("header__btn--selected")
            hover.classList.toggle("hover--selected")
        })
        howtoUse.addEventListener('click', (e) => {
            load__page('/calculators/assets/pags/howToUse')
        })
    } else {}
}
// -------------------------Module-Constant-Functions---------------------------------------

const load__page = (url) => {
    window.location.assign(url)
}

const link__action = (e) => {
    switch (e.target.id) {
        case "Scientific":
                load__page('/calculators/assets/pags/scientific')
            break;
        case "Binary":
                load__page('/calculators/assets/pags/binary')
            break;
        case "Currency":
                load__page('/calculators/assets/pags/currency')
            break;
        case "Matrix":
                load__page('/calculators/assets/pags/matrix')
            break;    
        default: load__page('/calculators/index')
            break;
    }
}

const img__action = (e) => {
    switch (e.target.id) {
        case "github":
                load__page('/calculators/assets/pags/github')
            break;
        case "calculator":
                load__page('/calculators/index')
            break;
        default: load__page('/calculators/assets/pags/aboutme')
            break;
    }
}

header__link.forEach((h1) => {
    h1.addEventListener('click', link__action)
})

header__img.forEach((img) => {
    img.addEventListener('click', img__action)
})