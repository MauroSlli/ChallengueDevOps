# Usando imagen nginx liviana
FROM nginx:alpine

# Copiando archivos necesarios de la web a la imagen
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./IMG /usr/share/nginx/html/IMG
COPY ./CSS /usr/share/nginx/html/CSS
COPY ./JS /usr/share/nginx/html/JS

# Exponiendo puerto
EXPOSE 80

# Inicio de nginx
CMD ["nginx", "-g", "daemon off;"]

