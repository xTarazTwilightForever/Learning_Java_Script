let n = 100, k = 1, s = 0;
let text = "1<sup>2</sup>+2<sup>2</sup>+...+ ";
text += n+"<sup>2</sup> = ";

do {
    s+=k*k;
    k++;
} while (k<=n);
document.write(text+s);