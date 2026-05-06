# Vina Company — Workday Learning Hub

A portable, self-contained web suite for educating customers on Workday HCM concepts before go-live. Built around a fictional Vietnamese FMCG manufacturer — **Vina Company**.

---

## 🗂️ Repo Structure

```
vina-workday-playbook/
│
├── index.html                  ← Landing page (guided intro + tool links)
│
├── playbook/                   ← Main Concept tool
│   ├── index.html              ← UI (display, interactions, styling)
│   └── data/
│       ├── workers.js          ← 51 workers
│       ├── orgs.js             ← 7 supervisory organisations
│       ├── reference.js        ← Locations, Cost Centers, Job Profiles, Grades, Security Roles
│       └── concepts.js         ← Concept text, org type teaching, guided story steps
│
├── mapping-tool/               ← Data Mapping Tool (EIB grid + Excel export)
│   └── index.html
│
├── assets/
│   ├── style.css               ← Shared design tokens + nav styles
│   └── nav.js                  ← Shared navigation bar (injected into all pages)
│
└── README.md
```

---

## 🚀 How to Use

### Option A — GitHub Pages (recommended for sharing with customers)
1. Push this repo to GitHub
2. Go to **Settings → Pages → Deploy from branch → main → / (root)**
3. Share the URL: `https://yourname.github.io/vina-workday-playbook/`

### Option B — Local use
1. Open with **VS Code + Live Server extension** (right-click `index.html` → Open with Live Server)
2. Or use any local web server: `npx serve .`

> ⚠️ Do NOT open HTML files directly by double-clicking — browsers block local JS file imports for security. Use a local server or GitHub Pages.

---

## ✏️ How to Update Content

### Update workers or org data
Edit `playbook/data/workers.js` or `playbook/data/orgs.js` only. The UI file (`playbook/index.html`) does not need to change.

### Update concept descriptions or story steps
Edit `playbook/data/concepts.js` only.

### Update locations, cost centers, or job profiles
Edit `playbook/data/reference.js` only.

### Adapt for a new customer
1. Duplicate the `playbook/data/` folder
2. Replace data with the new customer's structure
3. Update `playbook/data/concepts.js` story steps if needed
4. The UI stays the same

---

## 🔗 Navigation

All pages share a top nav bar (rendered by `assets/nav.js`):

```
[ 🏭 Vina Company · Workday Hub ]  |  Home  |  Main Concept  |  Data Mapping Tool
```

---

## 📋 Tools

| Tool | Path | Purpose |
|------|------|---------|
| Landing Page | `index.html` | Intro, guided story, links to tools |
| Main Concept | `playbook/index.html` | Interactive org explorer, 6 Workday concepts |
| Data Mapping Tool | `mapping-tool/index.html` | EIB data entry, validation, Excel export |

---

## 🏭 Vina Company — Sample Data

| Detail | Value |
|--------|-------|
| Industry | FMCG / Consumer Goods |
| Employees | 51 (47 filled + 4 vacant positions) |
| Locations | HCMC HQ, HCMC Sales, Hà Nội, Bình Dương Factory, Bình Dương Warehouse |
| Departments | Executive, Sales & Marketing, Operations, Production, Warehouse, HR, Finance |
| Currency | VND (local staff) + USD (expat managers) |
| Staffing Model | Position Management |

---

## 🗃️ Backlog

- Data Readiness Guide (relationship matrix + readiness checklist)
- Business Process proper visual treatment
- Language toggle EN / VI
- Search workers

---

*Built for Workday HCM implementation consulting. All company data is fictional.*
