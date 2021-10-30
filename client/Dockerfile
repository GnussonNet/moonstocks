# Base on offical Node.js image
FROM node:17-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install --production

# Copy all files
COPY . .

# NodeJs 17 error
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build app
RUN npm run build

# No root access
USER node

# Expose port 3000
Expose 3000

# Start app
CMD ["npm", "start"]