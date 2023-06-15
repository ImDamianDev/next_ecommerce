// Importar la conexión a la base de datos
import dbConnect from 'lib/mongooseConnection';

// Establecer la conexión con la base de datos
dbConnect();

export default dbConnect;
