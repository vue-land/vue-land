const path = require('path')

exports.onCreatePages = function() {
  let qaPage
  const qas = []
  for (const page of this.pages.values()) {
    if (page.permalink.startsWith('/q-and-a/')) {
      qas.push({
        id: parseInt(path.basename(page.internal.relative), 10),
        title: page.title,
        date: page.date,
        permalink: page.permalink
      })
    } else if (page.permalink === '/q-and-a') {
      qaPage = page
    }
  }
  if (qaPage) {
    qaPage.qas = qas.sort((a, b) => {
      return a.id > b.id ? 1 : -1
    })
  }
}
