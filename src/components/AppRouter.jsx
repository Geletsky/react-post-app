import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
export default function AppRouter() {
  return (
	  <Routes>
		  <Route element={<About />} path="/about" />
		  <Route element={<Posts />} path="/posts" />
		  <Route element={<Error />} path="*" />
	  </Routes>
  )
}
