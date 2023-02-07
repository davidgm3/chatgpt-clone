import React, { useState } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
export const App = () => {
	return (
		<div className="bg-gradient-to-r from-slate-800 to-slate-900 h-full flex flex-col items-center">
			<Header />

			<Body />
		</div>
	);
};
