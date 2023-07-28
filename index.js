const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}

customer.email = "jak3Smith1992@email.com";
customer.phone = 3195511234;
customer.zipCode = 63132;
customer.favoriteFlavors = ["coffee", "strawberry", "matcha"];


['zipCode', 'favoriteStore'].forEach(favoriteStore => delete customer[favoriteStore]); //mutliple in one line

// delete customer.zipCode;
// delete customer.favoriteStore;

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.log(Object.keys(customer));


