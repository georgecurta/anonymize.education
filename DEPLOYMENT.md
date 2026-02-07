# Deployment Instructions

## Overview

Anonymize.Education is deployed using a git-based workflow with two remotes:
- **origin**: GitHub repository for version control
- **production**: Production server with post-receive hook for automatic deployment

## Prerequisites

- Git installed locally
- SSH key `~/.ssh/macxpress26` configured for production server access
- GitHub CLI (`gh`) authenticated for repository management

## Repository URLs

| Remote | URL |
|--------|-----|
| GitHub | https://github.com/georgecurta/anonymize.education.git |
| Production | ssh://mac46-190@macxpress.net:6535/home/mac46-190/repos/anonymize.education.git |

## Deployment Commands

### Standard Deployment

```bash
cd C:\Dev\MacXpress\anonymize.education

# Stage and commit changes
git add -A
git commit -m "Your commit message

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# Push to GitHub
git push origin main

# Deploy to production
GIT_SSH_COMMAND='ssh -i ~/.ssh/macxpress26 -o IdentitiesOnly=yes' git push production main
```

### Quick Deploy Script

Create `deploy.sh` for convenience:

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "Pushing to GitHub..."
git push origin main

echo "Deploying to production..."
GIT_SSH_COMMAND='ssh -i ~/.ssh/macxpress26 -o IdentitiesOnly=yes' git push production main

echo "Deployment complete!"
echo "Site: https://anonymize.education"
```

## Server Configuration

### Production Server Details

| Setting | Value |
|---------|-------|
| Host | macxpress.net |
| Port | 6535 |
| User | mac46-190 |
| SSH Key | ~/.ssh/macxpress26 |
| Web Root | /var/www/anonymize.education |
| Bare Repo | ~/repos/anonymize.education.git |

### Post-Receive Hook

Located at: `~/repos/anonymize.education.git/hooks/post-receive`

```bash
#!/bin/bash
set -e
TARGET="/var/www/anonymize.education"
TMPDIR=$(mktemp -d)
trap "rm -rf $TMPDIR" EXIT
echo "Deploying anonymize.education..."
git archive HEAD | tar -x -C "$TMPDIR"
rsync -a --delete --exclude=brand "$TMPDIR/" "$TARGET/"
chmod 755 "$TARGET"
find "$TARGET" -type d -exec chmod 755 {} +
find "$TARGET" -type f -exec chmod 644 {} +
echo "Deployed anonymize.education successfully."
```

Note: The `brand/` directory (containing source assets and Python generators) is excluded from deployment.

### Nginx Configuration

Location: `/etc/nginx/sites-available/anonymize.education`

Key features:
- HTTP to HTTPS redirect (301)
- www to non-www redirect (301)
- SSL with Let's Encrypt (auto-renewal via certbot)
- HTTP/2 enabled
- HSTS (63072000 seconds = 2 years)
- Security headers (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy)
- Gzip compression
- Static asset caching (30 days)
- Rate limiting (10 req/s burst 20)

### SSL Certificate

- Provider: Let's Encrypt
- Path: `/etc/letsencrypt/live/anonymize.education/`
- Expiry: 2026-05-08 (auto-renewal enabled)
- Domains: anonymize.education, www.anonymize.education

## Verification

After deployment, verify:

```bash
# Check site is live
curl -sI https://anonymize.education | head -5

# Check SSL
echo | openssl s_client -connect anonymize.education:443 2>/dev/null | openssl x509 -noout -dates

# Check all pages
for page in "" features.html products.html use-cases.html pricing.html contact.html; do
  echo -n "$page: "
  curl -so /dev/null -w "%{http_code}\n" "https://anonymize.education/$page"
done
```

## Troubleshooting

### SSH Connection Issues

```bash
# Test SSH connection
ssh -i ~/.ssh/macxpress26 -p 6535 mac46-190@macxpress.net "echo OK"

# If agent issues, use GIT_SSH_COMMAND
GIT_SSH_COMMAND='ssh -i ~/.ssh/macxpress26 -o IdentitiesOnly=yes' git push production main
```

### Nginx Issues

```bash
# SSH to server
ssh -i ~/.ssh/macxpress26 -p 6535 mac46-190@macxpress.net

# Test nginx config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Check logs
sudo tail -f /var/log/nginx/error.log
```

### SSL Certificate Renewal

Certificates auto-renew via certbot. Manual renewal:

```bash
ssh -i ~/.ssh/macxpress26 -p 6535 mac46-190@macxpress.net \
  "sudo certbot renew --cert-name anonymize.education"
```

## File Structure

```
anonymize.education/
├── index.html              # Homepage
├── features.html           # Features page
├── products.html           # Products page
├── use-cases.html          # Use cases page
├── pricing.html            # Pricing page
├── contact.html            # Contact page
├── datenschutz.html        # Privacy policy (German)
├── impressum.html          # Imprint (German)
├── robots.txt              # Search engine directives
├── sitemap.xml             # XML sitemap
├── css/
│   ├── style.css           # Main stylesheet
│   └── animations.css      # Animation styles
├── js/
│   └── main.js             # Main JavaScript
├── images/                 # Website images (deployed)
│   ├── logo-*.png
│   ├── favicon-*.png
│   ├── hero-graphic.png
│   ├── icon-*.png
│   └── entity-*.png
├── brand/                  # Brand assets (NOT deployed)
│   ├── DESIGN-PHILOSOPHY.md
│   ├── THEME-PROTECTIVE-CLARITY.md
│   ├── assets/             # Source brand assets
│   ├── marketing/          # Marketing materials
│   ├── generate_assets.py  # Asset generator
│   └── generate_marketing.py
├── CHANGELOG.md
├── DEPLOYMENT.md
├── MARKETING-CONCEPT.md
└── .gitignore
```

## Contact

For deployment issues, contact the site administrator or check the main platform at anonym.legal.
