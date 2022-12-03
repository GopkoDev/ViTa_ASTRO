
export const setLanguageCookie = (cookieName, cookieValue) => {
    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000))
    const expirationDate = `expires=${date.toUTCString}`
    document.cookie = `${cookieName}=${cookieValue};${expirationDate}`  
}

export const readLanguageCookie = () => {
    let result;
    const cookiesDecoded = decodeURIComponent(document.cookie);
    const cookiesArray = cookiesDecoded.split('; ');

    cookiesArray.forEach(cookie => {
        if(cookie.indexOf("language")===0) result = cookie.substring(8)
    })

    return result
}