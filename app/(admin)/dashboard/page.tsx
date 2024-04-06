"use client"
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { ProductType } from "@/libs/definitions";
import { Button, Modal } from "flowbite-react";

export default function Dashboard() {
	const [products, setProducts] =useState<ProductType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [openModal, setOpenModal] = useState(false);
	const [productDetail, setProductDetail] = useState<ProductType | null>(null);

	// fetch products
	useEffect(() => {
		setLoading(true);
		fetch("https://store.istad.co/api/products/")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results)
				setProducts(data.results);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);

	const [imagePlaceholder, setImagePlaceholder] = useState<string>(
		"https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
	);

	const handleViewProduct = (product: ProductType) => {
		setProductDetail(product);
		setOpenModal(true);
	};
	
	const columns: TableColumn<ProductType>[] = [
		{
			name: "Title",
			selector: (row) => row.name,
		},

		{
			name: "Price",
			selector: (row) => row.price,
			sortable: true,
		},
		{
			name: "Thumbnail",
			selector: (row): any => (
				<img className="w-16 h-16" src={row.image} alt={row.image} />
			),
			sortable: true,
		},
		{
			name: "Action",
			selector: (row): any => (
				<div>
					<button
						onClick={() => handleViewProduct(row)}
						className="text-gray-100 bg-lime-500 mx-1 px-3 py-2 rounded-md text-sm "
					>
						view
					</button>
					<button className="text-gray-100 bg-amber-500 mx-1 px-3 py-2 rounded-md text-sm">edit</button>
					<button className="text-gray-100 bg-red-500 mx-1 px-3 py-2 rounded-md text-sm">delete</button>
				</div>
			),
		},
	];

	return (
		<main className="h-screen">
			<DataTable
				fixedHeader
				progressPending={loading}
				columns={columns}
				data={products}
				pagination
				customStyles={customStyles}
				striped
				highlightOnHover
			/>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<Modal.Header>Product Detial</Modal.Header>
				<Modal.Body>	
					<div className="space-y-6">
						<img
							src={productDetail?.image || imagePlaceholder}
							alt={productDetail?.name || "Untitle"}
							width={250}
							height={300}
						/>
						<h3 className="text-3xl text-gray-700">{productDetail?.name || "Untitle"}</h3>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							{productDetail?.desc|| "No description"}
						</p>
					</div>
				</Modal.Body>
			</Modal>
		</main>
	);
}
const customStyles = {
	rows: {
		style: {
			minHeight: "72px", 
		},
	},
	headCells: {
		style: {
			paddingLeft: "38px", 
			paddingRight: "8px",
			fontSize: "15px",
			backgroundColor: "#f1f1f1",
		},
	},
	cells: {
		style: {
			paddingLeft: "38px", 
			paddingRight: "8px",
		},
	},
};
