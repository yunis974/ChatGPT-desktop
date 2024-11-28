const { app, BrowserWindow, globalShortcut, screen } = require('electron');

let mainWindow;

app.on('ready' , () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize

    mainWindow = new BrowserWindow({
        width: 500,
        height: 800,
        alwaysOnTop: true,
        frame: true,
        transparent: false,
        resizable: true,
        webPreferences: { 
            nodeIntegration: false,
        },
        x: 0,
        y: height - 800,
    });

    mainWindow.loadURL('https://chat.openai.com')




    globalShortcut.register('CommandOrControl+Shift+G', ()=>{
        if (mainWindow.isVisible()){
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
    })


});



app.on('will-quit', () => {
    globalShortcut.unregisterAll();
  });

app.on('window-all-closed' , () =>{
    if (process.platform !== 'darwin'){
        app.quit();
    }
});