import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { readFile } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist");

generatePdf("/about/", "resume-leo-schweiger.pdf", 4322);
generatePdf("/about-game/", "resume-leo-schweiger-game.pdf", 4323);
generatePdf("/about-design/", "resume-leo-schweiger-design.pdf", 4324);

// Robust static server
function serveStatic(port, page) {
    const server = createServer(async (req, res) => {
        try {
            let urlPath = req.url === "/" ? page : req.url;

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

function generatePdf(pageName, fileName, port) {

    (async () => {

        const server = await serveStatic(port, pageName);
        console.log("🚀 Serving dist/ at http://localhost:4322");

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Point to pagename route
        await page.goto(path.join("http://localhost:4322", pageName), { waitUntil: "networkidle0" });

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

        const pdfPathDist = path.join(distDir, fileName);

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
}