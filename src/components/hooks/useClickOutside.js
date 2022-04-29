import { useState, useRef, useEffect } from 'react';

// mainly used to isOpen and close dropdown menus
// closes menu if user clicks outside of the menu
export default function useClickOutside() {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const handleClick = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [ref]);

	return [isOpen, setIsOpen, ref];
}
