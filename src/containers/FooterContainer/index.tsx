import React from 'react';
import { Link } from 'react-router-dom';
import s from './FooterContainer.module.scss';
import { ReactComponent as Telegram } from './assets/telegram.svg';
import { ReactComponent as Gmail } from './assets/mail.svg';

import { links } from 'containers/NavContainer';

export function FooterContainer() {
	return (
		<footer className={s.section}>
			<section className={s.container}>
				<ul className={`${s.menu}`}>
					{links.map(link => {
						return (
							<li key={link.key}>
								<Link className={s.link} to={link.to}>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
				<ul className={s.contacts}>
					<li>
						<a
							className={s.link}
							href="https://t.me/intehart"
							target="_blank"
						>
							<Telegram />
						</a>
					</li>
					<li>
						<a
							className={s.link}
							href="mailto:zamruma@gmail.com"
						>
							<Gmail />
						</a>
					</li>
				</ul>
			</section>
		</footer>
	);
}
