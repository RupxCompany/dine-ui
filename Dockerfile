# Step 1: Build the React application
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the app using serve
FROM node:alpine
WORKDIR /app

# Install bash
RUN apk add --no-cache bash

# Install serve globally
RUN npm install -g serve

# Copy the built app from the build-stage
COPY --from=build-stage /app/build /app

# Copy the start.sh script into the image
COPY start.sh /app
COPY pre-start.sh /app

# Make sure the script is executable
RUN chmod +x /app/start.sh
RUN chmod +x /app/pre-start.sh

# Expose the port (optional for Cloud Run, but good practice)
EXPOSE 8080

# Start the application, ensuring it listens on the correct port
CMD ["bash", "./start.sh"]

