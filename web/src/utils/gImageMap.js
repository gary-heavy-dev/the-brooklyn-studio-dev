import urlForImage from './urlForImage'

const gImageMap = (source, data) => {
  return urlForImage(source, data).width(480).auto('format').toString() + ' 480w, ' +
         urlForImage(source, data).width(768).auto('format').toString() + ' 768w, ' +
         urlForImage(source, data).width(830).auto('format').toString() + ' 830w, ' +
         urlForImage(source, data).width(960).auto('format').toString() + ' 960w, ' +
         urlForImage(source, data).width(1024).auto('format').toString() + ' 1024w, ' +
         urlForImage(source, data).width(1440).auto('format').toString() + ' 1440w, ' +
         urlForImage(source, data).width(1920).auto('format').toString() + ' 1920w'
}

export default gImageMap
