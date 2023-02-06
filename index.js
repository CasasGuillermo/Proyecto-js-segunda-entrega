// Creo un objeto tipo clase para crear los productos disponibles.

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto ("royal canin", 500);
const producto2 = new Producto ("pedigree", 350);
const producto3 = new Producto ("maxium", 400);
const producto4 = new Producto ("natural meet", 450);
const producto5 = new Producto ("doggi", 200);
const producto6 = new Producto ("pelota juguete", 30);
const Producto7 = new Producto ("peluche", 20);
const producto8 = new Producto ("hueso", 10);
const producto9 = new Producto ("correa pequeña", 5);
const producto10 = new Producto ("correa grande", 15);

// Creo un array para incluir en el a los objetos

const listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, Producto7, producto8, producto9, producto10]

console.log (listaProductos);

// creo un array vacio que funcionara como un carrito

const productosComprados = []

// Creo una condicional para que el usario pueda ingresar una respuesta y en caso de ser si, se muestre una lista con los productos a elegir.

let usuario = prompt ("Bienvenido a nuestro sitio web, desea comprar algun producto?");

if (usuario == "si") {
    alert ("A continuacion se mostrara una lista con los productos a elegir");

    let todosLosProductos = listaProductos.map ((producto) => producto.nombre + " " + producto.precio + "$");

    alert (todosLosProductos.join (" - " + "\n"));
} else {
    alert ("Gracias por su visita!");
}

// Le pido al usuario que ingrese los productos a comprar los cuales estan en un bucle donde el usuario puede elegir hasta cuando comprar

while (usuario != "no") {
    let producto = prompt ("agrega un producto a tu carrito");
    let precio = 0
    if (producto == "royal canin" || producto == "pedigree" || producto == "maxium" || producto == "natural meet" || producto == "doggi" || producto == "pelota de juguete" || producto == "peluche" || producto == "hueso" || producto == "correa pequeña" || producto == "correa grande") {
        switch (producto) {
            case "royal canin":
                precio = 500;
                break;
            case "pedigree":
                precio = 350;
                break;
            case "maxium":
                precio = 400;
                break;
            case "natural meet":
                precio = 450;
                break;
            case "doggi":
                precio = 200;
                break;
            case "pelota de juguete":
                precio = 30;
                break;
            case "peluche":
                precio = 20;
                break;
            case "hueso":
                precio = 10;
                break;
            case "correa pequeña":
                precio = 5;
                break;
            case "correa grande":
                precio = 15;
                break;
            default: 
                break;

        }

        // Se le pide al usuario que ingrese la cantidad de unidades por producto

    let cantidadDeUnidades = parseInt (prompt ("elija cantidad de unidades"))
    
    productosComprados.push ({producto, cantidadDeUnidades, precio})
    console.log (productosComprados)
    } else {
        alert ("ingreso un producto incorrecto")
    }

    usuario = prompt ("Quiere agregar un producto mas?")
    while (usuario == "no") {
        alert ("Muchas gracias por su compra!")
        productosComprados.forEach ((totalProductos) => {
            console.log ("producto: " + totalProductos.producto + " unidades: " + totalProductos.cantidadDeUnidades + " precio por producto : "  + totalProductos.cantidadDeUnidades * totalProductos.precio)
        })
        break;
    }
}

// A traves del metodo reduce se multiplican los productos y la cantidad de unidades y se muestra mediante consola el precio total por producto y el precio total de la compra

const precioTotal = productosComprados.reduce ((acumulador, el) => acumulador + el.precio * el.cantidadDeUnidades, 0);
console.log ("el total a pagar es: " + " $ " + precioTotal);




