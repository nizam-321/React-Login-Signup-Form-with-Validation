import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React-Login-Signup-Form-with-Validation/', // 👈 apne repo ka naam daalo
  plugins: [react()],
})
