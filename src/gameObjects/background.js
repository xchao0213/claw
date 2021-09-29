import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
import util from '../utils/util';
export default function createBackground() {
  const bg = new GameObject('bg', {
    size: { width: util.getScreesWidth(), height: util.getScreesHeight() },
    origin: { x: 0, y: 0 },
    position: {
      x: 0,
      y: 0,
    },
    anchor: {
      x: 0,
      y: 0,
    },
  });

  bg.addComponent(
    new Img({
      resource: 'bg',
    })
  );
  return bg;
}
