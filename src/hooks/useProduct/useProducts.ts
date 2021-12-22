import { useEffect, useState } from "react";
import {ref, onValue} from "firebase/database";
import { Database } from "@firebase/database-types";



const useProducts = (
	currentUserId: string, database: Database
) => {
	const [products, setProducts] = useState(null);

	useEffect(
		() => {
			const fetchProducts = async () => {
				const productsRef = ref(
					database,
					`users/${currentUserId}/products/`
				);
				
				await onValue(
					productsRef,
					(snapshot) => {
						const data = snapshot.val();
						setProducts(data);
					}
				);
			};
			fetchProducts();
		},
		[currentUserId]
	);
	return products;
};

export default useProducts;