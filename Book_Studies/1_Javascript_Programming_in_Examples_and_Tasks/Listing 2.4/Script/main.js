let n = 100, k = 1, s = 0;
let text = "1<sup>2</sup>+2<sup>2</sup>+...+ ";
text += n+"<sup>2</sup> = ";

while (k<=n) {
    s+=k*k;
    k++;
}
document.write(text+s);