import React from 'react';

import s from './WelcomePage.module.scss';

export const WelcomePage = () => {
	return (
		<section className={s.section}>
			<h1>Welcome!</h1>
			<h2>This site about My live and about My profession.</h2>
			<p>Here has development articles and life-hack for live</p>
		</section>
	);
};
