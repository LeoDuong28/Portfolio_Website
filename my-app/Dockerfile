FROM node:20-alpine AS deps
WORKIR /app



COPY package.json package-lock.json* ./
RUN npm ci


FROM node:20-alpine AS builder
WORKDIR /app


COPY --from=deps /app/node_modules ./node_modules
COPY . .


RUN npm run build


FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production


ENV PORT=3000


COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public


COPY --from=builder /app/next.config.* ./


COPY --from=builder /app/postcss.config.* ./ 2>/dev/null || true
COPY --from=builder /app/tailwind.config.* ./ 2>/dev/null || true


EXPOSE 3000


CMD ["npm", "run", "start"]
