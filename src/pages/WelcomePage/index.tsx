import React from 'react';
import { Typography } from '../../components';

import s from './WelcomePage.module.scss';

export const WelcomePage = () => {
	return (
		<section className={s.section}>
			<h2>
				This site about My live and about My profession.
			</h2>
			<p>
				Here has development articles and life-hack for live
			</p>
		</section>
	);
};
