export default function rawFonts(ext) {
    return {
      name: 'vite-plugin-raw-fonts',
      transform(_, id) {
        if (ext.some(e => id.endsWith(e))) {
          const buffer = fs.readFileSync(id);
          return {
            code: `export default Buffer.from(${JSON.stringify(buffer)})`,
            map: null
          };
        }
      }
    };
  }