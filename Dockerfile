# Step 1: Build the React application
FROM node:20.11.1 as build-stage
WORKDIR /app
COPY package*.json ./
COPY . .

COPY secrets.env .

RUN export $(cat ./secrets.env | xargs) && \
    # Run your build commands here, for example:
    npm install && \
    npm run build

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
