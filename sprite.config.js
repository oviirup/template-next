// @ts-check

// prettier-ignore
const removeAttrs = ['class','fill','stroke','stroke-width','stroke-linecap','stroke-linejoin'];

/** @type {import('@oviirup/sprite').SpriteConfig} */
const spriteConfig = {
  entries: ['./public/icons/.icons'],
  watch: process.env.NODE_ENV === 'development',
  outFileSuffix: { meta: '.meta', sprite: '.sprite' },
  svgoPlugins: [{ name: 'removeAttrs', params: { attrs: removeAttrs } }],
};

export default spriteConfig;
