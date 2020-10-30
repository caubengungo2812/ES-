// function addressMaker(city, state) {
//     const newArray = { newCity: city, newState: state };
//     console.log(newArray);
// }

// addressMaker("Hanoi", "VietNam");

function addressMaker(address) {
    const { city, state } = address;

    const newAddress = {
        city,
        state,
        country: "VietNam",
    };
    console.log(newAddress);
}

addressMaker({ city: "HaNoi", state: "VietNam" });