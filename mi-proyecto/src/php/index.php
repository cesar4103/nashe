<?php
// Conexión a la base de datos
try {
    $pdo = new PDO(
        "mysql:host=db;dbname=" . getenv('DB_NAME'),
        getenv('DB_USER'),
        getenv('DB_PASSWORD')
    );
    echo "<h1>¡Conexión exitosa a MySQL!</h1>";
} catch (PDOException $e) {
    die("<h1>Error de conexión:</h1> <p>" . $e->getMessage() . "</p>");
}

// Ejemplo de consulta
$stmt = $pdo->query("SELECT VERSION()");
$version = $stmt->fetchColumn();
echo "<p>Versión de MySQL: " . $version . "</p>";
?>