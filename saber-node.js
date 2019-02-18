const path = require('path')

exports.onCreatePages = function() {
  let qaPage
  const qas = []
  for (const page of this.source.pages.values()) {
    if (page.attributes.permalink.startsWith('/q-and-a/')) {
      qas.push({
        id: parseInt(path.basename(page.internal.relative), 10),
        title: page.attributes.title,
        date: page.attributes.date,
        permalink: page.attributes.permalink
      })
    } else if (page.attributes.permalink === '/q-and-a') {
      qaPage = page
    }
  }
  if (qaPage) {
    qaPage.qas = qas.sort((a, b) => {
      return a.id > b.id ? 1 : -1
    })
  }
}
