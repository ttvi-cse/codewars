function getQuote(quotes, hero) {
    const quotes1 = {
        "Batm0n" : "WHERE IS SHE?",
        "Rob1n" : "Holy haberdashery, Batman",
        "Joke2" : "Let's put a smile on that faaaceee",
    }
    for (var prop in quotes1) {
        if (quotes1.hasOwnProperty(prop)) {
            if (prop == hero) {
                return `${prop} + ${quotes1[prop]}`;
            }
        }
    }
}

getQuote(["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n")