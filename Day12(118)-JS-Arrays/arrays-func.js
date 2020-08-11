function printReverse(ar) {
    for (var i = ar.length - 1; i >= 0; i--) {
        console.log(ar[i]);
    }
}

function isUniform(ar) {
    var first_item = ar[0];

    // we dont use for each because it doesnt stop at false and peels of only one layer
    // ar.forEach(function(element) {
    //     if (element != first_item) {
    //         return false;
    //     }
    // });

    for (var i = 1; i <= ar.length; i++) {
        if (element != first_item) {
            return false;
        }
    }
    return true;
}

function sumArray(ar) {
    var sum = 0;
    ar.forEach(function(element) {
        sum = sum + element;
    });
    return sum;
}

function max(ar) {
    var max_el = 0;
    ar.forEach(function(element) {
        if (element > max_el) {
            max_el = element;
        }
    });
    return max_el;
}