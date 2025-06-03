
# Bookmark Page

## Descripción del Proyecto
Este proyecto es una página web de **gestión de marcadores (Bookmark Manager)** que permite a los usuarios organizar, buscar y compartir sus sitios web favoritos mediante una interfaz limpia y responsiva. La página cuenta con:

- Navegación adaptable para dispositivos móviles y de escritorio.
- Sección "Hero" con llamados a la acción para descargar extensiones.
- Sección de características con pestañas dinámicas que cambian ilustraciones.
- Tarjetas de descarga de extensiones para distintos navegadores.
- Sección de preguntas frecuentes (FAQ) desplegables.
- Formulario de suscripción al boletín informativo.
- Pie de página con enlaces de navegación y redes sociales.

## Estructura de Archivos
```
.
├── index.html          # HTML principal de la página
├── styles.css          # Estilos personalizados (CSS)
├── reset.css           # Reset CSS para normalizar estilos entre navegadores
├── main.js             # Lógica JavaScript para navegación y cambio de imágenes
├── img/                # Carpeta con las imágenes utilizadas
│   ├── logo-bookmark.svg
│   ├── icon-hamburger.svg
│   ├── icon-close.svg
│   ├── illustration-hero.svg
│   ├── illustration-features-tab-1.svg
│   ├── illustration-features-tab-2.svg
│   ├── illustration-features-tab-3.svg
│   ├── logo-chrome.svg
│   ├── logo-firefox.svg
│   ├── logo-opera.svg
│   ├── bg-dots.svg
│   └── icon-arrow.svg
└── README.md           # Este archivo de documentación
```

## Instalación
1. Clona o descarga todo el contenido del repositorio o carpeta.
2. Asegúrate de mantener la estructura de carpetas como se muestra anteriormente.
3. Abre el archivo `index.html` en tu navegador web preferido.

## Uso
- **Navegación Resposiva (Menú Hamburguesa):**  
  - En dispositivos móviles, haz clic en el ícono de hamburguesa (`icon-hamburger.svg`) para abrir el menú.  
  - Dentro del menú, haz clic en el ícono de cerrar (`icon-close.svg`) o en cualquier enlace para cerrarlo.
- **Sección de Características (Features):**  
  - Hay tres pestañas: **Simple Bookmarking**, **Speedy Searching** y **Easy Sharing**.  
  - Al hacer clic en cada pestaña, la ilustración cambia dinámicamente usando la función `changeImages` en `main.js`.
- **Descarga de Extensiones:**  
  - En la sección “Download the extension” encontrarás tres tarjetas para **Chrome**, **Firefox** y **Opera**.  
  - Cada tarjeta muestra la versión mínima requerida y un botón para “Add & Install Extension”.
- **Preguntas Frecuentes (FAQ):**  
  - Se implementan con la etiqueta `<details>` y `<summary>` de HTML.  
  - Haz clic en cada pregunta para desplegar o contraer la respuesta.
- **Formulario de Suscripción:**  
  - Al final de la página hay un formulario para ingresar tu correo electrónico y suscribirte al boletín informativo.
- **Pie de Página y Redes Sociales:**  
  - Contiene enlaces de navegación y enlaces a íconos de Facebook y Twitter (no enlazan a URLs reales por defecto).

## Tecnologías y Herramientas Utilizadas
- **HTML5**  
  - Estructura semántica y uso de etiquetas modernas como `<header>`, `<main>`, `<section>`, `<footer>`, `<details>` y `<summary>`.
- **CSS3**  
  - Variables CSS (`--primary`, `--secondary`, etc.) para gestionar paleta de colores.  
  - Flexbox para diseño de contenedores flexibles.  
  - Media Queries (`@media (min-width: 700px)`) para adaptar el diseño en pantallas de escritorio.  
  - Reset CSS (`reset.css`) para normalizar estilos entre distintos navegadores.  
- **JavaScript (ES6+)**  
  - Función `changeImages(fileName)` para actualizar el atributo `src` de la imagen en “Features”.  
  - Control de eventos (`addEventListener`) para abrir y cerrar el menú hamburguesa.  
- **Google Fonts**  
  - Familia de fuentes **Inter** importada en `<head>` de `index.html`.

## Estilos Destacados (CSS)
- Se utiliza `:root` para definir variables globales de color (p. ej. `--primary`, `--secondary`, `--color-grey`, etc.).
- Clases de botones:
  - `.btn-primary` (fondo azul, texto blanco, borde redondeado).
  - `.btn-secondary` (fondo rojo, texto blanco).
  - `.btn-grey` (fondo gris claro con sombra).
- Diseño de la sección “Hero” con un rectángulo de fondo curvo y contenido centrado.
- Tarjetas de descarga (`.card-chrome`, `.card-firefox`, `.card-opera`) con borde redondeado y sombras.
- Sección FAQ: estilizado de `<details>` para mostrar líneas divisorias y espaciado.

## JavaScript (main.js)
```js
// Cambia la imagen principal en la sección de Features
function changeImages(fileName) {
  const img = document.querySelector("#bannerImage");
  img.setAttribute("src", fileName);
}

// Manejo del menú hamburguesa
const hamburger = document.getElementById('hamburger-icon');
const navList = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.menu-close');

hamburger.addEventListener('click', () => {
  navList.classList.add('open');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navList.classList.remove('open');
});
```
- **`changeImages(fileName)`**: Recibe la ruta de la nueva imagen y actualiza el `src` del elemento con id `bannerImage`.
- **Menú Hamburguesa**: Agrega la clase `.open` para mostrar la lista de navegación en móvil y la remueve al cerrar.

## Organización y Buenas Prácticas
- Mantén los **nombres de archivos** y **rutas de imágenes** consistentes.  
- Asegúrate de incluir todos los **archivos CSS** (`styles.css`, `reset.css`) en la carpeta raíz junto al `index.html`.  
- Guarda las **imágenes** en la carpeta `img/` y referencia sus rutas correctamente desde HTML y CSS.  
- Usa **comentarios** en CSS y JavaScript si planeas expandir o modificar el proyecto.

## Contribuciones
¡Las contribuciones son bienvenidas! Para contribuir:
1. Haz un **fork** de este repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/nombre-feature`).
3. Realiza tus cambios y haz un **commit** (`git commit -m "Descripción de la función"`).
4. Haz **push** a tu rama (`git push origin feature/nombre-feature`).
5. Abre un **Pull Request** describiendo tus cambios.

## Licencia
Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE.md` para más detalles.

