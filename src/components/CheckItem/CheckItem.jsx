import React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import ProductItem from "../ProductItem/ProductItem";
import CheckItemImg1 from "../../assets/images/checkItemImg1.png";

import "./CheckItem.scss";

const data = [
	{
		id: 1,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Active",
		price: "$98",
		sale: "$3,200",
		saleStatus: "55.8%",
		views: "48k",
		viewsStatus: "8px",
		likes: "8",
		likesStatus: "40px",
	},

	{
		id: 2,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Active",
		price: "$48",
		sale: "$3,200",
		saleStatus: "37.8%",
		views: "80k",
		viewsStatus: "20px",
		likes: "8",
		likesStatus: "24px",
	},

	{
		id: 3,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Deactive",
		price: "$98",
		sale: "$3,200",
		saleStatus: "27.5%",
		views: "48k",
		viewsStatus: "44px",
		likes: "8",
		likesStatus: "8px",
	},

	{
		id: 4,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Active",
		price: "$98",
		sale: "$3,200",
		saleStatus: "37.8%",
		views: "24k",
		viewsStatus: "12px",
		likes: "8",
		likesStatus: "44px",
	},

	{
		id: 5,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Deactive",
		price: "$98",
		sale: "$3,200",
		saleStatus: "27.5%",
		views: "20k",
		viewsStatus: "44px",
		likes: "8",
		likesStatus: "24px",
	},

	{
		id: 6,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Active",
		price: "$98",
		sale: "$3,200",
		saleStatus: "55.8%",
		views: "48k",
		viewsStatus: "8px",
		likes: "8",
		likesStatus: "44px",
	},

	{
		id: 7,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Deactive",
		price: "$98",
		sale: "$3,200",
		saleStatus: "27.5%",
		views: "80k",
		viewsStatus: "44px",
		likes: "8",
		likesStatus: "8px",
	},

	{
		id: 8,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Active",
		price: "$98",
		sale: "$3,200",
		saleStatus: "37.8%",
		views: "24k",
		viewsStatus: "12px",
		likes: "8",
		likesStatus: "44px",
	},

	{
		id: 9,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Deactive",
		price: "$98",
		sale: "$3,200",
		saleStatus: "27.5%",
		views: "20k",
		viewsStatus: "44px",
		likes: "8",
		likesStatus: "24px",
	},

	{
		id: 10,
		img: CheckItemImg1,
		title: "Bento Matte 3D Illustration",
		span: "UI design kit",
		status: "Deactive",
		price: "$98",
		sale: "$3,200",
		saleStatus: "27.5%",
		views: "20k",
		viewsStatus: "44px",
		likes: "8",
		likesStatus: "24px",
	},
];

const CheckItem = () => {
	const [checked, setChecked] = React.useState([true, false]);

	const handleChange1 = (event) =>
		setChecked([event.target.checked, event.target.checked]);
		const handleChange3 = (event) =>
		setChecked([checked[0], event.target.checked]);
		const handleChange2 = (event) =>
			setChecked([event.target.checked, checked[1]]);

	const children = (
		<Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
			{data.map((el, index) => {
				return (
					<div className="CheckItem-element">
						<FormControlLabel
							style={{ margin: 0, position: "absolute" }}
							label=""
							control={
								<Checkbox
									checked={checked[0]}
									onChange={handleChange2}
								/>
							}
						/>
						<ProductItem
							key={index}
							img={el.img}
							title={el.title}
							span={el.span}
							status={el.status}
							price={el.price}
							sale={el.sale}
							saleStatus={el.saleStatus}
							views={el.views}
							viewsStatus={el.viewsStatus}
							likes={el.likes}
							likesStatus={el.likesStatus}
							up
						/>
					</div>
				);
			})}

			<FormControlLabel
				label="Child 2"
				control={
					<Checkbox checked={checked[1]} onChange={handleChange3} />
				}
			/>
		</Box>
	);

	return (
		<div className="CheckItem">
			<FormControlLabel
				label="Product"
				control={
					<Checkbox
						checked={checked[0] && checked[1]}
						// indeterminate={checked[0] !== checked[1]}
						onChange={handleChange1}
					/>
				}
			/>
			{children}
		</div>
	);
};

export default CheckItem;
