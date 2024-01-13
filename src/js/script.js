const accodrions = document.querySelectorAll('.accordions__item-header');

function toogleIcon() {

    for (let i = 0; i < accodrions.length; i++) {
        const plus = accodrions[i].querySelector('.accordions__item-icon--plus');
        const minus = accodrions[i].querySelector('.accordions__item-icon--minus');
        const parent = accodrions[i].parentElement;
        const p = parent.querySelector('p');

        if (this == accodrions[i]) {
            continue;
        }

        plus.classList.remove('hidden');
        minus.classList.add('hidden');
        p.classList.remove('showAnimation');

    }

    const plus = this.querySelector('.accordions__item-icon--plus');
    const minus = this.querySelector('.accordions__item-icon--minus');
    const parent = this.parentElement;
    const p = parent.querySelector('p');

    if (minus.classList.contains('hidden')) {
        plus.classList.add('hidden');
        minus.classList.remove('hidden');
        p.classList.add('showAnimation');
        p.classList.remove('hideAnimation');
    }
    else {
        plus.classList.remove('hidden');
        minus.classList.add('hidden');
        p.classList.add('hideAnimation');
        p.classList.remove('showAnimation');
    }
}
function toogleIconKeyPress(e) {

    for (let i = 0; i < accodrions.length; i++) {
        const plus = accodrions[i].querySelector('.accordions__item-icon--plus');
        const minus = accodrions[i].querySelector('.accordions__item-icon--minus');
        const parent = accodrions[i].parentElement;
        const p = parent.querySelector('p');

        if (document.activeElement == accodrions[i].parentElement) {
            continue;
        }

        plus.classList.remove('hidden');
        minus.classList.add('hidden');
        p.classList.remove('showAnimation');

    }

    if (e.code == "Enter") {
        const plus = document.activeElement.querySelector('.accordions__item-icon--plus');
        const minus = document.activeElement.querySelector('.accordions__item-icon--minus');
        const p = document.activeElement.querySelector('p');


        if (minus.classList.contains('hidden')) {
            plus.classList.add('hidden');
            minus.classList.remove('hidden');
            p.classList.add('showAnimation');
            p.classList.remove('hideAnimation');
        }
        else {
            plus.classList.remove('hidden');
            minus.classList.add('hidden');
            p.classList.add('hideAnimation');
            p.classList.remove('showAnimation');
        }
    }


}

accodrions.forEach(e => {
    //console.log(e);
    e.addEventListener('click', toogleIcon);

});

document.addEventListener('keypress', toogleIconKeyPress)
