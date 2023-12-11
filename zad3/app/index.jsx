"use client";

import React, { useState, useEffect } from "react";

function MainPage() {
		const [ numbers, setNumbers ] = useState([]);

		const fillArr = () => {
				const arr = [];
				for (let i = 0; i <= 9; i++) {
						arr.push(Math.floor(Math.random() * 100));
				}
				setNumbers(arr);
		};

		useEffect(() => {
				fillArr();
		}, []);

		const removeNum = (idx) => {
				const copyy = [...numbers];
				copyy.splice(idx, 1);
				setNumbers(copyy);
		};

		const removeButMe = (idx) => {
				setNumbers(numbers.splice(idx, 1));
		};

		const convertNum = (idx) => {
				const nums = [...numbers];
				if (typeof nums[idx] === "string") {
						const int = parseInt(nums[idx], 2);
						nums[idx] = int;
						setNumbers(nums);
				} else {
						const bin = (nums[idx] >>> 0).toString(2);
						nums[idx] = bin;
						setNumbers(nums);
				}
		};

		const displayNums = () => {
				return numbers.map((value, idx) => {
						return (
								<li key="key{num}">
										{value}
										<br />
										<button onClick={ () => removeNum(idx) }>usuń mnie</button>
										<button onClick={ () => convertNum(idx) }>konwertuj</button>
										<button onClick={ () => removeButMe(idx) }>usuń pozostałych</button>
								</li>
						);
				});
		};

		return (
				<>
						<ul>{displayNums()}</ul>
						<button onClick={ fillArr }>get random numbers</button>
				</>
		);
}

export default MainPage;
