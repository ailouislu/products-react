import { getLawnmowers } from "./LawnmowerRepository";
import { getPhoneCases } from "./PhoneCaseRepository";
import { getTShirts } from "./TShirtRepository";
import { getNZD, getUSD, getEuro } from "./fakeExchangService";

function ProductDataConsolidator (exchangRate) {
	const lawnmowerProducts = getLawnmowers();
	const phoneCaseProducts = getPhoneCases();
	const tShirtProductsts = getTShirts();

	let products = [];
	let count = 1;

	for (let i = 0; i < lawnmowerProducts.length; i++) {
		products.push({
			id: lawnmowerProducts[i].id,
			name: lawnmowerProducts[i].name,
			price: (lawnmowerProducts[i].price * exchangRate).toFixed(2),
			type: "Lawnmower"
		});
    	count++;
	}

	for (let i = 0; i < phoneCaseProducts.length; i++) {
		products.push({
			id: count,
			name: phoneCaseProducts[i].name,
			price: (phoneCaseProducts[i].price * exchangRate).toFixed(2),
			type: "Phone Case"
		});
    	count++;
	}

	for (let i = 0; i < tShirtProductsts.length; i++) {
		products.push({
			id: count,
			name: tShirtProductsts[i].name,
			price: (tShirtProductsts[i].price * exchangRate).toFixed(2),
			type: "T-Shirt"
		});
    	count++;
	}

	return products;
}


export function getAllProductsNZD() {
  return ProductDataConsolidator(getNZD());
}

export function getAllProductsUSD() {
  return ProductDataConsolidator(getUSD());
}

export function getAllProductsEuro() {
  return ProductDataConsolidator(getEuro());
}

