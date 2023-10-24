# Install node imagine 
FROM node:18-alpine
# Add bash
RUN apk update && apk add bash 
# Change the current directory 
WORKDIR /scout-frontend
# Copy package.json dependices to directory
COPY . .
# Install all packages needed
RUN npm install 
# Copy all files over to directory
# Start app
CMD npm run dev
