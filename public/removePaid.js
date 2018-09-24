// remove sonsored content
const removeSponsored = () => {
  const smtmSponsored = document.getElementsByClassName('smtm-sponsored')
  const newArr = [...smtmSponsored]

  newArr.forEach(element => {
    element.style.display = 'none'
  })

  const thirdPartyLink = document.getElementsByClassName('thirdPartySponsorLink')
  thirdPartyLink[0].style.display = 'none'
}

removeSponsored()
