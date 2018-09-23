// wrap top sponsored & content sponsored
const wrapSponsored = () => {
  const sponsored = document.getElementsByClassName('s-result-item celwidget  AdHolder')
  const topSponsored = document.getElementsByClassName('slot__ad')
  const newArr = [...sponsored, ...topSponsored]

  newArr.forEach(element => {
    const divToWrap = element.firstChild
    const wrapper = document.createElement('div')

    wrapper.setAttribute('class', 'smtm-sponsored')
    divToWrap.parentNode.insertBefore(wrapper, divToWrap)
    wrapper.appendChild(divToWrap)
  })
}

wrapSponsored()
