//создает общую оболочку
let containerForAllKeyboard = document.createElement('div');
containerForAllKeyboard.className = 'container';
document.body.append(containerForAllKeyboard)

//создаем поле ввода
let textArea = document.createElement('textarea');
textArea.className = 'textarea'
textArea.rows = 10
textArea.cols = 126
textArea.placeholder = 'Type something...'
containerForAllKeyboard.append(textArea)
document.body.append(containerForAllKeyboard)

//создаем контейнер с клавишами клавиатуры
let keyboard = document.createElement('div')
keyboard.className = 'keyboard';
containerForAllKeyboard.append(keyboard)

//создаем наазвание перед клавиатурой
let titleKeyboard = document.createElement('h1')
titleKeyboard.className = 'title';
titleKeyboard.innerText = 'RSS Виртуальная клавиатура'
document.body.prepend(titleKeyboard)

//создаем подсказку для смены раскладки
let helpInfo = document.createElement('p')
helpInfo.className = 'help'
helpInfo.innerText = 'Для смены языка на Windows нажмите Ctrl + Alt'
document.body.append(helpInfo)

//создаем кнопки клавиатуры английской и русской раскладки

let keyboardBattonsEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't',
'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift',
'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▴', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◂', '▾', '▸', 'Ctrl'];

let keyboardBattonsRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 
'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 
'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▴', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◂', '▾', '▸', 'Ctrl']

let keyCodeEng = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 
'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 
'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 
'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 
'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 
'ArrowRight', 'ControlRight']

//создаем флаги

let [isCaps, isShift, isCtrl, flag] = [false, false, false, false];

let lang = 'en';

let key;
let keys = []

//создаем класс для кнопки

class Button {
    constructor(btn, text) {
        this.el = document.createElement('p')
        this.el.className = btn
        this.el.classList.add('button')
        this.el.innerText = text
        keyboard.append(this.el)
    }

    mouseMoveKeydown() {
        this.el.classList.add('active')
    }

    mouseMoveKeyup() {
        this.el.classList.remove('active');
        isShift = false
    }

    mouseMove() {
        this.el.addEventListener('mouseover', () => {
            this.mouseMoveKeydown()
        })

        this.el.addEventListener('mouseleave', () => {
            this.mouseMoveKeyup()
        })
    }

    clickKeyDown() {

        if(this.el.className == 'Button-Spacekey button active') {
            textArea.textContent += ' ';
            isCtrl = false;

        } else if (this.el.className == 'Button-Enterkey button active') {
            textArea.textContent += '\n';
            isCtrl = false;

        } else if (this.el.className == 'Button-CapsLockkey button active') {
            if (isCaps == false) {
                isCaps = true;
                this.el.style.background = 'linear-gradient(180deg, #82B375 0%, #B1DFA5 100%)'

            } else if (isCaps == true) {
                isCaps = false;
                this.el.style.background = 'linear-gradient(180deg, #9E9E9E 0%, #dbdbdb 100%)'
            }

            isCtrl = false;

        } else if (this.el.className == 'Button-Backspacekey button active') {
            textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length-1);
            isCtrl = false;

        } else if (this.el.className == 'Button-Shiftkey button active') {
            flag = true;
           isShift = true;
           isCtrl = false;

        } else if (this.el.className == 'Button-Ctrlkey button active') {
            isCtrl = true;

        } else if (this.el.className == 'Button-Altkey button active') {
            if(lang == 'en' && isCtrl == true) {
        
                lang = 'ru';
                //localStorage.removeItem('lang')
                //localStorage.setItem('lang', lang)
                //lang = localStorage.getItem('lang')
               // console.log(language, lang)

                keyboard.innerHTML = ``;
                keys = [];
                for(let i = 0; i < keyboardBattonsRu.length; i++) {
                    key = new Button(`Button-${keyboardBattonsEng[i]}key`, keyboardBattonsRu[i])
                    keys.push(key)
                }

                keys.forEach(k => {
                    k.mouseMove();
                    k.clickKey()                    
                }) 

            } else if (lang == 'ru' && isCtrl == true) {               
                lang = 'en'
                //localStorage.removeItem('lang')
                //localStorage.setItem('lang', lang)
                //lang = localStorage.getItem('lang')
               // console.log(language, lang)

                keyboard.innerHTML = ``;
                keys = []
                for(let i = 0; i < keyboardBattonsEng.length; i++) {
                    key = new Button(`Button-${keyboardBattonsEng[i]}key`, keyboardBattonsEng[i]);
                    keys.push(key)
                }

                keys.forEach(k => {
                    k.mouseMove();
                    k.clickKey()
                })
            }

            isCtrl = false;

        } else if(this.el.className == 'Button-Winkey button active' ||
        this.el.className == 'Button-Delkey button active') {
            textArea.textContent;
            isCtrl = false;

        } else if(this.el.className == 'Button-Tabkey button active') {
            textArea.textContent += '   ';
            isCtrl = false;

        } else {
            if (isCaps === true) {
                if(isShift === true || flag == true) {
                    textArea.textContent += this.el.textContent.toLowerCase()
                } else {
                    textArea.textContent += this.el.textContent.toUpperCase();
                }

               flag = false

            } else if (isCaps === false) {
                if(isShift === true || flag == true) {
                    textArea.textContent += this.el.textContent.toUpperCase();
                } else {
                    textArea.textContent += this.el.textContent.toLowerCase();
                }
                
                flag = false
            }

            isCtrl = false;
        }   
    }

    clickKey() {
        this.el.addEventListener('click', () => {
            this.clickKeyDown()
        })
    }
}

//Создаем кнопки английской или русской раскладки раскладки

function createButtons() {

    if(lang == 'en') {
        for(let i = 0; i < keyboardBattonsEng.length; i++) {
            key = new Button(`Button-${keyboardBattonsEng[i]}key`, keyboardBattonsEng[i]);
            keys.push(key)
        }
    } else if(lang == 'ru') {
        for(let i = 0; i < keyboardBattonsRu.length; i++) {
            key = new Button(`Button-${keyboardBattonsEng[i]}key`, keyboardBattonsRu[i])
        }
    }
}

window.localStorage.getItem('lang')

createButtons()

keys.forEach(k => {
    k.mouseMove();
    k.clickKey()
    
    
})

//связываем виртуальную клавиатуру с реальной

function keyAction() {
    document.addEventListener('keydown', key => {
        if (keyCodeEng.includes(key.code)) {
            let index = keyCodeEng.indexOf(key.code);
            
            keys[index].mouseMoveKeydown()
            keys[index].clickKeyDown()
        }
    })
    
    document.addEventListener('keyup', key => {
        if (keyCodeEng.includes(key.code)) {
            let index = keyCodeEng.indexOf(key.code);
            
            keys[index].mouseMoveKeyup()
        }
    })
}

keyAction()