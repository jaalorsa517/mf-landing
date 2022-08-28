# Landing

## Descripción

Este es un proyecto microfrontend que hace parte de un proyecto macro.
Este microfrontend tiene manejador de estado (Pinia) y router (Vue router).

## Uso

### Attributos
* **limit:** Cantidad de usuarios cargados en la api.

### Eventos
Los eventos son customElement, por lo que la información enviada es un Array y está en evt.detail.
* **userSelected:** Usuario seleccionado. 

## Instrucciones

### Instalación del proyecto

```bash
npm install
npm run dev
```

### Generando versión de producción


```bash
npm run build
```

## Anotaciones extras

Para se usado en un proyecto macro, hay que descargarlo de la <url>/wc-landing