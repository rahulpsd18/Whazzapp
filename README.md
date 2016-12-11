# Whazzapp
A desktop taskbar app for WhatsApp messenger.

# Overview
This is a web based app made with javascript wrapped in [electron](http://electron.atom.io/) to create a native taskbar application for Windows and Linux.

# Getting Started
### Prerequisites
It is assumed that you have [npm](https://www.npmjs.com/) package manager installed on your system.

###Installation
The necessary dependencies are in the package.json file so just run `npm install` to get them installed.

###Running the application
To start the appication, simply run `npm start`

# Creating an executable package
- To create a windows executable package, run `npm run build:win` and once successfully completed, check dist/todo-win32-x64

# Task List
- [x] ~~Use [electron-packager](https://github.com/electron-userland/electron-packager) to create a executable file~~
- [x] ~~Correct the Position of the app when Resizing~~
- [ ] Add Manual Resizing
- [ ] Add Dark Theme
- [ ] Create a single setup package to help distribute the app
- [ ] Add electron-packager build script for other platforms
