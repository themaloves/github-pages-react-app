import React from 'react';

import { Typography } from 'components';

import s from './AboutPage.module.scss';

export function AboutPage() {
	return (
		<section className={s.section}>
			<Typography variant="caption">
				My name is Ruslan
			</Typography>
			<p>profession.</p>
			<p>I want work to Europe.</p>
		</section>
	);
}
