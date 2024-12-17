import { mockProducts } from "../mockProducts";
import ProductDetails from "./ProductDetails";
import { Metadata } from "next";

type Props = {
	params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const product = mockProducts.find(p => p.id === parseInt(params.id));

	return {
		title: product ? product.product_name : 'Product Not Found',
	}
}

export default function ProductPage({ params }: Props) {
	const product = mockProducts.find(p => p.id === parseInt(params.id));

	if (!product) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="alert alert-error">
					<span>Product not found</span>
				</div>
			</div>
		);
	}

	return <ProductDetails product={product} />;
}