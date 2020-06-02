const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
const spinnerNewLine = spinner.push('\n');
let timer = 100

spinner.forEach(element => {
  setTimeout(() => {
    process.stdout.write(element);
  }, timer);
  timer += 200
});