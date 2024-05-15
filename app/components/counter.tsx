import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export const Counter = () => {
	const [count, setCount] = useState(0)
	return (
		<div className="not-prose flex items-center gap-4">
			<Button onClick={() => setCount(count + 1)}>Increment</Button>
			<Input disabled defaultValue={`Count: ${count}`} />
		</div>
	)
}
