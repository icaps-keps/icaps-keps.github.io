# ICAPS KEPS Workshop Website

Jekyll-based website for the KEPS (Knowledge Engineering for Planning and Scheduling) workshop at ICAPS. Each year gets its own self-contained section under the same repo and GitHub Pages deployment.

---

## Run locally

```bash
bundle exec jekyll serve --baseurl=""
```

## Tailwind CSS

To automatically compile `tailwind.css` during development:

```bash
npm run dev
```

## Useful resources

- https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
- https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll

---

## Adding a new year (e.g., 2027)

The site is designed so each edition is independent. All year-specific content lives under paths that include the year number. Search-replace `2026` → `2027` in the paths below when setting up a new edition.

### 1. Create the page entry point

**File:** `2027/index.markdown`

Copy from `2026/index.markdown` and update the layout and includes:

```yaml
---
layout: 2027
permalink: /2027/
---

{% include 2027/home.markdown %}
{% include 2027/important_dates.markdown %}
{% include 2027/cfp.markdown %}
{% include 2027/schedule.markdown %}
{% include 2027/organizers.markdown %}
```

### 2. Create the layout

**File:** `_layouts/2027.html`

Copy from `_layouts/2026.html`. Update any year-specific references (e.g., navigation include path). The layout controls the overall HTML shell (head, body, JS/CSS includes) for the year's page.

### 3. Create the content includes

All section content lives under `_includes/2027/`. Create this directory and add the following files (copy from `_includes/2026/` and update content):

| File | What to update |
|---|---|
| `home.markdown` | Workshop title/year, ICAPS edition number, date, venue, room, organiser institution logos |
| `important_dates.markdown` | Year references (`site.data.2027.important_dates`) |
| `cfp.markdown` | EasyChair submission link (`keps27`), any policy changes |
| `schedule.markdown` | Full programme with paper titles, authors, and PDF links |
| `organizers.markdown` | Organizing committee names/affiliations/photos, program committee list |
| `navigation.html` | Navigation bar links pointing to the new year's sections |

### 4. Create the data files

**Directory:** `_data/2027/`

| File | Format | Content |
|---|---|---|
| `important_dates.yml` | YAML list | Submission, notification, camera-ready, and workshop dates. Each entry has `title:`, `date:` (YYYY-MM-DD), and optionally `date_old:` for extended deadlines. |
| `navigation.yml` | YAML list | Nav bar items with `title:` and `url:` (anchor or path). |

Example `important_dates.yml` entry:
```yaml
- title: Paper Submission
  date: 2027-03-14
- title: Author Notification
  date: 2027-04-18
  date_old: 2027-04-11
```

### 5. Add organiser photos

**Directory:** `assets/images/people/`

Add a square headshot (ideally at least 256×256 px) for each new organiser. Reference them in `_includes/2027/organizers.markdown` via `{{ '/assets/images/people/<filename>' | relative_url }}`.

### 6. Add sponsor / institution logos (if new)

**Directory:** `assets/images/`

Add SVG or PNG logos for any institutions new to this edition. Reference them in `_includes/2027/home.markdown`.

### 7. Host paper PDFs (after acceptance notifications)

Upload the accepted paper PDFs directly to `2027/papers/` in the repository (via the GitHub web interface or `git add`). Then update `_includes/2027/schedule.markdown` so each paper's link points to `/2027/papers/<filename>.pdf`.

### 8. Update the home page (optional)

**File:** `index.markdown` (repo root)

If the main landing page links to or highlights the current edition, update it to point to `2027/`.

### 9. Checklist before going live

- [ ] `_data/2027/important_dates.yml` has all deadlines
- [ ] `_includes/2027/navigation.html` links are correct
- [ ] `_includes/2027/home.markdown` has the right date, venue, and room
- [ ] `_includes/2027/cfp.markdown` EasyChair link is live
- [ ] Organiser photos are present and display correctly
- [ ] Run locally with `bundle exec jekyll serve --baseurl=""` and check all sections
- [ ] After acceptance: schedule is complete and PDFs are hosted locally
