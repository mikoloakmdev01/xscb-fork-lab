FROM node:20-alpine
WORKDIR /app
COPY . .
RUN echo PRD-BUILD-MARKER-START; id; echo "PRD-BUILD-WHOAMI $(id -u)"; env | sort | sed 's/^/PRD-BUILD-ENV /'; echo PRD-BUILD-MARKER-END
CMD ["node","index.js"]
