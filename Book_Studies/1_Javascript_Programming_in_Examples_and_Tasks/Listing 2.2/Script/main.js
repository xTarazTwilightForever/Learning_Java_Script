let userName;

userName=prompt("Let's get acquainted, shall we? What's your name?", "");

if (userName!="") {
    document.write(`Nice to meet you, ${userName}!`);
}

else {
    document.write("It's a pity you didn't introduce yourself. ");
}