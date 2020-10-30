function add(nums = []) {
    let total = 0;
    nums.forEach((element) => {
        total += element;
    });
    console.log(total);
}

add();