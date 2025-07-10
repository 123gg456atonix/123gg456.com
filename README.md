# 🌐 123gg456.com Web Template Setup Guide

**Version:** 1.0  
**Made by:** [`123gg456_`](https://123gg456.com/contact)

> **Note:** If you're modifying or reselling this template, please **credit the original author**. For help or questions, reach out on [Discord](https://123gg456.com/contact).

---

## 📩 Contact Form Configuration

To enable the contact form system:

1. Set an API key (can be random or self-made).
2. Update the following files:
   - `/api/discord-webhook/contact/route.ts`
   - `/components/ui/contact-page.tsx`
   - `.env` (optional)

---

## 🌐 NGINX Web Server Setup

> Replace `<domain.com>` with your actual domain name.

### 📌 Step 1: Install NGINX and Certbot

```bash
apt install certbot nginx -y
systemctl stop nginx
certbot certonly --standalone -d <domain.com>
systemctl start nginx
rm /etc/nginx/sites-enabled/default
````

---

### 📌 Step 2: Update DNS Records

Go to your domain provider’s DNS panel and point your domain to your server's IP address.

---

### 📌 Step 3: Create NGINX Config

1. Run:

   ```bash
   nano /etc/nginx/sites-enabled/<domain.com>
   ```

2. Paste the following configuration:

   ```nginx
   # Redirect www and HTTP to HTTPS
   server {
       listen 80;
       server_name <domain.com> www.<domain.com>;
       return 301 https://<domain.com>$request_uri;
   }

   # Main HTTPS block
   server {
       listen 443 ssl;
       server_name <domain.com>;

       ssl_certificate /etc/letsencrypt/live/<domain.com>/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/<domain.com>/privkey.pem;
       include /etc/letsencrypt/options-ssl-nginx.conf;
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. Save the file:

   * Press `Ctrl + X`, then `Y`, then `Enter`.

---

### 📌 Step 4: Build & Run the Web App

```bash
cd /path/to/serverfiles
npm i --force
npm run build
npm install pm2 --force
pm2 start "npm run start" --name webserver
pm2 save
pm2 startup
systemctl restart nginx
```

---

### ✅ Step 5: Verify

Open your domain in a browser and check if the web server is running.

If not, carefully review and repeat the steps above.

---

## 🙏 Thanks for using my product!

> Don't be shy to help fix bugs or donate if this helped you ❤️
> Made with 💻 by [`123gg456_`](https://123gg456.com/contact)

```
