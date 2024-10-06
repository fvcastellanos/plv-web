# Sitio Web del Condominio El Prado de Linda Vista

Sitio creado para proporcionar a los vecinos del condominio un lugar centralizado para ver la información de importancia común.



## Información Técnica

### Dependencias

* NodeJS (última versión LTS compatible)
* Astro
* npm

### Desarrollo

Clonar el repositorio

`git clone https://github.com/fvcastellanos/plv-web.git`

Descargar dependencias

`npm install`

Ejecutar en modo desarrollo

`npm run astro dev`


### Framework

Sitio creado usando el [Framework Astro](https://astro.build/) para la generación de sitios estáticos. Se usó la plantilla [Astroship](https://web3templates.com/templates/astroship-starter-website-template-for-astro).

### Construir con Docker

Se creo un `Dockerfile` para construir y publicar el sitio web statico:

```
docker build -f docker/Dockerfile -t <tag> .
```

Con la imágen ya generada es posible ejecutar el contenedor para ver el sitio construido:

```
docker run -p 8080:8080 plv:1.0-SNAPSHOT
```