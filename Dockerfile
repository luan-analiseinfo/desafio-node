# Use a imagem Node.js como base
FROM node:16.20.2

# Configure o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos
COPY . .

# Construa o projeto NestJS
RUN npm run build

# Exponha a porta em que o aplicativo está rodando (ajuste conforme necessário)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/main.js"]
