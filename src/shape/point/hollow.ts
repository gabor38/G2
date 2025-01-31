import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HollowPointOptions = Record<string, any>;

/**
 * ○
 */
export const HollowPoint: SC<HollowPointOptions> = (options) => {
  return Color({ colorAttribute: 'stroke', symbol: 'point', ...options });
};

HollowPoint.props = {
  ...Color.props,
};
