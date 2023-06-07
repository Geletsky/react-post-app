import React from 'react';
import Posts from "../pages/Posts";
import { Routes, Route } from "react-router-dom";
import { routes } from '../router/routes';

export default function AppRouter() {
	return (
		<Routes>
			{routes.map(route => 
				<Route key={route.path} element={route.component} path={route.path} exact={route.exact} />
			)}
			<Route element={<Posts />} path="*" />
		</Routes>
	)
}
