import React from 'react';

import { Typography } from 'components';

import s from './AboutPage.module.scss';

export function AboutPage() {
	return (
		<section className={s.section}>
			<Typography variant="h3">My name is Ruslan</Typography>
			<p>
				I'm Software Engineer, I like build new application and it is my
				profession.
			</p>
			<p>I want work to Europe.</p>
		</section>
	);
}
