import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite } from "./vite";
import serveStatic from 'serve-static';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error(err);
    res.status(status).json({ message });
  });

  if (process.env.NODE_ENV === 'production') {
    // In production, serve the static files from the build directory.
    const clientDistPath = path.resolve(process.cwd(), 'dist/client');
    app.use(serveStatic(clientDistPath));

    // For any other request, serve the index.html file so client-side routing can take over.
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(clientDistPath, 'index.html'));
    });

  } else {
    // In development, use Vite to handle HMR and serving the client.
    await setupVite(app, server);
  }

  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})();