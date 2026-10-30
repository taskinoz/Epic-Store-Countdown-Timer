# Epic Games Store Exclusives

[![Netlify Status](https://api.netlify.com/api/v1/badges/5ffdb66b-8de6-4ec6-9d1d-aa9944d86bad/deploy-status)](https://app.netlify.com/sites/nervous-heyrovsky-64fcbb/deploys)

Counts down until timed Epic Games Store exclusives arrive on Steam.

## Game data

Games live in [`src/data/games.json`](src/data/games.json). Dates are `YYYY-MM-DD`; anything else (`"TBA"`, `"Q3 2027"`) is shown as-is and treated as not yet released.

| Field | |
| --- | --- |
| `name`, `epicRelease`, `epicLink`, `steamLink` | required |
| `steamRelease` | required, `"TBA"` if unknown |
| `steamAppId` | used to refresh `steamRelease` and as the image fallback |
| `image` | file in `src/gametiles/`; falls back to the Steam header image |
| `xboxRelease`, `xboxLink` | optional |

### Updating from Steam

Steam release dates are refreshed from the public Steam store API (`store.steampowered.com/api/appdetails`, no key needed):

```sh
npm run update-games                                          # refresh every game with a steamAppId
npm run update-games -- --add 1824220 --epic 2021-06-08       # add a game from its Steam page
```

The [Update game release dates](.github/workflows/update-games.yml) workflow runs this every Monday and commits any changes, which Netlify then deploys. It can also be run by hand from the Actions tab. Requires *Settings → Actions → General → Workflow permissions* to allow read and write.

Steam doesn't say which games are Epic exclusives, so new games still need adding with `--add`. Sources for those are listed in [TODO.md](TODO.md).

## Development

Requires Node 20.19+ (see `.nvmrc`).

```sh
npm install
npm run dev       # dev server
npm run lint
npm test
npm run build     # production build in build/
```
