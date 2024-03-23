# Step 1: Build the React application
FROM node:20.11.1 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

COPY secrets.env .

RUN cat ./secrets.env

ARG _SECRETS
RUN echo $_SECRETS

RUN echo $_SECRETS > .env && export $(cat .env | xargs)

RUN env

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
