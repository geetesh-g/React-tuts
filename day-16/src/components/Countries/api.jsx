import axios from "axios";
const baseURL = "http://localhost:3001/data";

export const getData = ({ page, per_page = 2 }) => {
	return axios.get(`${baseURL}`, {
		params: {
			_page: page,
			_per_page: per_page,
		},
	});
};

export const deleteCountry = (id) => {
	return axios.delete(`${baseURL}/${id}`);
};

export const postCountry = (data) => {
	console.log(data);
	const { population, country } = data;
	return axios.post(`${baseURL}`, {
		population,
		country,
	});
};
