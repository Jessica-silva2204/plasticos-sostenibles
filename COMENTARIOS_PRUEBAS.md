## 5. Comentarios Adicionales sobre Pruebas

### 🛠️ **Pruebas de Funcionalidad**
- **Página de inicio:** No carga correctamente en navegadores antiguos como Internet Explorer 11.
- **Formulario de contacto:** No muestra un mensaje de confirmación después de enviar.
- **Carrito de compras:** Permite agregar productos sin stock, lo que genera errores en la compra.

### 🔐 **Pruebas de Seguridad**
- **Autenticación:** No hay un tiempo de expiración para la sesión de usuario.
- **Inyección SQL:** No se verifica si los campos de entrada contienen caracteres peligrosos.
- **Protección CSRF:** No se encontró un **token CSRF** en los formularios de usuario.

### 📱 **Pruebas de Usabilidad**
- **Diseño Responsivo:** En pantallas pequeñas, los botones se superponen entre sí.
- **Contraste de colores:** Algunos textos no tienen suficiente contraste con el fondo, dificultando la lectura.
- **Accesibilidad:** No hay etiquetas `alt` en algunas imágenes importantes para usuarios con discapacidad visual.

### 🚀 **Recomendaciones Finales**
- Implementar pruebas automáticas para validar que los formularios acepten solo entradas válidas.
- Habilitar logs de error para detectar problemas en producción.
- Realizar pruebas de estrés para evaluar la carga máxima que soporta la aplicación.

---

**📌 Autor:** [Tu Nombre]  
**📆 Fecha:** DD/MM/YYYY  
