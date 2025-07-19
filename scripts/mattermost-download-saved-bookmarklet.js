function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
(async () => {
  const filesData = Array.from(document.querySelector('#searchContainer').querySelectorAll('.post'))
    .reduce((files, p) => {
      const [url, text] = (p.querySelector('.post-message').textContent).split(/\s(.*)/s).map(s => s.trim());
  
      const date = formatDate(new Date(p.querySelector('time').dateTime));
  
      const lastDate = files.at(-1)?.date;
      const lastFilename = files.at(-1)?.filename;
  
      const count = (lastDate && lastDate === date) ?
        (parseInt(lastFilename.split('-').at(-1) ?? '0') + 1).toString().padStart(3, '0') :
        '001';
  
      files.push({
        date,
        filename: `${date}-${count}`,
        url,
        text: (text ?? '').replace(':joy:', '😂')
          .replace(':open_mouth:', '😮')
          .replace(':hype:', '🙌')
          .replace(':laughing:', '😆')
          .replace(/:[^:]+:/g, '')
          .replace(/\sEdited$/, '')
          .trim(),
      });
      return files;
    }, [])
    .filter(p => p.url.startsWith('http') && new Date(p.date).getFullYear() > 2024)
    .map(p => ({
      filename: p.filename,
      contents: `---
title: ''
link: ${p.url}
---

${p.text}`.trim() + '\n',
    }))
  
  for (const file of filesData) {
    await new Promise(r => setTimeout(r, 250)); // Wait 250ms between downloads
    console.count('download');
    const blob = new Blob([file.contents], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${file.filename}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
})()