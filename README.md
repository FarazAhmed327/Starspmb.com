# Employee Portal – Frontend Demo

A responsive employee attendance and HR self-service portal built with plain HTML, CSS and JavaScript. No build step, framework, backend or API key is required.

## Included
- Dashboard with attendance summary, employee selector, date range filters and attendance records
- Attendance search and CSV export
- Employee directory and add-employee form
- Employee profile
- Leave, loan/advance and resignation request forms
- Request history and combined approvals overview
- Notifications with mark-as-read
- Responsive sidebar navigation for desktop and mobile
- Browser `localStorage` persistence

## Run locally
Open `index.html` in a modern browser. For local development, you can also use VS Code Live Server.

## Publish with GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `app.js` and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then Save.
6. Your project site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
7. Leave the **Custom domain** field blank unless you own a domain name such as `example.com`.

## Important demo limitations
This is a frontend-only prototype. Requests, employee records and notifications are stored only in the current browser using localStorage. They are not shared with HR, other users or devices. There is no real authentication, server-side database, payroll integration, approval workflow, or secure access control. Do not use real confidential employee information until a secure backend and authentication system are added.

## Sample attendance data
The attendance table starts with the sample records supplied for employee `0408 – Faraz Ahmed` for 9–13 November 2026. The sample figures are for demonstration and can be changed in `app.js`.
