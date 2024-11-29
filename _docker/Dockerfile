# Используем официальный образ Node.js на базе Alpine
FROM node:23-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY ../package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY ../. ./

# Строим приложение для продакшн
RUN npm run build-dev

# Устанавливаем переменную окружения для сервера
ENV HOST 0.0.0.0

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
