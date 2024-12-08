const loadData = (key) => {
	try {
		let temp = localStorage.getItem(key);
		temp = JSON.parse(temp);
		return temp;
	} catch (error) {
		return undefined;
	}
};

const setData = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
};

export { loadData, setData };
