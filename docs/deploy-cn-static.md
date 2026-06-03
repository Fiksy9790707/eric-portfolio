# 国内 / 近国内静态部署方案

这个项目可以完全静态化部署。Vercel 的 `/api/*` serverless routes 不是必须条件：GitHub 活动区会在 API 不可用时使用本地公开仓库 fallback 数据，联系区也已经改成邮箱复制、GitHub 和公开简历链接。

## 推荐优先级

### 1. Cloudflare Pages

适合：不想备案、不想买云资源、希望比 GitHub Pages 更稳定一点的公开作品集。

特点：

- 免费额度通常足够个人作品集使用。
- 从 GitHub 仓库自动构建。
- 支持 `_redirects`，本项目已经添加 `public/_redirects`，用于让 `/about`、`/projects`、`/lab/...` 这类前端路由刷新时回到 `index.html`。
- 它不是中国大陆机房，国内访问稳定性会比 Vercel/GitHub Pages 更可尝试，但不能保证所有网络都无需代理。

Cloudflare Pages 设置：

```text
Framework preset: Vite
Build command: npm run build
Output directory: dist
Environment variables: none
```

部署后要检查：

- `/`
- `/about`
- `/projects`
- `/writing`
- `/lab`
- `/lab/software-construction-aircraft-war`
- `/resume.md`

### 2. 阿里云 OSS 静态网站

适合：希望更接近国内访问，但能接受对象存储可能产生少量费用。

注意：

- OSS 静态网站托管可以直接托管 `dist` 中的 HTML、CSS、JS 和图片。
- 如果绑定自定义域名并开启 CDN/HTTPS，通常会涉及域名备案和云服务配置。
- 不要上传 `.env`、`.vercel`、`node_modules`、源码目录或任何密钥，只上传 `dist` 目录内容。

构建：

```powershell
npm run build
```

OSS 设置建议：

```text
Index document: index.html
Error document: index.html
Upload folder: dist/*
Access: public read, or public static website policy
```

如果错误文档不能直接设置为 `index.html`，至少保证首页 `/` 可访问；深层路径可以通过站内导航进入。

### 3. 腾讯云 COS 静态网站

适合：和 OSS 类似，希望使用腾讯云对象存储做静态站。

构建：

```powershell
npm run build
```

COS 设置建议：

```text
Index document: index.html
Error document: index.html
Upload folder: dist/*
Access: public read, or public static website policy
```

同样注意：如果要绑定国内自定义域名并开 CDN/HTTPS，可能涉及备案、费用和云控制台配置。

## 本项目静态部署时的边界

静态部署只运行前端文件，不运行 Vercel serverless API：

- `/api/health` 不可用。
- `/api/github` 不可用时，页面会使用 `src/data/profile.ts` 中的公开 fallback 仓库数据。
- `/api/contact` 不需要使用；公开页面使用邮箱复制按钮和 GitHub 链接。

这符合当前第一版策略：不做登录、不接数据库、不使用付费邮件服务、不暴露密钥。

## 上传前检查

上传前运行：

```powershell
npm run lint
npm run build
```

只上传：

```text
dist/
```

不要上传：

```text
node_modules/
.env
.env.local
.vercel/
src/
api/
tmp/
```

## 对外链接建议

可以在 GitHub profile README 中同时放两个入口：

```text
Primary: https://eric-portfolio-weld.vercel.app/
Mirror:  Cloudflare Pages / OSS / COS URL
```

等国内或近国内静态站稳定后，再把它标成 Mirror。不要把 GitHub Pages 称为真正国内镜像，它更准确地说只是 GitHub 静态备用入口。
