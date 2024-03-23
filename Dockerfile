# Step 1: Build the React application
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN export PRANA_RUNTIME_SECRETS="REACT_APP_DINE_ENGINE_URL=https://i-dine-engine.firebaseapp.com"
RUN echo $PRANA_RUNTIME_SECRETS >> .env
RUN npm run build

# Step 2: Serve the app using serve
FROM node:alpine
WORKDIR /app

# Install bash
RUN apk add --no-cache bash
RUN export PRANA_RUNTIME_SECRETS="REACT_APP_DINE_ENGINE_URL=https://i-dine-engine.firebaseapp.com"
RUN echo $PRANA_RUNTIME_SECRETS >> .env

# Install serve globally
RUN npm install -g serve

# Copy the built app from the build-stage
COPY --from=build-stage /app/build /app

# Expose the port (optional for Cloud Run, but good practice)
EXPOSE 8080

# Start the application, ensuring it listens on the correct port
CMD ["sh", "-c", "serve -s . -l tcp://0.0.0.0:8080"]

