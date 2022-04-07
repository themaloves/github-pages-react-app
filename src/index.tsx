import React from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import './css/settings.scss';

import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
