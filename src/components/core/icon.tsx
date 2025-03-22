import * as React from 'react';
import { Sprite } from './sprite';
import type IconsSprite from '~/icon.sprite.json';

/**
 * Icon component with svg sprites
 *
 * @see {@link https://youtu.be/1-Gjec48nJs}
 * @see {@link https://benadam.me/thoughts/react-svg-sprites/}
 */
function Icon({ size = '1.25em', name, ...props }: Icon.Props) {
  return (
    <Sprite
      size={size}
      src="/icon.sprite.svg"
      fill="none"
      stroke="currentcolor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      name={name}
      data-icon={name}
      aria-hidden
      {...props}
    />
  );
}

namespace Icon {
  export type IconNames = keyof (typeof IconsSprite)['icons'];
  export type Props = React.SVGAttributes<SVGElement> & {
    name: IconNames;
    size?: number | string;
  };
}

export { Icon };
