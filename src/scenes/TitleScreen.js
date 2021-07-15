import Phaser from 'phaser'
import { Game } from '../consts/SceneKeys'
import WebFontFile from './WebFontFile'
import { PressStart2P } from '../consts/Fonts'
import * as AudioKeys from '../consts/AudioKeys'

export default class TitleScreen extends Phaser.Scene {
    
    preload() 
    {
        const fonts = new WebFontFile(this.load, 'Press Start 2P')
        this.load.addFile(fonts)
    }

    create() 
    {
        const title = this.add.text(400, 200, 'Old School Tennis', {
            fontSize: 30,
            fontFamily: PressStart2P
        })
        title.setOrigin(0.5, 0.5)

        this.add.text (400, 300, 'Press space bar to start', {
            fontSize: 16,
            fontFamily: PressStart2P
        })
            .setOrigin(0.5, 0.5)

        // instead of getting it from:
        // 'keydown-' + Phaser.Input.Keyboard.KeyCodes.SPACE
        // we will use:
        this.input.keyboard.once(`keydown-SPACE`, () => {
            // console.log('Space pressed')
            this.sound.play(AudioKeys.PongBeep)
            this.scene.start( Game )
        })

    }
}