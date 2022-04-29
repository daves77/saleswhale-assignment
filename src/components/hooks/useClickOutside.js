import { useState, useRef, useEffect } from 'react';

// mainly used to open and close dropdown menus
// closes menu if user clicks outside of the menu
export default function useClickOutside() {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const handleClick = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [ref]);

	return [open, setOpen, ref];
}
