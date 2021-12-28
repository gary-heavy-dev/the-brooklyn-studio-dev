import urlForImage from './urlForImage'

const gImageMap = (source, sizes, data) => {
  const defaultSizes = {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1440,
    hd: 1920,
    fourK: 3840
  }

  const s = {
    ...defaultSizes,
    ...sizes
  }

  console.log(source.alt, s)

  // const mappedSrcset = urlForImage(source, data).width(s.mobile).auto('format').toString() + ' 240w,' +
  //                     urlForImage(source, data).width(s.tablet).auto('format').toString() + ' 481w, ' +
  //                     urlForImage(source, data).width(s.laptop).auto('format').toString() + ' 769w, ' +
  //                     urlForImage(source, data).width(s.desktop).auto('format').toString() + ' 1025w, ' +
  //                     urlForImage(source, data).width(s.hd).auto('format').toString() + ' 1441w, ' +
  //                     urlForImage(source, data).width(s.fourK).auto('format').toString() + ' 2301w'

  const mappedSrcset = urlForImage(source, data).width(s.mobile).auto('format').toString() + ' ' + s.mobile + 'w,' +
                      urlForImage(source, data).width(s.tablet).auto('format').toString() + ' ' + s.tablet + 'w, ' +
                      urlForImage(source, data).width(s.laptop).auto('format').toString() + ' ' + s.laptop + 'w, ' +
                      urlForImage(source, data).width(s.desktop).auto('format').toString() + ' ' + s.desktop + 'w, ' +
                      urlForImage(source, data).width(s.hd).auto('format').toString() + ' ' + s.hd + 'w, ' +
                      urlForImage(source, data).width(s.fourK).auto('format').toString() + ' ' + s.fourK + 'w'

  // const mappedSizes = '(min-width: 481px) ' + s.tablet +
  //                     'px, (min-width: 769px) ' + s.laptop +
  //                     'px, (min-width: 1025px) ' + s.desktop +
  //                     'px, (min-width: 1441px) ' + s.hd +
  //                     'px, (min-width: 2301px) ' + s.fourK +
  //                     'px, ' + s.mobile + 'px'

  const mappedSizes = '(max-width: 480px) ' + s.mobile +
                      'px, (max-width: 768px) ' + s.tablet +
                      'px, (max-width: 1024px) ' + s.laptop +
                      'px, (max-width: 1440px) ' + s.desktop +
                      'px, (max-width: 2300px) ' + s.hd +
                      'px, ' + s.fourK + 'px'

  return {
    srcset: mappedSrcset,
    sizes: mappedSizes
  }
}

export default gImageMap
