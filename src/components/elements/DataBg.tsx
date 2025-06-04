'use client'

import { useEffect } from 'react'

export default function DataBg() {
	useEffect(() => {
		const elements = document.querySelectorAll<HTMLElement>('[data-background]')

		elements.forEach((element) => {
			const backgroundUrl = element.getAttribute('data-background')
			if (backgroundUrl) {
				element.style.backgroundImage = `url(${backgroundUrl})`
				element.style.backgroundSize = 'cover'
				element.style.backgroundPosition = 'center'
				element.style.backgroundRepeat = 'no-repeat'
			}
		})
	}, [])

	return null
}