# Используем официальный образ Node.js на базе Alpine
FROM node:23-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

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