import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import className from 'classnames';

import { useMediaQuery } from 'hooks';
import { Hamburger } from './components/Hamburger';

import s from './NavContainer.module.scss';

const links = [
	{ key: 1, to: '/', name: 'Главная' },
	{ key: 2, to: '/about', name: 'Обо мне' },
	{ key: 3, to: '/articles', name: 'Статьи' },
	{ key: 4, to: '/learn', name: 'Обучение' },
];

export function NavContainer() {
	const { pathname } = useLocation();
	const matchesMedia = useMediaQuery('(max-width: 1200px)');
	const [isVisible, setIsVisible] = useState(false);
	const menuCls = className({
		[s.menu]: true,
		[s.menuMedia]: matchesMedia,
		[s.visible]: isVisible,
	});

	return (
		<section className={s.section}>
			{matchesMedia && (
				<Hamburger
					isOpenMenu={isVisible}
					setOpenMenu={setIsVisible}
				/>
			)}
			<nav className={menuCls}>
				<ul className={`${s.items}`}>
					{links.map(link => {
						return (
							<li key={link.key} className={s.item}>
								<Link
									onClick={() => setIsVisible(false)}
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
