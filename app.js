require('colors');

const math = require('./modules/math.js')

console.clear();


const main = async() => {
    let a= (math.getRandomInt(10));
    let b= (math.getRandomInt(10));

    console.log('****************************************'.red);
    console.log('*      '.green, 'Funciones Mateticas'.bgGreen,'           *'.green);
    console.log('****************************************\n'.red);
    console.log('****************************************'.green);
    console.log('*    ' +"numeros generados =>"+" "+a+" , "+b, '       *');
    console.log('****************************************'.green);
    console.log('*    '.cyan +" resta ("+a+" - "+b+") =" + math.substract(a,b),'                *'.cyan);
    console.log('*    '.cyan +" multiplica ("+a+" * "+b+") =" + math.multiply(a,b),'          *'.cyan);
    console.log('*   '.cyan +" divide ("+a+" / "+b+") =" + math.divide(a,b),'*'.cyan);

    console.log('****************************************\n'.green);
}

main();