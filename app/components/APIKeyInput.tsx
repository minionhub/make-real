import { Input, useBreakpoint } from '@tldraw/tldraw'

export function APIKeyInput() {
	const breakpoint = useBreakpoint()
	return (
		<div
			className={`your-own-api-key ${
				breakpoint < 4 ? 'your-own-api-key__mobile' : ''
			}`}
		>
			<div className="your-own-api-key__inner">
				<div>Have your own OpenAI API key?</div>
				<input
					id="openai_key_risky_but_cool"
					placeholder="Your OpenAI API key (risky but cool)"
				/>
			</div>
		</div>
	)
}
