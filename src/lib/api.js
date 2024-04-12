import { status } from "./store";


export const getRandomQuestions = async ({ category, difficulty }) => {


	// return [
	// 	{
	// 		"type": "multiple",
	// 		"difficulty": "medium",
	// 		"category": "History",
	// 		"question": "All of the following are names of the Seven Warring States EXCEPT:",
	// 		"correct_answer": "Zhai (翟)",
	// 		"incorrect_answers": [
	// 			"Zhao (趙)",
	// 			"Qin (秦)",
	// 			"Qi (齊)"
	// 		]
	// 	},
	// 	{
	// 		"type": "multiple",
	// 		"difficulty": "hard",
	// 		"category": "Science: Mathematics",
	// 		"question": "Which of the following famous mathematicians died in a duel at the age of 20?",
	// 		"correct_answer": "Galois",
	// 		"incorrect_answers": [
	// 			"Abel",
	// 			"Euler",
	// 			"Gauss"
	// 		]
	// 	},
	// 	{
	// 		"type": "multiple",
	// 		"difficulty": "easy",
	// 		"category": "Entertainment: Video Games",
	// 		"question": "Which of these characters is the mascot of the video game company SEGA?",
	// 		"correct_answer": "Sonic the Hedgehog",
	// 		"incorrect_answers": [
	// 			"Dynamite Headdy",
	// 			"Alex Kidd",
	// 			"Opa-Opa"
	// 		]
	// 	},
	// 	{
	// 		"type": "multiple",
	// 		"difficulty": "medium",
	// 		"category": "Celebrities",
	// 		"question": "Which American celebrity died in 1977 playing golf in La Moraleja, Madrid?",
	// 		"correct_answer": "Bing Crosby",
	// 		"incorrect_answers": [
	// 			"Elvis Presley",
	// 			"Charlie Chaplin",
	// 			"Groucho Marx"
	// 		]
	// 	}
	// ]



	var url = new URL('https://opentdb.com/api.php');
	url.searchParams.append('amount', 4);

	var params = { difficulty, category };
	Object.keys(params).filter(k => params[k]).forEach(key => url.searchParams.append(key, params[key]));

	console.log(url.toString());
	return fetch(url.toString())
		.then((res) => res.json())
		.then((res) => {
			console.log(res)
			if (res.response_code == 5) {
				status.set('rate limit, try again in a few seconds')
			}
			else {
				status.set('')
			}

			return res.results
		})

}

// get data from the opentrivia api
export const getQuestions = async ({ category, difficulty, type, count = 2, }) => {

	var url = new URL('https://opentdb.com/api.php');
	var params = { amount: count, category: category?.id, difficulty, type };
	console.log({ params })
	Object.keys(params).filter(k => params[k]).forEach(key => url.searchParams.append(key, params[key]));
	console.log(url.toString());



	var example = JSON.parse(`{
		"response_code": 0,
		"results": [
		{
		"type": "multiple",
		"difficulty": "medium",
		"category": "Science: Computers",
		"question": "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
		"correct_answer": "Santa Clara",
		"incorrect_answers": [
		"Palo Alto",
		"Cupertino",
		"Mountain View"
		]
		},
		{
		"type": "boolean",
		"difficulty": "medium",
		"category": "Science: Computers",
		"question": "The HTML5 standard was published in 2014.",
		"correct_answer": "True",
		"incorrect_answers": [
		"False"
		]
		},
		{
		"type": "multiple",
		"difficulty": "medium",
		"category": "Science: Computers",
		"question": "What does &quot;LCD&quot; stand for?",
		"correct_answer": "Liquid Crystal Display",
		"incorrect_answers": [
		"Language Control Design",
		"Last Common Difference",
		"Long Continuous Design"
		]
		}
		]
		}`)

	// return example.results


	const data = await fetch(url.toString())
		.then(r => r.json())
		.catch((response) => {
			console.log(2, response.status, response.statusText);

			// console.error("[makeRateLimitedRequest] error", error)
		});
	return data.results;
}


let categoryCache = null
export const getCategories = async () => {
	if (categoryCache) return categoryCache
	const api_category = await fetch("https://opentdb.com/api_category.php").then(r => r.json())
	const api_count_global = await fetch("https://opentdb.com/api_count_global.php").then(r => r.json())
	console.log({ api_category, api_count_global })
	for (const category of api_category.trivia_categories) {
		const { id } = category
		const count = api_count_global.categories[id].total_num_of_verified_questions
		category.count = count
	}


	categoryCache = api_category.trivia_categories
	return api_category.trivia_categories;
}



