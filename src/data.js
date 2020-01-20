let quotes = [
    {text: "Elementary, my dear Watson", author: "Sherlock Holmes"},
    {text: 'I think therefore I am', author: "Rene Descartes"},
    {text: 'Life is like riding a bicycle. To keep your balance, you must keep moving', author: "Albert Einstein"},
    {text: "You talkin' to me?", author: "Travis Bickle"}
];

export function getNumberQuotes(){
    return quotes.length;
}

export function getQuote(i){
    return quotes[i];
}

export function removeQuote(i){
    quotes.splice(i,1);
}

export function addQuote(text,auteur){
    quotes.push({text:text,author:auteur});
}