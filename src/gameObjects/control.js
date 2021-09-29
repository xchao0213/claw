import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
import { Graphics } from '@eva/plugin-renderer-graphics'

import util from '../utils/util';
export default function createControl() {
  const bottom = util.aspectRatio > 2 ? -100 : 0;
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
    origin: { x: 1, y: 0 },
    position: {
      x: -80,
      y: 170,
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

  if (util.aspectRatio > 2) {
    const blank = new GameObject('blank', {
      size: { width: util.getWidth(750), height: 100 },
      origin: { x: 0.5, y: 1 },
      position: {
        x: 0,
        y: 100,
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
