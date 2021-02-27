import { change__button } from './header__btn'

export { calculator }
change__button()
// -------------------------Module-Variables---------------------------------------
var msg__error = document.getElementById('error'),
    div__error = document.getElementById('div__error'),
    msg = "",
    error__status = false
// -------------------------Module-Class---------------------------------------
class Calculator {
    displayValues(n) {
        if (result.innerText != '0' && result.innerText != "undefined") {
            result.innerText += n
        } else {
            result.innerText = n
        }
    }
    allClear() {
        result.innerText = "0"
    }
    del() {
        let values = result.innerText
        values = values.substring(0, values.length - 1)
        result.innerText = values
    }
    solve() {
        try {
            let values = result.innerText
            result.innerText = math.evaluate(values)   
        } catch (error) {
            if (error instanceof SyntaxError) {
                msg = "Check the syntax"
                error__status = true
            }
            if (error instanceof TypeError) {
                msg = "Pow needs the comma and exponent"
                error__status = true
            }
        } finally {
            if (error__status == true) {
                msg__error.innerText = msg
                error__status = false
                div__error.style.opacity = 1
                setTimeout(function(){
                  div__error.style.opacity = 0  
                }, 1500)
            } else {
            }

        }
    }
}

// -------------------------Module-Constant-Variables---------------------------------------
const result = document.getElementById('result'),
      buttons = document.querySelectorAll('#buttons button'),
      display__calculator = new Calculator(),
      key__input = document.getElementById('key__input')

// -----------------------Constant-Function-to-Export---------------------------------------
const calculator = () => {
    if (!msg__error) {
        return
    } else {
        msg__error.innerText = ""
    }
}
// ----------------------Module-Constant-&-Normal-Functions---------------------------------------
window.addEventListener('load', function() {
    let device = navigator.userAgent.toLowerCase()
    device = device.match(/mobile/i)
    if (device != null) {
        if (!key__input) 
            return
        else
            key__input.style.display = 'none'
    }
})

const buttons__action = (e) => {
    switch (e.target.id) {
        case "btn__0":
            display__calculator.displayValues(0)
            break;
        case "btn__1":
            display__calculator.displayValues(1)
            break;
        case "btn__2":
            display__calculator.displayValues(2)
            break;
        case "btn__3":
            display__calculator.displayValues(3)
            break;
        case "btn__4":
            display__calculator.displayValues(4)
            break;
        case "btn__5":
            display__calculator.displayValues(5)
            break;
        case "btn__6":
            display__calculator.displayValues(6)
            break;
        case "btn__7":
            display__calculator.displayValues(7)
            break;
        case "btn__8":
            display__calculator.displayValues(8)
            break;
        case "btn__9":
            display__calculator.displayValues(9)
            break;
        case "btn__solve":
            display__calculator.solve()
            break;
        case "btn__AC":
            display__calculator.allClear()
            break;
        case "btn__Del":
            display__calculator.del()
            break;
        case "btn__plus":
            display__calculator.displayValues('+')
            break;
        case "btn__minus":
            display__calculator.displayValues('-')
            break;
        case "btn__multiply":
            display__calculator.displayValues('*')
            break;
        case "btn__division":
            display__calculator.displayValues('/')
            break;
        case "btn__parenthL":
            display__calculator.displayValues('(')
            break;
        case "btn__parenthR":
            display__calculator.displayValues(')')
            break;
        case "btn__sqrt":
            display__calculator.displayValues('sqrt(')
            break;
        case "btn__pow":
            display__calculator.displayValues('pow(')
            break;
        case "btn__dot":
            display__calculator.displayValues('.')
            break;
        case "btn__comma":
            display__calculator.displayValues(',')
            break;
        default: return
            break;
    }
}

if (!key__input) {
} else {
    key__input.addEventListener('keydown', (e) => {
        switch (e.key) {
            case "0":
                display__calculator.displayValues(e.key)
                break;
            case "1":
                display__calculator.displayValues(e.key)
                break;
            case "2":
                display__calculator.displayValues(e.key)
                break;
            case "3":
                display__calculator.displayValues(e.key)
                break;
            case "4":
                display__calculator.displayValues(e.key)
                break;
            case "5":
                display__calculator.displayValues(e.key)
                break;
            case "6":
                display__calculator.displayValues(e.key)
                break;
            case "7":
                display__calculator.displayValues(e.key)
                break;
            case "8":
                display__calculator.displayValues(e.key)
                break;
            case "9":
                display__calculator.displayValues(e.key)
                break;
            case "Backspace":
                display__calculator.del()
                break;
            case "(":
                display__calculator.displayValues(e.key)
                break;
            case ")":
                display__calculator.displayValues(e.key)
                break;
            case "+":
                display__calculator.displayValues(e.key)
                break;
            case "-":
                display__calculator.displayValues(e.key)
                break;
            case "*":
                display__calculator.displayValues(e.key)
                break;
            case "/":
                display__calculator.displayValues(e.key)
                break;
            case ",":
                display__calculator.displayValues(e.key)
                break;
            case ".":
                display__calculator.displayValues(e.key)
                break;
            case "S":
                display__calculator.displayValues('sqrt(')
                break;
            case "P":
                display__calculator.displayValues('pow(')
                break;
            case "Enter":
                display__calculator.solve()
                break;
            default: return
                break;
        }
    });
}

buttons.forEach((button) => {
    button.addEventListener('click', buttons__action)
})