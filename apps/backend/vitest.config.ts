import { defineConfig } from 'vitest/config'
import path from 'path'
import dotenv from 'dotenv'

const env = process.env.NODE_ENV || 'development'
const envFile = `.env.${env}`
// load .env file manually.
dotenv.config({ path: path.resolve(__dirname, envFile) })

export default defineConfig({
    test: {
        globals: true,
        environment: 'node', // set to node for backend development.
        include: ['tests/**/*.test.ts'],
    },
})
