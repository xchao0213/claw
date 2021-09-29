import { GameObject } from '@eva/eva.js';
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

  machine.addComponent(
    new Img({
      resource: 'machine',
    })
  );
  return machine;
}
