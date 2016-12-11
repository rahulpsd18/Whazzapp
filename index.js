'use strict';
const electron = require('electron');
var menubar = require('menubar');

var mb = menubar({index:"https://web.whatsapp.com", resizable:false, icon:__dirname + "/icon.png", width:700, height:640,minHeight:640,maxHeight:800,minWidth:400,maxWidth:700,tooltip:'WhazzApp',alwaysOnTop:true});

var tmp=1

const contextMenu = electron.Menu.buildFromTemplate([
  {
    label: 'About',
    submenu: [
      {
        label: 'Info',
         click() {
      electron.dialog.showMessageBox({title: "WhazzApp", type:"info", message: "A Whatsapp messenger for Taskbar \nRisabh Kumar <rahulpsd18@gmail.com>\nMIT Copyright (c) 2016", buttons: ["Close"] });
    }
      },
      {
        label: 'Website',
    click() {
      electron.shell.openExternal("https://rahulpsd18.github.io/Whazzapp");
    }
      }
    ]
  },
  {
    label: 'Always On Top', 
    type: 'checkbox', 
    checked: true,
    click() {
      if (tmp == 1){
        checked: false,
        mb.window.setAlwaysOnTop(false),
        tmp=0
      }
      else {
        checked: true,
        mb.window.setAlwaysOnTop(true),
        tmp=1
      }
    }
  },
  {
    type: 'separator'
  },
  {
    label: 'Resize',
    click() {
      if(mb.window.getSize()[0]==700){
        // console.log(mb.window.getSize());
        var x=mb.window.getPosition()[0];
        var y=mb.window.getPosition()[1];
        mb.window.setSize(400,640,true);
        mb.window.setPosition(x+300,y,true);
      }
      else if(mb.window.getSize()[0]==400){
        // console.log(mb.window.getSize());
        var x=mb.window.getPosition()[0];
        var y=mb.window.getPosition()[1];
        mb.window.setSize(700,640,true);
        mb.window.setPosition(x-300,y,true);
      }
    }
  },
  {
    type: 'separator'
  },
  {
    label: 'Exit',
    click() {
      electron.dialog.showMessageBox({title: "Thanks for trying Beta version", type:"info", message: "Feel free to report any issues faced on github page.\n(https://github.com/rahulpsd18/Whazzapp/issues)", buttons: ["OK"] });
      mb.app.quit();
    }
  }

]);

mb.on('ready', function ready () {
  console.log('WhazzApp is ready to serve in the menubar.');
  if (process.platform == 'win32') {
    mb.tray.setContextMenu(contextMenu);
  }
});

mb.on('show', function ready () {
  mb.window.setSkipTaskbar(true);
});
