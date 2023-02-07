//from a messageHistory array and a newMessage string, returns a string
//that can be used as a prompt for OpenAI's API, which is used to simulate memory from
//previous messages
export const getQuery = (newMessage, messageHistory) => {
	const intro =
		'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.';
	const prompt = messageHistory
		.map((message) => {
			return message.user === 'me'
				? `Human: ${message.text}`
				: `AI: ${message.text}`;
		})
		.join('\n');

	return intro + '\n' + prompt + '\nHuman: ' + newMessage + '\nAI:';
};
