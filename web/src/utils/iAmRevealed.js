const me = e.target.element

if (e.percentInView >= 0.2) {
  me.classList.add('image-revealed')
}

export default iAmRevealed