import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '../routes/routes.tsx';
import { ThemeProvider } from '@/components/Theme-Provider.tsx';
import '/src/styles/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
