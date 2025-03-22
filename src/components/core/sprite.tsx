import * as React from 'react';

function Sprite({ size = '1.25em', name, src, ...iconProps }: Sprite.Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps} role="img">
      <use href={`${src}#${name}`} />
    </svg>
  );
}

namespace Sprite {
  export type Props = React.SVGAttributes<SVGElement> & {
    size?: number | string;
    src: string;
    name: string;
  };
}

export { Sprite };
