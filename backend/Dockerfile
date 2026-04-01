FROM node:18-alpine
WORKDIR /app
# Copy file package trước để install dependencies
COPY package*.json ./
RUN npm install
# Copy toàn bộ code còn lại
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]