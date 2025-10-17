import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { readFile } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist");
const pdfPathDist = path.join(distDir, "resume-leo-schweiger.pdf");

// Robust static server
function serveStatic(port = 4322) {
    const server = createServer(async (req, res) => {
        try {
            let urlPath = req.url === "/" ? "/about/index.html" : req.url;

            // If it ends with '/', serve index.html
            if (urlPath.endsWith("/")) {
                urlPath += "index.html";
            }

            const filePath = path.join(distDir, urlPath);

            // Serve the file
            const data = await readFile(filePath);
            const ext = path.extname(filePath).toLowerCase();

            // Simple content-type mapping
            const mimeTypes = {
                ".html": "text/html",
                ".css": "text/css",
                ".js": "text/javascript",
                ".png": "image/png",
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".svg": "image/svg+xml",
                ".webp": "image/webp",
            };

            res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
            res.end(data);
        } catch (err) {
            res.writeHead(404);
            res.end("Not found");
        }
    });

    return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

(async () => {
    const server = await serveStatic(4322);
    console.log("🚀 Serving dist/ at http://localhost:4322");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Point to /about/ route
    await page.goto("http://localhost:4322/about/", { waitUntil: "networkidle0" });

    // Inject print-specific CSS
    await page.addStyleTag({
        content: `
    @media print {
nav, .footer, .getintouch { display: none !important; }
    }
  `
    });

    await page.evaluate(() => {
        document.title = "resume leo schweiger";
    });

    await page.pdf({
        path: pdfPathDist,
        format: "A4",
        printBackground: false,
        scale: 0.8,
    });

    await browser.close();
    server.close();

    console.log("✅ PDF generated:", pdfPathDist);
})();
