import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
import { Graphics } from '@eva/plugin-renderer-graphics'
import { Event } from '@eva/plugin-renderer-event';
import { Transition } from '@eva/plugin-transition';

import util from '../utils/util';
export default function createControl({ callback = ()=>{} }) {
  const bottom = util.isIphoneX ? -50 : 0;
  const control = new GameObject('control', {
    size: { width: util.getWidth(750), height: util.getHeight(411) },
    origin: { x: 0.5, y: 1 },
    position: {
      x: 0,
      y: bottom,
    },
    anchor: {
      x: 0.5,
      y: 1,
    },
  });

  const up = new GameObject('up', {
    size: { width: util.getWidth(132), height: util.getHeight(120) },
    origin: { x: 0, y: 0 },
    position: {
      x: 160,
      y: 140,
    },
    anchor: {
      x: 0,
      y: 0,
    },
  });

  const right = new GameObject('right', {
    size: { width: util.getWidth(130), height: util.getHeight(119) },
    origin: { x: 0, y: 0 },
    position: {
      x: 280,
      y: 210,
    },
    anchor: {
      x: 0,
      y: 0,
    },
  });

  const down = new GameObject('down', {
    size: { width: util.getWidth(132), height: util.getHeight(120) },
    origin: { x: 0, y: 0 },
    position: {
      x: 150,
      y: 290,
    },
    anchor: {
      x: 0,
      y: 0,
    },
  });

  const left = new GameObject('left', {
    size: { width: util.getWidth(130), height: util.getHeight(117) },
    origin: { x: 0, y: 0 },
    position: {
      x: 40,
      y: 210,
    },
    anchor: {
      x: 0,
      y: 0,
    },
  });

  const start = new GameObject('start', {
    size: { width: util.getWidth(220), height: util.getHeight(177) },
    origin: { x: 0.5, y: 0.5 },
    position: {
      x: -180,
      y: 240,
    },
    anchor: {
      x: 1,
      y: 0,
    },
  });

  up.addComponent(
    new Img({
      resource: 'up',
    })
  );

  right.addComponent(
    new Img({
      resource: 'right',
    })
  );

  down.addComponent(
    new Img({
      resource: 'down',
    })
  );

  left.addComponent(
    new Img({
      resource: 'left',
    })
  );

  start.addComponent(
    new Img({
      resource: 'start',
    })
  );

  control.addChild(up);
  control.addChild(right);
  control.addChild(down);
  control.addChild(left);
  control.addChild(start);

  const startAnim = start.addComponent(new Transition());
  startAnim.group = {
    scale: [
      {
        name: 'scale.x',
        component: start.transform,
        values: [
          {
            time: 0,
            value: 1,
            tween: 'ease-out',
          },
          {
            time: 300,
            value: 0.8,
            tween: 'ease-in',
          },
          {
            time: 600,
            value: 1
          }
        ]
      },
      {
        name: 'scale.y',
        component: start.transform,
        values: [
          {
            time: 0,
            value: 1,
            tween: 'ease-out',
          },
          {
            time: 300,
            value: 0.8,
            tween: 'ease-in',
          },
          {
            time: 600,
            value: 1
          }
        ]
      }
    ]
  }

  const evtUp = up.addComponent(new Event)
  evtUp.on('tap', () => {
    callback('up');
  })

  const evtRight = right.addComponent(new Event)
  evtRight.on('tap', () => {
    callback('right');
  })

  const evtDown = down.addComponent(new Event)
  evtDown.on('tap', () => {
    callback('down');
  })

  const evtLeft = left.addComponent(new Event)
  evtLeft.on('tap', () => {
    callback('left')
  })

  const evtStart = start.addComponent(new Event)
  evtStart.on('tap', () => {
    startAnim.play('scale', 1);
    callback('start')
  })

  if (util.isIphoneX) {
    const blank = new GameObject('blank', {
      size: { width: util.getWidth(750), height: 50 },
      origin: { x: 0.5, y: 1 },
      position: {
        x: 0,
        y: 50,
      },
      anchor: {
        x: 0.5,
        y: 1,
      },
    });
  
    const outterGraphics = blank.addComponent(new Graphics())
    outterGraphics.graphics.beginFill(0xbb8fe8, 1);
    outterGraphics.graphics.drawRect(0, 0, util.getWidth(750), 100);
    outterGraphics.graphics.endFill();
  
    control.addChild(blank);
  }
  
  control.addComponent(
    new Img({
      resource: 'control',
    })
  );
  return control;
}
