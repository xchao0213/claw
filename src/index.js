import createMachine from './gameObjects/machine';
import createBackground from './gameObjects/background';
import createClaw from './gameObjects/claw';
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
      backgroundColor: '#ddd'
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

const pos = {
  x: 350,
  y: 1000,
};

const claw = createClaw(pos);
// const { basetFront, playAnim } = createBasketFront();
// const btn = createBtn({
//   text: '投球',
//   transform: {
//     position: {
//       x: 0,
//       y: -120,
//     },
//     origin: {
//       x: 0.5,
//       y: 0.5,
//     },
//     anchor: {
//       x: 0.5,
//       y: 1,
//     },
//   },
//   callback: () => {
//     alert('还没做呢～一起来完善吧')
//   },
// });

const control = createControl({
  callback: (dir) => {
    console.log('on callback', dir)
  }
})

game.scene.addChild(createBackground());
game.scene.addChild(createMachine());
game.scene.addChild(control);
game.scene.addChild(claw);
// game.scene.addChild(btn);

// window.playAnim = playAnim;
window.game = game;
