const flowers = [
	{
		id: 1,
		color: "White",
		species: "Rose",
		price: "0.90"
	},
	{
		id: 2,
		color: "Red",
		species: "Tulip",
		price: "1.10"
	},
]

const addFlower = (flowerObject) => {
	const maxId = flowers[flowers.length - 1].id;
	flowerObject.id = maxId + 1;
	flowers.push(flowerObject);
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

	for (const flower of flowers) {
		if (flower.price >= 1.00) {
			expensiveFlowers.push(flower)
		}
	}

    return expensiveFlowers  // Do not change this code
}

// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

