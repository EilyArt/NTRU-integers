const { euclid } = require('./euclid');
const math = require('mathjs');

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    );
}


module.exports.integer = function (Q, m) {

    let  f, g, r;
    // m = 4;
    // Q = 1243;
    r = m + 1;

    while (true) {
        while (true) {
            f = Math.floor(Math.random() * Math.sqrt(Q / 2));
            g = between(Math.sqrt(Q / 4)+1, Math.sqrt(Q / 2)-1);
            let gcd = math.gcd(f, [Q * g]) == 1;
            let B2 = euclid(Q, f);
            if (gcd && f, g >= 2 && B2 != undefined && math.gcd(f, g) == 1) break;
        }
        console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
        console.log('\n                                Start...\n');
        console.log(`f < sqrt(${Q}/2) => ******* f = ${f} *******`);
        console.log(`sqrt(${Q}/4) < g < sqrt(${Q}/2) => ******* g = ${g} *******\n`);
        console.log(`GCD(f, Q.g) = GCD(${f}, ${Q * g}) = ${math.gcd(f, Q * g)} \n`);
        console.log(`(f)^-1 mod Q = (${f})-1 mod ${Q} \n`);

        B2 = euclid(Q, f);
        console.log('\n                                ENCRYPTION...\n');
        console.log("B2 = " + B2);
        console.log(`Since B3 = T3 = 1 and (${f})^-1 mod ${Q} = T2 = B2 = ${B2} \n Check it:`);
        console.log(`${B2} * ${f} mod ${Q} = `, math.mod(B2 * f, Q) + `\n`);
        console.log(`h = (${f})^-1 * g mod Q = ${B2} * ${g} mod ${Q}`);

        let h = math.mod(B2 * g, Q);
        console.log(`h = ${h} \n`);

        console.log(`e = r * h + m mod Q => ${r} * ${h} + ${m} mod ${Q}`);
        let e = math.mod((r * h) + m, Q);
        console.log(`e = ${e} \n`);

        console.log('                                DECRYPTION...\n');


        const a = math.mod(math.multiply(f, e), Q);

        console.log(`a = f * e mod Q = ${f} * ${e} mod ${Q} with 0 < a < Q`);
        console.log(`a = ${a}\n`);

        const b = math.mod(math.multiply(B2, a), g);

        console.log(`b = (f)^-1 * a mod g = ${B2} * ${a} mod ${g} with 0 < b < Q`);
        console.log(`b = ${b}`);
        console.log(`Encrypted m was ${m}`);
        console.log(`m = b = ${b}`);
        if (m == b && B2 != 1) {
            break;
        }
    }
};