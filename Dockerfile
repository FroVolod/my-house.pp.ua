FROM mhart/alpine-node

WORKDIR /opt/www
COPY ./ ./
RUN npm install --only=production && \
    npm run build

CMD ["npm", "run", "start"]
