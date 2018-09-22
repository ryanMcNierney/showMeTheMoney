let sponsored = document.getElementsByClassName('s-result-item celwidget  AdHolder')
// .slot__ad = top ad slopt

const newArr = [...sponsored]

newArr.forEach(element => {
  const divToWrap = element.firstChild

  const wrapper = document.createElement('div')
  wrapper.setAttribute('class', 'smtm-sponsored')

  divToWrap.parentNode.insertBefore(wrapper, divToWrap)

  wrapper.appendChild(divToWrap)

})
