"use client";

import React, { useState } from "react";

function MainPage() {
	const [counterSmall, setCounterSmall] = useState(0);
	const [counterBig, setCounterBig] = useState(0);

	return (
		<div>
			<h1>L1: {counterSmall}, L2: {counterBig}</h1>
			<button onClick={() => setCounterSmall(counterSmall + 1)}>+1</button><button onClick={() => setCounterSmall(counterSmall - 1)}>-1</button>
			<br/>
			<button onClick={() => setCounterBig(counterBig + 3)}>+3</button><button onClick={() => setCounterBig(counterBig - 3)}>-3</button>
		</div>
	);
};

export default MainPage;
