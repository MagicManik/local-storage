// function: 01 (button er vetor input neoya hoyeche)
const bagButton = () => {
    const input = document.getElementById('input-field');
    const inputValue = input.value;

    // jodi user input value na diye button e press kore. tahole user ke alert kore diye function ekhanei off hoye jabe
    if (!inputValue) {
        alert('Please fill the input value');
        return;
    }

    // clear input field
    input.value = '';

    // called function 2 and 4
    displayValue(inputValue);
    setStorage(inputValue);
}

// function: 02 (input ke ui te dekhano hoyeche) 
const displayValue = inputValue => {
    const displayUI = document.getElementById('display-ui');
    const ul = document.createElement('ul');
    ul.innerHTML = `
        <li>${inputValue}</li>
    `
    displayUI.appendChild(ul);
}


// function: 03 (check korbo object storage e ache kina. thakle setake parse kore return korbo. na thakle notun object create kore otake return korbo)
const getObject = () => {
    const cart = localStorage.getItem('cart');
    let object;
    // "cart" object thakle setake JSON parse kore object er value set korbe
    if (cart) {
        const cartParse = JSON.parse(cart);
        object = cartParse;
    }
    // storage e "cart" object na thakle cart name ekta empty object create korbe;
    else {
        object = {};
    }
    return object;
}


// function: 4 (function: 03 ke call kore Object nibo. tarpor object er property set korbo). (function er parameter hisebe input value nibo)
const setStorage = key => {
    // called function 3
    const object = getObject();

    // create object property
    if (object[key]) {
        //jodi object er moddhe property thake tahole tar valur sathe 1 jog korbe
        object[key] = object[key] + 1;
    }
    // jodi object er modde property na thake tahole property create korbo
    else {
        object[key] = 1;
    }

    // stringified object
    const stringifiedObject = JSON.stringify(object);

    // setItem('objectName', objectProperty);
    localStorage.setItem('cart', stringifiedObject);
}



// function: 05
const displayStorageObject = () => {

    // function 3 theke parse kora objectgulo neoya hocche
    const storageObjects = getObject();

    // objects er upor for in loop chalano hocche
    for (const storageObject in storageObjects) {
        displayValue(storageObject);
    }
}
displayStorageObject();



// function: 06
const confirmOrder = () => {
    // when click confirm button click ui and store
    const displayUi = document.getElementById('display-ui');
    displayUi.textContent = '';
    localStorage.removeItem('cart');
}