# Use a cypress optimized image
FROM cypress/base:20.14.0 AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# Expose port
EXPOSE 4000

CMD ["npm", "run", "preview", "--", "--port", "3000", "--host"]