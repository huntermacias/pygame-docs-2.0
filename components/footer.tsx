import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
	<footer className="bg-gray-800 bottom-0 fixed w-full">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
			<p className="text-gray-400">© 2023 Pygame Docs</p>
			<div>
			<Link href="/privacy-policy">
				<span className="text-gray-400 hover:text-gray-200">
				Privacy Policy
				</span>
			</Link>

			<span className="mx-4 text-gray-400">•</span>

			<Link href="/terms-of-use">
				<span className="text-gray-400 hover:text-gray-200">Terms of Use</span>
			</Link>
			</div>
		</div>
	</footer>

  )
}
