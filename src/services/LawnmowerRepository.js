function LawnmowerRepository() { }

LawnmowerRepository.prototype.getAll = function () {
	return [
		{
			id: 1,
			name: "Hewlett-Packard Rideable Lawnmower",
			fuelEfficiency: "Very Low",
			isVehicle: true,
			price: 3000
		}, {
			id: 2,
			name: "Fisher Price's My First Lawnmower",
			fuelEfficiency: "Ultimate",
			isVehicle: false,
			price: 45
		}, {
			id: 3,
			name: "Volkswagen LawnMaster 39000B Lawnmower",
			fuelEfficiency: "Moderate",
			isVehicle: false,
			price: 1020
		}
	];
}

export function getLawnmowers() {
	return LawnmowerRepository.prototype.getAll();
}
