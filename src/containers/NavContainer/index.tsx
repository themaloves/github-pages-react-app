import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import s from './NavContainer.module.scss';

const links = [
	{ to: '/', name: 'Home' },
	{ to: '/about', name: 'About' },
];

export const NavContainer = () => {
	let url = useLocation();

	return (
		<section className={s.section}>
			<nav className={s.menu}>
				{links.map(l => {
					return (
						<Link
							className={`${s.link} ${url.pathname === l.to ? s.active : ''}`}
							to={l.to}
						>
							{l.name}
						</Link>
					);
				})}
			</nav>
		</section>
	);
};
