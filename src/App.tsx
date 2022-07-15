import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

import { AboutPage } from './pages/AboutPage';
import { WelcomePage } from './pages/WelcomePage';

import { NavContainer, FooterContainer } from 'containers';

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
			<FooterContainer />
		</BrowserRouter>
	);
};
