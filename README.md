# SEO Tools Project

Website analysis and technical SEO toolkit based on the open-source
[Web-Check](https://github.com/Lissy93/web-check) project.

## Requirements

- Node.js 22 or newer
- Yarn 1.22

## Development

```bash
corepack enable
yarn install
yarn dev
```

## Production

```bash
yarn install
yarn build
yarn start
```

The application is served on `http://localhost:3000` by default. All
environment variables are optional; see `.env.sample` for integrations and
runtime settings.

## Deployment

The repository includes `vercel.json` and can be imported directly into
Vercel.

## License

MIT. The original Web-Check copyright and license are retained in `LICENSE`.
