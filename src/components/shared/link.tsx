import Anchor, { LinkProps } from 'next/link'
import { forwardRef } from 'react'
import { isExternal } from '@/lib/utils'

type HTMLProps = Omit<HTML<HTMLAnchorElement>, keyof LinkProps>
type AnchorProps = LinkProps & HTMLProps & { text?: React.ReactNode }

const Link = forwardRef<HTMLAnchorElement, AnchorProps>((props, refer) => {
	const { href, text, ...attr } = props
	const _href = href.toString()
	const URLstring = _href?.replace(/https?\:\/+(www.)?/, '')

	if (isExternal(href) && !props.target) {
		attr.target = '_blank'
	}

	return (
		<Anchor href={_href} {...attr} ref={refer}>
			{props.children ?? text ?? URLstring}
		</Anchor>
	)
})
Link.displayName = 'Link'

export default Link
