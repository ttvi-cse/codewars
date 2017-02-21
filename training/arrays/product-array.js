// arr[] = [10,3,5,6,2]
// prod[] = [180, 600, 360, 300, 900]

function productArray(arr) {
    const n = arr.length;
    var product = [];
    var p_left = 1, p_right = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (j < i) {
                p_left = p_left * arr[j];
            } else if (j > i) {
                p_right = p_right * arr[j];
            }
        }
        product.push(p_left * p_right);
        p_left = 1;
        p_right = 1;
    }
    console.log(product);
}

productArray([10,3,5,6,2]);