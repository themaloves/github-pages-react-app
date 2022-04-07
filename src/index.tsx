import React from 'react';
import { render } from 'react-dom';
import 'modern-normalize/modern-normalize.css';

import { WelcomePage } from 'pages/WelcomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<WelcomePage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
