function race(v1, v2, g) {
    // your code
    // 720*t + 70 and 850*t
    // v1*t + g = v2*t
    // (v2-v1)*t = g
    const h = g/(v2-v1);

    var hour = Math.floor(h / 1);
    var minute = Math.floor((h * 60) % 60);
    var second = Math.floor((h * 3600) % 60);

    return [hour, minute, second];
}

console.log(race(80, 91, 37));