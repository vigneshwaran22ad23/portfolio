# Adding Your Real Photos & Files

This portfolio is wired to automatically use your real images the moment
you drop them into the right folder — no code edits needed. Until a file
exists, the site shows an elegant gold/black placeholder instead, so the
site always looks good either way.

## 1. Profile Photos

| What | Where it goes | Filename |
|---|---|---|
| Hero section photo (large circular photo) | `public/images/profile/` | `profile.jpg` |
| About section photo | `public/images/profile/` | `about.jpg` |

You can reuse the same photo for both — just save it twice with each name,
or use two different photos.

## 2. Resume

| What | Where it goes | Filename |
|---|---|---|
| Resume PDF | `public/` (the root public folder) | `resume.pdf` |

This single file powers both the "View Resume" button in the Hero section
and "Download Resume" in the About section.

## 3. Project Screenshots

Each project has its own folder under `public/images/projects/`. Inside each
folder, add:
- `thumb.jpg` — used for the project card image in the grid
- `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg` — the 4 gallery images shown in the
  project modal, and viewable fullscreen with the slideshow

```
public/images/projects/
├── ai-learning-companion/   (thumb.jpg, 1.jpg, 2.jpg, 3.jpg, 4.jpg)
├── hr-dashboard/
├── ecommerce/
├── customer-segmentation/
├── ev-forecast/
└── bank-loan/
```

Adding a brand new project? Open `src/components/Projects/projectsData.js`,
copy an existing project object, give it a new `id` and a new `folder` name,
then create a matching folder under `public/images/projects/` with the same
images. The stats on the About page (Projects Built) will update on their own.

## 4. Certificate Images

Drop certificate images into `public/images/certificates/` using these
filenames:

| Issuer | Filename |
|---|---|
| British Airways | `british-airways.jpg` |
| Tata Group | `tata-genai.jpg` |
| Deloitte | `deloitte.jpg` |
| IBM SkillsBuild | `ibm-skillsbuild.jpg` |
| AICTE | `aicte.jpg` |
| Microsoft | `microsoft-powerbi.jpg` |

Adding a new certificate? Add an entry to
`src/components/Certificates/certificatesData.js` with a `file` field, then
drop the matching image into the same folder. The "Certifications" stat on
the About page updates automatically.

## Image format notes

- `.jpg`, `.jpeg`, `.png`, or `.webp` all work — just make sure the filename
  (including extension) matches exactly what's listed above. If you use a
  different extension, update the corresponding filename in the data file.
- Photos don't need to be pre-cropped to an exact size — the CSS handles
  cropping and fitting automatically.
