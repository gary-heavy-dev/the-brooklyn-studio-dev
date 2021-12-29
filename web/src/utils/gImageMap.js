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

  return urlForImage(source, data).width(s.mobile).auto('format').toString() + ' ' + s.mobile + 'w,' +
        urlForImage(source, data).width(s.tablet).auto('format').toString() + ' ' + s.tablet + 'w, ' +
        urlForImage(source, data).width(s.laptop).auto('format').toString() + ' ' + s.laptop + 'w, ' +
        urlForImage(source, data).width(s.desktop).auto('format').toString() + ' ' + s.desktop + 'w, ' +
        // urlForImage(source, data).width(s.hd).auto('format').toString() + ' ' + s.hd + 'w'
        urlForImage(source, data).width(s.hd).auto('format').toString() + ' ' + s.hd + 'w, ' +
        urlForImage(source, data).width(s.fourK).auto('format').toString() + ' ' + s.fourK + 'w'
}

export default gImageMap
