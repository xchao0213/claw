import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img'
export default function createClaw(position) {
  const claw = new GameObject('claw', {
    size: { width: 174, height: 189 },
    origin: { x: 0.5, y: 0.5 },
    position,
    anchor: {
      x: 0,
      y: 0,
    },
  });

  claw.addComponent(
    new Img({
      resource: 'claw',
    })
  );
  return claw;
}
