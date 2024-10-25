import React, { useEffect, useState } from "react";
import { getData } from "./api";
import { useSearchParams } from "react-router-dom";
import AddCountry from "./AddCountry";
import { deleteCountry } from "./api";
import { postCountry } from "./api";

const currentPage = (page = 1) => {
	let pageNumber = Number(page);
	if (isNaN(pageNumber) || pageNumber <= 0) {
		pageNumber = 1;
	}
	return pageNumber;
};

const Countries = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [err, setErr] = useState(false);
	const [searchParam, setSerachParam] = useSearchParams();
	const pageNumber = currentPage(searchParam.get("page"));
	const [page, setPage] = useState(pageNumber);
	const [totalPage, setTotalPage] = useState(1);

	useEffect(() => {
		fetchData(page);
	}, [page]);

	useEffect(() => {
		setSerachParam({ page: page });
	}, [page]);

	const fetchData = async (page) => {
		setLoading(true);
		try {
			const res = await getData({ page });
			setData(res?.data?.data);
			setTotalPage(res?.data?.pages);
		} catch (error) {
			setErr(true);
		} finally {
			setLoading(false);
		}
	};

	const hanldleDelete = async (id) => {
		try {
			await deleteCountry(id);
			const newData = await getData({ page });
			console.log(newData);
			if (newData?.data?.prev !== page - 1 && page > 1) {
				setPage(page - 1);
			} else {
				await fetchData(page);
			}
		} catch (error) {
			console.log("Error deleting country", error);
		}
	};

	const postData = async (formState) => {
		try {
			await postCountry(formState);
			await fetchData(page);
		} catch (error) {
			console.log("Error adding country", error);
		}
	};

	return loading ? (
		<h1>Loading...</h1>
	) : err ? (
		<h1>Something went wrong</h1>
	) : (
		<>
			<AddCountry handlePost={postData} />
			<hr />
			<div>
				<h1>Countries Info</h1>
				{data.length <= 0 ? (
					<h1>List is Empty</h1>
				) : (
					data?.map((country) => {
						return (
							<div
								key={country.id}
								style={{
									padding: "6px",
									border: "1px solid",
									width: "30%",
									margin: "auto",
									marginTop: "5px",
								}}
							>
								<h5>{country.country}</h5>
								<button onClick={() => hanldleDelete(country.id)}>
									DELETE
								</button>
							</div>
						);
					})
				)}
				<div className="pagination">
					<button disabled={page === 1} onClick={() => setPage(page - 1)}>
						&lt;&lt; PREV
					</button>
					<button>{page}</button>
					<button
						disabled={page === totalPage}
						onClick={() => setPage(page + 1)}
					>
						NEXT &gt;&gt;
					</button>
				</div>
			</div>
		</>
	);
};
export default Countries;
