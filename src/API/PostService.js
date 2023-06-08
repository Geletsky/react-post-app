import axios from "axios";

export default class PostService {

	static async getAll(limit = 9, page = 1) {
		const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: limit,
				_page: page
			}
		});

		const photos = await axios.get('https://jsonplaceholder.typicode.com/photos', {
			params: {
				_limit: limit,
				_page: page
			}
		});

		const [postsResponse, photosResponse] = await Promise.all([posts, photos])

		postsResponse.data.forEach((post, index) => {
			post.photo = photosResponse.data[index].url.replace('600', '400');
		})

		return postsResponse
	}

	static async getById(id) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
		return response;
	}

	static async getCommentsByPostId(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
		return response;
	}
}