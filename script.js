//создает общую оболочку
let containerForAllKeyboard = document.createElement('div');
containerForAllKeyboard.className = 'container';
document.body.append(containerForAllKeyboard)

//создаем поле ввода
let textArea = document.createElement('textarea');
textArea.className = 'textarea'
textArea.rows = 10
textArea.cols = 126
containerForAllKeyboard.append(textArea)


//создаем контейнер с клавишами клавиатуры
let keyboard = document.createElement('div')
keyboard.className = 'keyboard';
containerForAllKeyboard.append(keyboard)

//создаем кнопки клавиатуры английской и русской раскладки

let keyboardBattonsEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't',
'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift',
'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];

let keyboardBattonsRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 
'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 
'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'up', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']

//создаем класс для кнопки

class Button {
    constructor(btn, text) {
        this.el = document.createElement('p')
        this.el.className = btn
        this.el.classList.add('button')
        this.el.innerText = text
        keyboard.append(this.el)
    }
}


let isEnglish = true
//Создаем кнопки английской или русской раскладки раскладки

let key;

if(isEnglish) {
    for(let i = 0; i < keyboardBattonsEng.length; i++) {
        key = new Button(`Button-${keyboardBattonsEng[i]}key`, keyboardBattonsEng[i])
    }
} else {
    for(let i = 0; i < keyboardBattonsRu.length; i++) {
        key = new Button(`Button-${keyboardBattonsRu[i]}key`, keyboardBattonsRu[i])
    }
}


