import { Outlet } from '@remix-run/react'

export default function Component() {
	return (
		<div className="prose p-10">
			<Outlet />
		</div>
	)
}
