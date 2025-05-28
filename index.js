const URL = 'https://fakestoreapi.com/products';


const getData = async(url) => {  
    try {  
        const response = await fetch(url);  
        const data =  await response.json(); 
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};



const postData = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) // Ahora es dinámico
        });
        const data = await response.json();
        console.log('POST response:', data);
    } catch (error) {
        console.error('Error en POST:', error);
    }
};

//postData(URL, {
//    title: "T-Shirt-Rex",
//    price: 300,
//    category: "remeras"
//});



const deleteData = async (url, id) => {
    try {
        const response = await fetch(`${url}/${id}`, { // Agregando ID dinámico
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Eliminado correctamente');
        } else {
            console.error('Error al eliminar');
        }
    } catch (error) {
        console.error('Error en DELETE:', error);
    }
};




const args = process.argv.slice(2); // Ignora "node" y el nombre del script
const command = args[0]; // GET, POST, DELETE
const resource = args[1]; // products o products/<id>
const apiUrl = `https://fakestoreapi.com/${resource}`;

if (command === 'GET') {
    getData(apiUrl);
} else if (command === 'POST') {
    const [title, price, category] = args.slice(2);
    postData(apiUrl, { title, price, category });
} else if (command === 'DELETE') {
    const productId = args[1]; // ID del producto a eliminar
    deleteData(apiUrl, productId);
} else {
    console.log('Comando no reconocido. Usa GET, POST o DELETE.');
}




//npm run start GET products
//npm run start GET products/15
//npm run start POST products "T-Shirt-Rex" 300 "remeras"
//npm run start DELETE products/7
