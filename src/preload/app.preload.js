var { ipcRenderer } = require('electron')
var path = require('path')

ipcRenderer.on('toggle-search-focus', _ => {
    document.getElementById('search').focus()
})