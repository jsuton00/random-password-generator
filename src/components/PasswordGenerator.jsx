import { generate } from 'generate-password-browser';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordGenerator = () => {
	const [revealPassword, setRevealPassword] = useState(false);
	const [inputPasswordValue, setPasswordValue] = useState('');
	const [characterLength, setCharacterLength] = useState(0);
	const [uppercaseLetters, setUppercaseLetters] = useState(false);
	const [lowercaseLetters, setLowercaseLetters] = useState(false);
	const [numbers, setNumbers] = useState(false);
	const [symbols, setSymbols] = useState(false);

	const onRevealPassword = () => setRevealPassword(!revealPassword);

	const onSubmit = (e) => {
		e.preventDefault();

		const password = generate({
			length: characterLength,
			numbers: numbers,
			symbols: symbols,
			lowercase: lowercaseLetters,
			uppercase: uppercaseLetters,
		});

		setPasswordValue(password);
	};

	return (
		<form className="generate-password-form">
			<div className="generate-password-display">
				<input
					id="generate-password-output"
					name="generate-password-output"
					type={revealPassword ? 'text' : 'password'}
					onChange={(e) => setPasswordValue(e.target.value)}
					className="generate-password-output"
					placeholder="********************************"
					value={inputPasswordValue}
				/>
				<span onClick={onRevealPassword} className="reveal-password-button">
					{revealPassword ? <FaEyeSlash /> : <FaEye />}
				</span>
			</div>
			<div className="generate-password-length">
				<label className="generate-password-length-row">
					<span className="generate-password-length-text">Characters</span>
					<span className="generate-password-length-number">
						{characterLength || 0}
					</span>
				</label>
				<input
					type="range"
					onChange={(e) => setCharacterLength(e.target.value)}
					className="generate-password-length-range"
					min="0"
					max="32"
					step="1"
					value={characterLength}
				/>
			</div>
			<div className="generate-password-options">
				<div className="generate-password-options-row">
					<input
						id="ckIncludeUppercaseLetters"
						name="ckIncludeUppercaseLetters"
						type="checkbox"
						onChange={(e) => setUppercaseLetters(e.target.checked)}
						className="generate-password-options-checkbox"
						value={uppercaseLetters}
					/>
					<label
						id="ckIncludeUppercaseLetters"
						htmlFor="ckIncludeUppercaseLetters"
						className="generate-password-options-label"
					>
						Include uppercase letters
					</label>
				</div>
				<div className="generate-password-options-row">
					<input
						id="ckIncludeLowercaseLetters"
						name="ckIncludeLowercaseLetters"
						type="checkbox"
						onChange={(e) => setLowercaseLetters(e.target.checked)}
						className="generate-password-options-checkbox"
						value={lowercaseLetters}
					/>
					<label
						id="ckIncludeLowercaseLetters"
						htmlFor="ckIncludeLowercaseLetters"
						className="generate-password-options-label"
					>
						Include lowercase letters
					</label>
				</div>
				<div className="generate-password-options-row">
					<input
						id="ckIncludeNumbers"
						name="ckIncludeNumbers"
						type="checkbox"
						onChange={(e) => setNumbers(e.target.checked)}
						className="generate-password-options-checkbox"
						value={numbers}
					/>
					<label
						id="ckIncludeNumbers"
						htmlFor="ckIncludeNumbers"
						className="generate-password-options-label"
					>
						Include numbers
					</label>
				</div>
				<div className="generate-password-options-row">
					<input
						id="ckIncludeSymbols"
						name="ckIncludeSymbols"
						type="checkbox"
						onChange={(e) => setSymbols(e.target.checked)}
						className="generate-password-options-checkbox"
						value={symbols}
					/>
					<label
						id="ckIncludeSymbols"
						htmlFor="ckIncludeSymbols"
						className="generate-password-options-label"
					>
						Include symbols
					</label>
				</div>
			</div>

			<button
				type="button"
				onClick={onSubmit}
				className="generate-password-button"
			>
				Generate
			</button>
		</form>
	);
};

export default PasswordGenerator;
