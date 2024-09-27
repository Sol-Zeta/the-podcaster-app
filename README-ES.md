# La Aplicación Podcaster (SPA en React.js)

![Versión](https://img.shields.io/badge/version-1.2.0-blue.svg?cacheSeconds=2592000)

**Este README también está disponible en [Inglés](./README.md).**

## Funcionalidades Principales

- **📋 Lista de Podcasts:** Acceso a la lista de los 100 podcasts más populares.
- **🔍 Buscar y Filtrar:** Filtrar podcasts en la lista por título o nombre del autor.
- **📜 Detalles del Podcast:** Muestra detalles del podcast y su lista de episodios.
- **📜 Detalles del Episodio:** Muestra los detalles del episodio seleccionado.
- **▶️ Reproductor de Episodios:** Reproduce el episodio seleccionado.

## Tecnologías Utilizadas

- **ReactJS:** Librería para construir interfaces de usuario.
- **React Router Dom:** Permite enrutamiento dinámico en aplicaciones React.
- **TypeScript:** Superset de JavaScript con tipado estático.
- **Vite:** Herramienta de construcción que ofrece un entorno de desarrollo rápido.
- **SASS:** Preprocesador de CSS para escribir estilos de manera más mantenible.
- **Testing Library:** Librería para pruebas unitarias de componentes React.
- **Cypress:** Herramienta para pruebas de extremo a extremo (e2e).

## Instalación

Para instalar las dependencias, ejecuta:

    npm install

## Uso
### Desarrollo

Para iniciar el servidor de desarrollo:

    npm run dev

### Producción
Para construir e iniciar la versión de producción:

    npm run build && npm run preview

### Docker

Para construir y ejecutar la aplicación usando Docker:

1.  **Construir la imagen Docker:**

    docker build -t the-podcaster-app .

2.  **Ejecutar el contenedor Docker:**

        docker run -p 3000:3000 the-podcaster-app

    Esto iniciará la aplicación en [http://localhost:3000](http://localhost:3000).

## Ejecutar Pruebas

### Pruebas Unitarias

Para ejecutar las pruebas unitarias:

    npm run test

### Pruebas e2e

Para ejecutar las pruebas de extremo a extremo con Cypress:

    npm run cypress:open

## Integración Continua

El proyecto utiliza **GitHub Actions** para garantizar la calidad del código. El flujo de trabajo se activa con cada push a cualquier rama y realiza las siguientes acciones:

1. **Construir la Imagen Docker**
2. **Ejecutar el Contenedor Docker**
3. **Ejecutar Pruebas Unitarias dentro del contenedor**
4. **Ejecutar Pruebas e2e dentro del contenedor**
5. **Detener y Eliminar el Contenedor Docker**

## Tablero de JIRA

Puedes ver la planificación y la división del proyecto en historias de usuario en el siguiente [tablero de JIRA](https://soledadpattoglio.atlassian.net/jira/software/projects/PA/boards/4).

## Autor

👩🏻‍💻 **Soledad Pattoglio**

- [Portafolio](https://www.soledadpattoglio.tech/)
- [LinkedIn](https://www.linkedin.com/in/mspattoglio/)
- [GitHub](https://github.com/Sol-Zeta)