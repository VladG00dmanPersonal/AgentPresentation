# Soviet Constructivism presentation

This repository generates the presentation with **Node.js and PptxGenJS**. Figma is not part of the production workflow.

## Setup and build

```bash
npm install
npm run build
```

The deck is written to `output/soviet-constructivism.pptx`. For a visual review, with LibreOffice installed, run `npm run render`; it writes `output/pdf/soviet-constructivism.pdf`.

## Structure

- `src/theme.js` — 16:9 canvas, palette, grid, and portable Arial typography.
- `src/primitives.js` — reusable text, geometry, image sizing, footer, and speaker-notes helpers.
- `src/slides/opening.js` — five individually composed opening slides; the old scaffold is not included.
- `src/slides/architecture.js` — second batch, slides 06–10: Gosprom, Melnikov House, workers’ clubs, Narkomfin, and Nikolaev’s communal house.
- `src/slides/shared.js` — shared composition helpers and editorial speaker notes.
- `src/build.js` — deck assembly and output.

The current deck contains slides 01–10 in two design batches. `slides.md` is editorial source for the future 20-slide deck. Visible content and layouts are individually authored; only speaker notes, sources, and editorial comments are read from the corresponding source sections. Display headlines use DejaVu Sans Condensed; install that font on a presenting machine or use the PDF to preserve appearance.

Read `references/visual-direction.md` before adding slides. Develop representative prototypes first, render them for review, agree the visual system, then expand the deck.
