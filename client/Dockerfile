# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the rest of the application code
COPY . .

RUN npm install -g npm@10.8.1
# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]