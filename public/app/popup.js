const displaySponsored = document.getElementById('display-button')

displaySponsored.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { file: 'showPaid.js' }
    )
    chrome.tabs.insertCSS(
      tabs[0].id,
      { file: 'showPaid.css' }
    )
  })
}

const removeSponsored = document.getElementById('remove-button')

removeSponsored.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { file: 'removePaid.js' }
    )
  })
}


