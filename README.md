![website icon](https://img.icons8.com/flat_round/128/000000/crane-hook.png)

# better-grue

A simple & minimalist url shrinker (or shortener) with improved website UI design and performance.

Note: This is just a revamped and improved version of my previous simple project [grue](https://github.com/TheBoringDude/grue)

#### Website Icon:

I am too lazy in designing something unique so I took it from [Icons8](https://icons8.com/icon/81361/crane-hook) `Crane Hook icon by Icons8`

## Development

Website is crafted and built from `NextJS`

- Clone the repo

```bash
gh repo clone TheBoringDude/better-grue
```

- Install required packages

```bash
cd better-grue && yarn install
```

- Create a `.env.local` in your root folder and configure it as shown below (This should be similar when deployed)

```
DOMAIN_URL={domain to be hosted, use http://localhost:3000/ when in development}
MONGODB_URI={your mongodb uri}
MONGODB_DB={mongodb database name}
MONGODB_COLLECTION={mongodb collection name}
```

- Run development server

```
yarn dev
```

## Design

I prefer to be simplistic and minimalistic, I used [TailwindCSS](tailwindcss.com/) completely for it.

## Notes:

- All generated urls are stored in a MongoDB database.
- Similar long urls will have the same shortlinks. If I will shrink `https://www.google.com` I will get a shortlink of `QU47Q`. Other users will have a similar shortlink which is `QU47Q`.
- It doesn't log any request statistics, just the creation date.

### Other used packages

- axios
- hightlightjs
- moment
- nanoid
- mongodb

#### &copy; TheBoringDude
