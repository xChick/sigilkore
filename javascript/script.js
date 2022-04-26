document.addEventListener('click', function (e) {
    // if (e.target !== ) return
    switch (e.target.innerText) {
        case 'Snapchat':
            console.log('Clicked button', e.target)
            window.open('https://www.snapchat.com/add/ihatedrew.com')
            break;
        case 'Instagram':
            console.log('Clicked button', e.target)
            window.open('https://instagram.com/hexxinhoes')
            break;
        case 'Soundcloud':
            console.log('Clicked button', e.target)
            window.open('https://soundcloud.com/qo8')
            break;
        case 'Steam':
            console.log('Clicked button', e.target)
            window.open('https://steamcommunity.com/id/orthodontist/')
            break;
        case 'Discord':
            console.log('Clicked button', e.target)
            window.open('https://discord.com/users/791088164080058371')
            break;
        case 'OGU':
            console.log('Clicked button', e.target)
            window.open('https://ogusers.com/sinzoom')
            break;
        default:
            console.log('Missed button', e.target)
            break;
    }
})