import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage';
import { WelcomePage } from './pages/WelcomePage';

import { NavContainer } from './containers/NavContainer';

import s from './App.module.scss';

export const App = () => {
	return (
		<BrowserRouter>
			<NavContainer />
			<main className={s.section}>
				<Routes>
					<Route path={'/'} element={<WelcomePage />} />
					<Route path={'about'} element={<AboutPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};
