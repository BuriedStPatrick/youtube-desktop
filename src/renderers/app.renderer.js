var electron = require('electron')
var { ipcRenderer } = electron

let webview

onload = _ => {

    webview = document.getElementsByClassName("yt-webview")[0]

    const loadstart = _ => {
        
    }

    const loadstop = _ => {
    }

    const domready = () => {
        ipcRenderer.on('command-search', _ => {
            webview.send('toggle-search-focus')
        })
    }

    webview.addEventListener('did-start-loading', loadstart)
    webview.addEventListener('did-stop-loading', loadstop)
    webview.addEventListener('dom-ready', domready)
}

