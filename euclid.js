const math = require('mathjs');


module.exports.euclid = function (m, b) {
    let [A1, A2, A3] = [1, 0, m];
    let [B1, B2, B3] = [0, 1, b];
    let Q;
    console.log(`                                Extended Euclid Algorithm\n`);
    console.log(`[A1, A2, A3] = [1, 0, ${m}] \n[B1, B2, B3] = [0, 1, ${b}]`);

    while (B3 != 0 || B3 != 1) {
        if (B3 == 0) {
            A3 = math.gcd(m, b);
            console.log(`B3 = 0 => A3 = gcd(b:${m}, b:${b}) => ${A3} NO INVERSE`);
            return;
        }
        if (B3 == 1) {
            B3 = math.gcd(m, b);
            B2 = math.mod(B2, m);
            console.log(`B3 = 1 => B3 = gcd(b:${m}, m:${b}) => ${B3} \n
                        B2= (f)^-1 mod m => B2 = ${B2}`);
            return B2;
        }
        Q = math.floor(A3 / B3);
        console.log(`Q = floor(A3/B3) = floor(${A3}/${B3}) = ${Q}`)
        let [T1, T2, T3] = [A1 - [Q * B1], A2 - [Q * B2], A3 - [Q * B3]];
        console.log(`[T1, T2, T3] = [A1 - [Q * B1], A2 - [Q * B2], A3 - [Q * B3]] => [${T1}, ${T2}, ${T3}] \n`);

        [A1, A2, A3] = [B1, B2, B3];
        console.log(`[A1, A2, A3] = [B1:${B1}, B2:${B2}, B3:${B3}] => ` + `[${A1}, ${A2}, ${A3}] `);
        [B1, B2, B3] = [T1, T2, T3];
        console.log(`[B1, B2, B3] = [T1, T2, T3] => ` + `[${B1}, ${B2}, ${B3}]\n`);
    }
    
};
