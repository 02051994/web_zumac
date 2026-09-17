# Web Zumac

Sitio corporativo estático de Zumac. El código fuente se mantiene de forma local
y el repositorio público `02051994/web_zumac` recibe únicamente el resultado
compilado de `dist/`.

## Desarrollo

```powershell
npm install
npm run dev
```

## Compilación

```powershell
npm run build
```

## Publicación del build

```powershell
npm run publish:pages
```

El script compila el sitio, verifica los archivos públicos y publica únicamente
el contenido generado en la rama `main` del repositorio público.

## Dónde editar

- Textos, servicios y datos de contacto: `src/data/site.ts`.
- Navegación y cabecera: `src/components/header.ts`.
- Secciones de la página: `src/sections/`.
- Estilos globales y por sección: `src/styles/`.
- Imágenes públicas: `public/images/`.

No se requieren variables de entorno ni credenciales para ejecutar este sitio.
