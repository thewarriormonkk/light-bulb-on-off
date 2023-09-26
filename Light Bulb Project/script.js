const bulbSwitch = document.querySelector('#switch');
const bulb = document.querySelector('#bulb');

bulbSwitch.addEventListener('click', () => {
    if (bulb.src.includes('off')) {
        bulb.src = 'images/pic_bulbon.gif';
        bulbSwitch.innerHTML = 'Turn Off'
    }
    else {
        bulb.src = 'images/pic_bulboff.gif';
        bulbSwitch.innerHTML = 'Turn On';
    }

});

