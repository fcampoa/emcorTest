# TestEmcor

Ejercicio para vacante de .NET, se utilizó .NET framework 4.5, EF 6, SQLSERVER 2017 y Linq para el Back end.
Para el front End se utilizó Angular 8 con node js version 10.9.0

## Instalación

#### BackEnd
La solución esta creada con VS2017.

publicar la base de datos, para la cual se encuentra un script dentro del repositorio, o de igual manera se puede publicar desde el proyecto de base de datos que se encuentra en la solución(clic derecho-> publish/publicar). para hacerlo de esta manera se debe crear una base de datos vacía para que el proyecto publique las tablas.

La base de datos esta hecha con SQLLOCALDB, por lo cuál se deberá modificar la cadena de conexión en los proyectos Models y BackMaterias.

Se utilizó DI con Unity.

#### FrontEnd

correr el comando 

```bash
npm install
```
en la carpeta de proyecto del frontEnd llamada FrontMaterias y después el comando
```bash
ng serve
```

El proyecto corre sobre http://localhost:4200