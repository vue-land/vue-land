# vue-land [![badge](https://img.shields.io/discord/325477692906536972.svg)](https://vue-land.js.org)

See https://vue-land.js.org

## Development

```bash
# dev server
yarn dev

# build static website
yarn build
```

The website is automatically deployed to Netlify.

To add a QA:

- Add a markdown file in `./src/markdown/q-and-a` using `:id-:persons.md` format.
- Add a link to the QA in `./src/views/QandA.vue`. (TODO: make this automatic)

## License

MIT &copy; EGOIST
