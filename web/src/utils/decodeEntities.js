function decodeEntities(str) {
  if (typeof document !== 'undefined') {
    const element = document.createElement('div')

    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '')
      element.innerHTML = str
      str = element.textContent
      element.textContent = ''
    //   console.log('poopsie')
    // } else {
    //   console.log('oopsie')
    //   str = 'oopsie'
    }

    return str
  }
}

export default decodeEntities 