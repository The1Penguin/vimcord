const { Plugin } = require('powercord/entities')
const { getModule } = require("powercord/webpack")
const KeybindRecorder = require('./Components/KeybindRecorder');

module.exports = class vimcord extends Plugin {
    startPlugin () {
        document.body.addEventListener("keyup", this.keydown)
    }
    pluginWillUnload () {
        document.body.removeEventListener("keyup", this.keydown)
    }
    keydown(key) {
        if (!document.hasFocus()) {
            return;
        }
        if (key.key.toUpperCase() == "J") {
        }
      
    }
}
