import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let window: Electron.BrowserWindow | null

function createWindow() {
	window = new BrowserWindow({ title: 'Simple Code', height: 800, width: 1300 })
	loadFile(window, 'index.html')
	window.on('closed', () => window = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', () =>
	process.platform === 'darwin' ? null : app.quit()
)

app.on('activate', () =>
	window === null ? createWindow() : null
)

function loadFile(window: Electron.BrowserWindow, file: string): Promise<void> {
	return window.loadFile(open(file))
}

function open(file: string): string {
	return path.join(__dirname, `../${file}`)
}