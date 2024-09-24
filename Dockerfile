# Use a cypress optimized image
FROM cypress/base:20.14.0 AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port
EXPOSE 3000

CMD ["npm", "run", "start"]