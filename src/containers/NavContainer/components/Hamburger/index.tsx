import React from 'react';
import s from './Hamburger.module.scss';

export function Hamburger({ handler }: { handler: () => void }) {
	return (
		<div className={s.section} onClick={handler}>
			<span className={s.line} />
		</div>
	);
}
