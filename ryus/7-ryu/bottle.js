/**
 * Created by John on 2/10/2017.
 */

function tenGreenBottles(n) {
    // Your code here
    const nums = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

    var bottles = '';
    for (var i = n; i > 1; i--) {
        bottles += nums[i-1] + " green bottles hanging on the wall,\n"+
            nums[i-1] + " green bottles hanging on the wall,\n"+
            "And if one green bottle should accidentally fall,\n"+
            "There'll be " + nums[i-2].toLowerCase() + " green bottle hanging on the wall.\n"
            +"\n";
    }

    bottles += "One green bottle hanging on the wall,\n"+
        "One green bottle hanging on the wall,\n"+
        "If that one green bottle should accidentally fall,\n"+
        "There\'ll be no green bottles hanging on the wall.\n";

    return bottles;
}

console.log(tenGreenBottles(2))
