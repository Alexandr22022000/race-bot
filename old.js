// document.getElementsByClassName('columns')[0].getElementsByClassName('text')
// document.getElementsByClassName('columns')[0].getElementsByClassName('text')[0].getElementsByClassName('name')[0].getElementsByTagName('span')[0].innerText

//sum-panel__input--2FGMZ _state_error--2ZJ0n
//button--54u30 normal-bet--3r-PV _disabled--1hdBR

/*const { Chromeless } = require('chromeless');

const chromeless = new Chromeless({ launchChrome: true, implicitWait: true, waitTimeout: 25000 });

chromeless
    .goto('https://www.fonbet.ru/live/horse-racing/')
    .wait(2000)
    .evaluate(async () => {
        let races = Array.from(document.getElementsByClassName('table__row'));

        races = races.map(element => {
            const button = element.getElementsByClassName('icon _type_normal _icon_channel');
            if (button.length === 0) return;

            const text = element.getElementsByClassName('table__match-title-text')[0].innerText;
            if (text !== 'забег 8 Пинджарра') return;

            button.click();
        });

        setTimeout(() => {
            document.getElementsByClassName('line-mc__frame--1AID4')[0]

        }, 3000)
    });*/
