import { GameObject } from '@eva/eva.js';
// import { Graphics } from '@eva/plugin-renderer-graphics'
import { Transition } from '@eva/plugin-transition';
import { Img } from '@eva/plugin-renderer-img';
import util from '../utils/util';
export default function createMachine() {
  const machine = new GameObject('machine', {
    size: { width: util.getWidth(750), height: util.getHeight(1001) },
    origin: { x: 0.5, y: 0 },
    position: {
      x: 0,
      y: 0,
    },
    anchor: {
      x: 0.5,
      y: 0,
    },
  });

  const loom = new GameObject('loom', {
    size: { width: util.getWidth(750), height: util.getHeight(800) },
    origin: { x: 0.5, y: 0.5 },
    position: {
      x: 0,
      y: 0,
    },
    anchor: {
      x: 0.5,
      y: 0.65,
    },
  });

  // const outterGraphics = loom.addComponent(new Graphics())
  // outterGraphics.graphics.beginFill(0xbb8fe8, 1);
  // outterGraphics.graphics.drawRect(0, 0, util.getWidth(750), util.getHeight(800));
  // outterGraphics.graphics.endFill();

  const verticalPole = new GameObject('verticalPole', {
    size: { width: util.getWidth(16), height: util.getHeight(130) },
    origin: { x: 0.5, y: 0 },
    position: {
      x: 0,
      y: 0,
    },
    anchor: {
      x: 0.5,
      y: 0,
    },
  });

  const verticalAnim = verticalPole.addComponent(new Transition());
  verticalAnim.group = {
    longer: [
      {
        name: 'size.height',
        component: verticalPole.transform,
        values: [
          {
            time: 0,
            value: util.getHeight(130),
            tween: 'ease-out',
          },
          {
            time: 1000,
            value: 3 * util.getHeight(130),
            tween: 'ease-out',
          },
          {
            time: 2000,
            value: 3 * util.getHeight(130),
            tween: 'ease-in',
          },
          {
            time: 3000,
            value: util.getHeight(130),
            tween: 'ease-in',
          }
        ]
      },
    ]
  }

  const horizontalPole = new GameObject('horizontalPole', {
    size: { width: util.getWidth(611), height: util.getHeight(16) },
    origin: { x: 0.5, y: 0.5 },
    position: {
      x: 0,
      y: 0,
    },
    anchor: {
      x: 0.5,
      y: 0,
    },
  });

  const frontPanel = new GameObject('frontPanel', {
    size: { width: util.getWidth(750), height: util.getHeight(1001) },
    origin: { x: 0.5, y: 0 },
    position: {
      x: 0,
      y: 0,
    },
    anchor: {
      x: 0.5,
      y: 0,
    },
  });

  const claw = new GameObject('claw', {
    size: { width: util.getWidth(174), height: util.getHeight(189) },
    origin: { x: 0.5, y: 0 },
    position: {
      x: 0,
      y: util.getHeight(130) - 10,
    },
    anchor: {
      x: 0.5,
      y: 0,
    },
  });

  claw.addComponent(
    new Img({
      resource: 'claw',
    })
  );

  const clawAnim = claw.addComponent(new Transition());
  clawAnim.group = {
    longer: [
      {
        name: 'position.y',
        component: claw.transform,
        values: [
          {
            time: 0,
            value: util.getHeight(130) - 10,
            tween: 'ease-out',
          },
          {
            time: 1000,
            value: 3 * util.getHeight(130) - 10,
            tween: 'ease-out',
          },
          {
            time: 2000,
            value: 3 * util.getHeight(130) - 10,
            tween: 'ease-in',
          },
          {
            time: 3000,
            value: util.getHeight(130) - 10,
            tween: 'ease-in',
          }
        ]
      },
    ]
  }

  verticalPole.addComponent(
    new Img({
      resource: 'verticalPole',
    })
  );

  horizontalPole.addComponent(
    new Img({
      resource: 'horizontalPole',
    })
  );

  frontPanel.addComponent(
    new Img({
      resource: 'frontPanel',
    })
  );


  loom.addChild(horizontalPole);
  loom.addChild(claw);
  loom.addChild(verticalPole);
  machine.addChild(loom);
  machine.addChild(frontPanel);

  machine.addComponent(
    new Img({
      resource: 'machine',
    })
  );
  return {
    machine,
    verticalPole,
    horizontalPole,
    claw,
    verticalAnim,
    clawAnim
  };
}
