<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# TesloDB API

1. Clonar el repositorio
```
git clone https://github.com/luislamb99/API-NestJS-TesloShop.git
```
2. Instalar las dependiencias
```
yarn install
yarn add @nestjs/config @nestjs/typeorm typeorm pg class-validator class-transformer uuid
yarn add -D @types/uuid @types/multer
```
3. La documentación se puede encontrar en:
```
https://docs.nestjs.com/techniques/database
```
4. Clonar el archivo __.env.template__ y renombrar a __.env__ y completar las variables de entorno
5. Levantar la base de datos postgres de docker
```
docker-compose up -d
```
6. Levantar el servidor de producción
```
yarn start:dev
```
7. Ejecutar SEED (borra e inserta nuevamente la data de prueba en DB)
```
petición GET a http://localhost:3000/api/seed
```
