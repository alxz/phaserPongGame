import Phaser from 'phaser'
import { TitleScreen } from '../consts/SceneKeys'
import { PressStart2P } from '../consts/Fonts'

export default class GameOver extends Phaser.Scene {
        /**
         * 
         * @param {{  leftScore: number, rightScore: number }}
         */
    create(data) {

        // console.log('data: ', data)
        let titleText = 'Game Over'

        if (data.leftScore > data.rightScore) {
            //player won
            titleText = 'You Won!'
        } else {
            //AI won
        }

        this.add.text(400, 200, titleText, {
            fontFamily: PressStart2P,
            fontSize: 38
        })
        .setOrigin(0.5)

        this.add.text (400,300, 'Press Space to Continue', {
            fontFamily: PressStart2P,
            fontSize: 16
        })
        .setOrigin(0.5)

        this.input.keyboard.once( 'keydown-SPACE', () => {
            this.scene.start( TitleScreen )
        })

    }
}