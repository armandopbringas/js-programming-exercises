// Creamos una Promesa
const fnAsync = () => {
    return new Promise((resolve, reject) => {
      (true)
      ? setTimeout(() => resolve('Me ejecuto antes del final'), 2000)
        : reject(new Error('Error!'));
    })
}

// Creamos nuesta Función Asincrona
const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('Me ejecuto al final')
}

console.log ('Primero'); // 1
anotherFn();            // 3
console.log('Segundo')    // 2
