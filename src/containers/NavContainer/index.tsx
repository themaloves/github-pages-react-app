import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'hooks';
import { Hamburger } from './components/Hamburger';
import s from './NavContainer.module.scss';

const links = [
	{ key: 1, to: '/', name: 'Главная' },
	{ key: 2, to: '/about', name: 'Обо мне' },
];

export function NavContainer() {
	const { pathname } = useLocation();
	const matchesMedia = useMediaQuery('(max-width: 1200px)');
	const [isVisible, setIsVisible] = useState(false);

	function handlerVisibleMenu(value: boolean) {
		setIsVisible(!value);
	}

	return (
		<section className={s.section}>
			{matchesMedia && (
				<Hamburger
					handler={() => handlerVisibleMenu(isVisible)}
				/>
			)}
			<nav className={s.menu}>
				<ul
					className={`${s.items} ${isVisible && s.visible}`}
				>
					{links.map(link => {
						return (
							<li key={link.key} className={s.item}>
								<Link
									className={`${s.link} ${
										pathname === link.to ? s.active : ''
									}`}
									to={link.to}
								>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</section>
	);
}
