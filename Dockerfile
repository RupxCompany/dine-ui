# Step 1: Build the React application
FROM node:20.11.1 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Accept the build argument for REACT_APP_DINE_ENGINE_URL
# ARG REACT_APP_DINE_ENGINE_URL

# RUN echo $REACT_APP_DINE_ENGINE_URL, "<<<REACT_APP_DINE_ENGINE_URL"

# # Set the environment variable
# ENV REACT_APP_DINE_ENGINE_URL="$REACT_APP_DINE_ENGINE_URL"

# RUN env

# RUN echo $REACT_APP_DINE_ENGINE_URL, "<<<REACT_APP_DINE_ENGINE_URL"
# ENV REACT_APP_DINE_ENGINE_URL="https://i-dine-engine.firebaseapp.com"

# Copy the envfile and source it to set environment variables
COPY envfile ./
RUN set -a && . ./envfile && set +a


# Build the app
RUN npm run build

# Step 2: Serve the app using serve
FROM node:20.11.1
WORKDIR /app

# Install bash and serve

RUN npm install -g serve

# Copy the built app from the build-stage
COPY --from=build-stage /app/build /app

# Expose the port (optional for Cloud Run, but good practice)
EXPOSE 8080

# Start the application, ensuring it listens on the correct port
CMD ["sh", "-c", "serve -s . -l tcp://0.0.0.0:8080"]
