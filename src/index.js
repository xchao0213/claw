import createMachine from './gameObjects/machine';
import createBackground from './gameObjects/background';
import createControl from './gameObjects/control';
import resources from './resources';

import { Game, resource } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { ImgSystem } from '@eva/plugin-renderer-img';
import { EventSystem } from '@eva/plugin-renderer-event';
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { TransitionSystem } from '@eva/plugin-transition';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { TextSystem } from '@eva/plugin-renderer-text';

import util from './utils/util';

import VConsole from 'vconsole';

const vConsole = new VConsole();

resource.addResource(resources);

util.init();

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: util.getScreesWidth(),
      height: util.getScreesHeight(),
      antialias: true,
    }),
    new ImgSystem(),
    new TransitionSystem(),

    new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
  ],
});

game.scene.transform.size.width = util.getScreesWidth();
game.scene.transform.size.height = util.getScreesHeight();

const { machine, verticalPole, horizontalPole, claw, verticalAnim, clawAnim } = createMachine();

const control = createControl({
  callback: (dir) => {
    console.log('on callback', dir)
    // console.log(verticalPole)
    switch(dir) {
      case 'start':
        verticalAnim.play('longer', 1);
        clawAnim.play('longer', 1);
        // verticalPole.transform.size.height += 130;
        // claw.transform.position.y += 130;
        break;
      case 'up':
        horizontalPole.transform.position.y -= 1;
        verticalPole.transform.position.y -= 1;
        claw.transform.position.y -= 1;
        break;
      case 'right':
        verticalPole.transform.position.x += 10;
        claw.transform.position.x += 10;
        break;
      case 'down':
        horizontalPole.transform.position.y += 1;
        verticalPole.transform.position.y += 1;
        claw.transform.position.y += 1;
        break;
      case 'left':
        verticalPole.transform.position.x -= 10;
        claw.transform.position.x -= 10;
        break;
    }
  }
})

game.scene.addChild(createBackground());
game.scene.addChild(machine);
game.scene.addChild(control);
// game.scene.addChild(btn);

// window.playAnim = playAnim;
window.game = game;
