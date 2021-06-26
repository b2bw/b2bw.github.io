const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'ga_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    const loadJs = url => {
        var script = document.createElement('script');
        script.src = url;
        script.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(script);
    }
    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('slideOut');
        loadJs('https://widget.raisenow.com/widgets/lema/bossc-92d4/js/dds-init-widget-de.js')
        loadJs('/js/raiseNow.js')
        setTimeout(() => {
            consentPopup.classList.add('hidden');
        }, 1000);
    }
    const dismissFn = event => {
        consentPopup.classList.add('slideOut');
        setTimeout(() => {
            consentPopup.classList.add('hidden');
        }, 1000);
    }
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');
    const dismissBtn = document.getElementById('dismiss');
    acceptBtn.addEventListener('click', acceptFn);
    dismissBtn.addEventListener('click', dismissFn);

    if (shouldShowPopup(storageType)) {
        console.log('should show popup is true');
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
        }, 2000);
    } else {
        loadJs('https://widget.raisenow.com/widgets/lema/bossc-92d4/js/dds-init-widget-de.js')
        loadJs('/js/raiseNow.js')
    }

};