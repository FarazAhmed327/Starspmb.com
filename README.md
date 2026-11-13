# Employee Portal Dashboard

A responsive employee portal dashboard inspired by the supplied reference screenshot. Built with plain HTML, CSS and JavaScript (no build step and no framework required).

## Run locally

1. Download or clone this folder.
2. Open `index.html` in a browser.
3. For a local development server, you can use the VS Code **Live Server** extension.

## Publish with GitHub Pages (free for public repositories)

1. Sign in to GitHub and create a new repository, for example `employee-portal`.
2. Upload `index.html`, `style.css`, `app.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the deployment to finish. GitHub will show your live website URL in the Pages section.

## Customize

- Replace `Faraz Ahmed`, employee details, supervisor details, meal, prayer and break times in `index.html`.
- Change the brand colors at the top of `style.css` in the `:root` variables.
- Change leave categories and demo interactions in `app.js` and `index.html`.

## Important: demo version only

This is a front-end prototype. The profile and dashboard values are sample/demo content. Leave requests only show a local confirmation; they are **not** sent to HR or saved to a central database. There is no real login, employee database, role-based access, attendance backend or approval workflow yet. Do not publish real employee personal information in this static version. To use it as a real company portal, connect a secure backend/database and authentication (for example, Supabase or Firebase), add access rules, and review privacy/security requirements before entering employee data.

The clock and date display the visitor's local device time. Google Fonts is used for the Inter typeface; a system font fallback is included if it is unavailable.
