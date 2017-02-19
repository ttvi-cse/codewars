function mod256WithoutMod(number) {
    while (number >= 256)
        number -= 256;
    return number;
}

console.log(mod256WithoutMod(process.argv[2]));

