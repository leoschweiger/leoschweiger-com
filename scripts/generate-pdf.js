import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(__dirname, "../dist/resume.pdf");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`file://${path.join(__dirname, "../dist/about/index.html")}`, {
        waitUntil: "networkidle0",
    });

    await page.emulateMediaType("print");

    await page.pdf({
        path: output,
        format: "A4",
        printBackground: true,
    });

    await browser.close();
    console.log("✅ Resume PDF generated:", output);
})();
