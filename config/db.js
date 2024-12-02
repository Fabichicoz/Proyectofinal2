import sql from 'mssql';

// Configuración para Trusted Connection
const config = {
    server: "localhost",  
    database: "Miapp", // Nombre de tu base de datos
    options: {
        encrypt: false, // No es necesario en conexiones locales
        trustServerCertificate: true, // Asegura confianza en el certificado del servidor
    },
    authentication: {
        type: "ntlm", // Autenticación de Windows
        options: {
            domain: "", // Deja vacío si no usas un dominio
            userName: "", // Tu usuario de Windows (deja vacío para usar el usuario actual)
            password: "", // Tu contraseña de Windows (deja vacío para usar el usuario actual)
        },
    },
};

// Conectar a SQL Server
export async function connectToDB() {
    try {
        const pool = await sql.connect(config);
        console.log("Conexión exitosa a SQL Server");
        return pool;
    } catch (error) {
        console.error("Error al conectar a SQL Server:", error);
    }
}

export { sql };
