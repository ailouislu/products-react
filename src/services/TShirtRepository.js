function TShirtRepository() { }

TShirtRepository.prototype.getAll = function () {
	return [
		{
			id: 1,
			colour: "Blue",
            name: "Xamarin C# T-Shirt",
            price: 15.0,
            shirtText: "C#, Xamarin"
		}, {
            id: 2,
            colour: "Black",
            name: "New York Yankees T-Shirt",
            price: 8.0,
            shirtText: "NY"
        }, {
			id: 3,
            colour: "Green",
            name: "Disney Sleeping Beauty T-Shirt",
            price: 10.0,
            shirtText: "Mirror mirror on the wall..."
        }
	];
}

export function getTShirts() {
	return TShirtRepository.prototype.getAll();
}
