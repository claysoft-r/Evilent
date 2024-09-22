import mongoose, { ConnectOptions } from "mongoose";

let conexion: typeof mongoose = null;

// Iniciamos la conexion de la base de datos
export const DBClientConnnect = async () => {
    try {

        if (conexion == null) {
            conexion = await mongoose.connect('mongodb://root:root@localhost:27017/' as string, {
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 10000, // Tiempo máximo de espera para la conexión
                socketTimeoutMS: 45000,  // Tiempo máximo para la comunicación con el servidor MongoDB
                wtimeoutMS: 2500, // Tiempo máximo de espera de escritura
            } as ConnectOptions);
            console.log('ESTABLECEMOS CONEXION');
            
            return conexion;
        }

        console.log('REUTILIZAMOS CONEXION');

    } catch (error) {
        console.log(error);
        process.exit(1);        
    }
}


// Desconectamos la sesion de la base de datos
export const DBClientDisconnect = async () => {
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        process.exit(1);        
    }
}