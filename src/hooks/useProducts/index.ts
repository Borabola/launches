import { Database } from "@firebase/database";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

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

				const unsubscribe = await onValue(
					productsRef,
					(snapshot) => {
						const data = snapshot.val();
						setProducts(data);
					}
				);
				return unsubscribe;
			};
			fetchProducts();
		},
		[currentUserId]
	);
	return products;
};

export default useProducts;
