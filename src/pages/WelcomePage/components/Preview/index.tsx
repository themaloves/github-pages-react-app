import React from 'react';

import { Typography } from 'components';

import s from './Preview.module.scss';

export function Preview() {
	return (
		<section className={s.section}>
			<div className={`${s.container} ${s.leftText}`}>
				<Typography variant="h1">
					Делаю чтоб работало в* <br className={s.br} />{' '}
					Совкомбанк Бизнес
				</Typography>
				<Typography variant="small">
					* imposibrus
				</Typography>
			</div>
			<div className={s.container}>
				<Typography variant="h5">
					<ul className={s.list}>
						<li>
							Делаю программное обеспечение с 2016 года
						</li>
						<li>
							Помогаю на{' '}
							<a
								className={s.link}
								href="https://getmentor.dev"
								target="_blank"
							>
								Get Mentor's
							</a>
						</li>
					</ul>
				</Typography>
			</div>
		</section>
	);
}
