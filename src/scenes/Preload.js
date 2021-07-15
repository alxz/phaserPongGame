import Phaser from 'phaser'

import { TitleScreen } from '../consts/SceneKeys'
import WebFontFile from './WebFontFile'
import { PressStart2P } from '../consts/Fonts'


export default class Preload extends Phaser.Scene {

    preload() {
        const fonts = new WebFontFile(this.load, 'Press Start 2P')
        this.load.addFile(fonts)
    }

    create() {
        this.scene.start( TitleScreen )

    }
}