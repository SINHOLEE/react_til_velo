import React, { useState } from "react";

const IterationSample = () => {
	const [names, setNames] = useState([
		{ id: 1, name: "이신호" },
		{ id: 2, name: "박믄희" },
	]);

	const [nextId, setNextId] = useState(3);
	const [inputName, setInputName] = useState("");
	const onChange = (e) => {
		setInputName(e.target.value);
	};

	const onClick = (e) => {
		if (inputName === "") {
			return;
		}
		// const nextNames = [...names, { id: nextId, name: inputName }];
		const nextNames = names.concat({ id: nextId, name: inputName });
		setNames(nextNames);
		setNextId(nextId + 1);
		setInputName("");
	};

	const onRemove = (id) => {
		const nextNames = names.filter((obj) => id !== obj.id);
		if (window.confirm("정말 삭제하시겠습니까?") === true) {
			setNames(nextNames);
		} else {
			return;
		}
	};
	const onKeyPress = (e) => {
		if (e.key === "Enter") {
			onClick();
		}
	};
	const nameList = names.map((obj) => (
		<li
			key={obj.id}
			onDoubleClick={() => {
				onRemove(obj.id);
			}}
		>
			{obj.name}
		</li>
	));
	console.log(nameList);
	return (
		<>
			<input
				type='text'
				value={inputName}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
			<button type='button' onClick={onClick}>
				추가
			</button>
			<ul>{nameList}</ul>
		</>
	);
};

export default IterationSample;
