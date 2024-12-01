# Используем официальный образ Node.js на базе Alpine
FROM node:23-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY ../package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Копируем entrypoint.sh в образ
COPY _docker/entrypoint.sh /usr/local/bin/entrypoint.sh

# Делаем скрипт исполняемым
RUN chmod +x /usr/local/bin/entrypoint.sh

# Устанавливаем entrypoint
ENTRYPOINT ["entrypoint.sh"]

# Указываем команду по умолчанию
CMD ["npm", "start"]