import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { WelcomePage } from './pages/WelcomePage';

import s from './App.module.scss';

export const App = () => {
	return (
		<BrowserRouter>
			<main className={s.section}>
				<Routes>
					<Route path={'/'} element={<WelcomePage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};
