require('colors');

const math = require('./modules/math.js')

console.clear();


const main = async() => {
    let a= (math.getRandomInt(10));
    let b= (math.getRandomInt(10));

    console.log('****************************************'.green);
    console.log('*      '.green, 'Funciones Mateticas'.bgGreen,'           *'.green);
    console.log('****************************************\n'.green);
    console.log('****************************************'.cyan);
    console.log('*    ' +"numeros generados =>"+" "+a+" , "+b, '       *');
    console.log('****************************************'.cyan);
    console.log('*    '.red +" suma ("+a+" + "+b+") =" + math.add(a,b),'                *'.red);
    console.log('*    '.red +" resta ("+a+" - "+b+") =" + math.substract(a,b),'                *'.red);
    console.log('*    '.red +" multiplica ("+a+" * "+b+") =" + math.multiply(a,b),'          *'.red);
    console.log('*   '.red +" divide ("+a+" / "+b+") =" + math.divide(a,b),'*'.red);

    console.log('****************************************\n'.cyan);
}

main();