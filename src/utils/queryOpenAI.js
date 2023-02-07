//queries openAI with a given string
export const queryOpenAI = async (text) => {
	const DEFAULT_PARAMS = {
		model: 'text-davinci-003',
		temperature: 0.7,
		max_tokens: 256,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	};
	const query = text;
	const params_ = { ...DEFAULT_PARAMS, prompt: text };
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + process.env.REACT_APP_OPEN_AI_API_KEY,
		},
		body: JSON.stringify(params_),
	};

	const response = await fetch(
		'https://api.openai.com/v1/completions',
		requestOptions
	);
	const data = await response.json();

	return data.choices[0].text || {};
};
