// remove sonsored content
const removeSponsored = () => {
  const smtmSponsored = document.getElementsByClassName('smtm-sponsored')
  const newArr = [...smtmSponsored]

  newArr.forEach(element => {
    element.setAttribute('style', 'display: none;')
  })
}

removeSponsored()
