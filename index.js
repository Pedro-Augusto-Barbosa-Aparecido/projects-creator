const { BrowserView, BrowserWindow, app } = require("electron");

const createNewWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            devTools: false

        }
    });

    win.loadFile("./src/index.html");
    win.setMenuBarVisibility(false);

}

app.whenReady().then(() => {
    createNewWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createNewWindow();

    });

});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit();

});
