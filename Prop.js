import { makeProp as makeEditorProp, setPropType } from '../editor/PropBuilder';
import { Mesh } from 'three';
import { MODES, ASSETS } from '../constants';
import * as f from '../flags';
import World from '../core/World';
import { addProp } from '../core/DungeonStore';
import { getMesh } from '../core/MeshLoader';

export const makeViewerProp = (proptype, { x, y }) => {
  let asset;
  switch (proptype) {
    case 'prop1':
      asset = getMesh(ASSETS.BARREL).children[0];
      break;
    case 'prop2':
      asset = getMesh(ASSETS.CRATE).children[0];
      break;
  }

  const geo = asset.geometry.clone();
  const prop = new Mesh(geo, asset.material);
  prop.position.set(x, y, 0);
  prop.scale.set(2, 2, 2);
  // prop.scale.setX(5);
  // prop.scale.setY(5);
  // prop.scale.setZ(5);

  return prop;
};

export const makeProp = ({ proptype, position }) => {
  if (f.flags.MODE === MODES.EDITOR) {
    setPropType(proptype);
    addProp(makeEditorProp(position));
  }
  else {
    World.add(makeViewerProp(proptype, position));
  }
};
