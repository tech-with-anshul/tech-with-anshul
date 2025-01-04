const thisYear = new Date().getFullYear();
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00Z`).getTime();
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59Z`).getTime();
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear);
const progressBarOfThisYear = generateProgressBar(progressOfThisYear);

function generateProgressBar(progress) {
    const progressBarCapacity = 30;
    const passedProgressBarIndex = Math.floor(progress * progressBarCapacity);
    const progressBar =
        '█'.repeat(passedProgressBarIndex) +
        '▁'.repeat(progressBarCapacity - passedProgressBarIndex);
    return `{ ${progressBar} }`;
}

const readme = `
### नमस्ते (Namaste) 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

![Progress Bar CI](https://github.com/tech-with-anshul/tech-with-anshul/workflows/Progress%20Bar%20CI/badge.svg)
`;

console.log(readme);
