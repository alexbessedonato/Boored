# Etapa 1: Construir la aplicación
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./
COPY ./ ./

# Instalar dependencias
RUN npm install

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir la aplicación en un servidor estático
FROM nginx:alpine

# Copiar los archivos construidos de la etapa anterior al servidor nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
