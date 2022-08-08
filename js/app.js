const PwEl = document.querySelector('#pw');
const copyEl = document.querySelector('#copy');

const lenEL = document.querySelector('#len');
const upperEl = document.querySelector('#upper');

const lowerEl = document.querySelector('#lower');
const symbolEl = document.querySelector('#symbol');

const generateEL = document.querySelector('#generate');

const numberEl = document.querySelector('#number');

const upperLetters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';

const numbers = '0123456789';

const symbol = '!@#$%^^&*(*())_+":?><~';

function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}
function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function getSymbol(){
    return symbol[Math.floor(Math.random() * symbol.length)]
}
function generatePassword(){
    const len = lenEL.value
    let password = '';
    for( let i = 0; i < len; i++){
        const x = generateX();
        password += x;
    }
    PwEl.innerText = password;
}
function generateX(){
    const xs = [];
    if (upperEl.checked){
        xs.push(getLowercase());
    }
    if(lowerEl.checked){
        xs.push(getLowercase())
    }
    if(numberEl.checked){
        xs.push(getNumber());
    }
    if (symbolEl.checked) {
        xs.push(getSymbol());
    }
    if (xs.length===0) return '';
        return xs[Math.floor(Math.random() * xs.length)]
    }

generateEL.addEventListener('click', generatePassword)
copyEl.addEventListener('click', ()=>{
    const textArea = document.createElement('textarea');
    const password = PwEl.innerText;
    if(!password){
        return
    }
    textArea.value = password;
    document.body.appendChild(textArea)
    textArea.select();

    document.execCommand('copy')
    textArea.remove()
    alert('password is copied to clipborad')

} )

