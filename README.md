# tristanmetz portfolio

Static portfolio site in Japanese and English: a résumé, a project overview and one page per project. Plain HTML
and CSS with one tiny script for the image galleries; no build step, so GitHub Pages can serve it as is.

```
index.html         Résumé (Japanese, the default)
portfolio.html     Project overview
projects/          One page per project ("More info")
en/                The same pages in English
cv.pdf, cv-ja.pdf  Generated from the résumé's print styles
assets/css/        style.css (screen + print)
assets/js/         site.js (gallery thumbnails)
assets/img/        Screenshots (WebP, max 1600 px wide) and thumbs/ (480 px)
assets/video/      Gameplay clips and trailers (H.264 MP4)
```

Every page links to its counterpart in the other language from the top navigation.

## Updating the CV PDFs

Serve the folder and print both résumés with headless Chrome:

```bash
python -m http.server 8642
chrome --headless=new --no-pdf-header-footer --print-to-pdf=cv.pdf http://localhost:8642/en/index.html
chrome --headless=new --no-pdf-header-footer --print-to-pdf=cv-ja.pdf http://localhost:8642/index.html
```
