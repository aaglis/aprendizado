const fs = require('fs/promises')
const path = require('path')

fs.readdir(path.join('/', 'Users', 'JRB', 'duna-3Dviewer', 'public', 'model')).then(files => {

   const plyFiles = files.filter(file => file.endsWith('.ply'))

   console.log(plyFiles)

  //  let teste = document.getElementById('teste')

  //  teste.innerHTML = `esta é a lista de arquivos ${plyFiles}`

})

