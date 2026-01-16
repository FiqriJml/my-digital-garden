# Deployment Guide

## 1. Local Deployment (Testing)
To run the production build locally:
```bash
npm run serve
```

## 2. GitHub Pages
1.  Update `docusaurus.config.ts`:
    ```typescript
    url: 'https://<your-username>.github.io',
    baseUrl: '/<repo-name>/', // or '/' if using custom domain or username.github.io repo
    organizationName: '<your-username>',
    projectName: '<repo-name>',
    deploymentBranch: 'gh-pages', // Optional, defaults to gh-pages
    ```
2.  Run the deploy command:
    ```bash
    cmd /C "set GIT_USER=<your-username> && npm run deploy"
    # Or on PowerShell:
    $env:GIT_USER="<your-username>"; npm run deploy
    ```

## 3. Netlify (Recommended for ease)
1.  Push your code to a GitHub repository.
2.  Log in to Netlify and "Add new site" -> "Import from Git".
3.  Select your repository.
4.  Netlify will auto-detect Docusaurus:
    - **Build command**: `npm run build`
    - **Publish directory**: `build`
5.  Click **Deploy**.
6.  (Optional) Setup a custom domain in Netlify settings.
