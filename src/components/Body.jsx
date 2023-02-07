import React from 'react';

import { queryOpenAI } from '../utils/queryOpenAI';
import { useState } from 'react';

import { MessageBar } from './MessageBar';
import { MessageHistory } from './MessageHistory';

import { getQuery } from '../utils/getQuery';

export const Body = () => {
	const [messageHistory, setMessageHistory] = useState([]);
	const [loading, setLoading] = useState(false);

	//adds the new message to the message history and waits for the response from the API
	const onNewMessage = async (message) => {
		//adds the new message to the message history
		setMessageHistory((prev) => [
			...prev,
			{
				text: message
					.replace(/^([\n]*)/g, '')
					.replace(/([\n]*)$/g, '')
					.trim(),
				sender: 'me',
			},
		]);

		setLoading(true);
		//waits for the response from the API

		const response = await queryOpenAI(
			getQuery(
				message
					.replace(/^([\n]*)/g, '')
					.replace(/([\n]*)$/g, '')
					.trim(),

				messageHistory
			)
		);

		//adds the API response to the message history
		setMessageHistory((prev) => [
			...prev,
			{
				text: response
					.replace(/^([\n]*)/g, '')
					.replace(/([\n]*)$/g, '')
					.trim(),
				sender: 'bot',
			},
		]);

		setLoading(false);
	};
	return (
		<div
			className='h-full flex flex-col overflow-hidden
			container'
		>
			<MessageHistory messageHistory={messageHistory} />
			<MessageBar onNewMessage={onNewMessage} disabled={loading} />
		</div>
	);
};
