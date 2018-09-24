// wrap top sponsored & content sponsored
const wrapSponsored = () => {
  const sponsored = document.getElementsByClassName('s-result-item celwidget  AdHolder')
  const topSponsored = document.getElementsByClassName('slot__ad')
  const amazonBrand = document.getElementsByClassName('s-result-item  celwidget acs-private-brands-container-background-single-image ')
  const newArr = [...sponsored, ...topSponsored, ...amazonBrand]

  newArr.forEach(element => {
    const divToWrap = element.firstChild
    const wrapper = document.createElement('div')

    wrapper.setAttribute('class', 'smtm-sponsored')
    divToWrap.parentNode.insertBefore(wrapper, divToWrap)
    wrapper.appendChild(divToWrap)
  })
}

wrapSponsored()

// percentage functions
const getSearchArea = () => {
  const searchResults = document.getElementById('rightResultsATF')
  const w = searchResults.clientWidth
  const h = searchResults.clientHeight
  return w * h
}

const getSponsoredArea = () => {
  const sponsored = document.getElementsByClassName('smtm-sponsored')
  const sponsoredArr = [...sponsored]
  let sponsoredArea = 0;

  sponsoredArr.map(element => {
    const w = element.clientWidth
    const h = element.clientHeight
    sponsoredArea += w * h
  })

  return sponsoredArea
}

const getPercentage = () => {
  const searchArea = getSearchArea()
  const sponsoredArea = getSponsoredArea()

  return sponsoredArea / searchArea
}

chrome.runtime.sendMessage(chrome.runtime.id, { target: 'app', type: 'setMessage', body: getPercentage() });


