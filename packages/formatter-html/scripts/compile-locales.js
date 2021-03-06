const fs = require('fs');
const path = require('path');
const util = require('util');

const globby = require('globby');
const fsExtra = require('fs-extra');

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

/**
 * Creates a js file for each locale file so we can use
 * them in the browser.
 * The formatter-html will use these files in the CLI and
 * in the online-scanner.
 */
const compile = async () => {
    const locales = await globby(['src/_locales/*/messages.json'], { absolute: true });

    for (const locale of locales) {
        const localeString = await readFileAsync(locale, 'utf-8');
        const localeParts = locale.split('/');
        const language = localeParts[localeParts.length - 2];

        const content = `// Autogenerated by scripts/compile-locales.js
/* eslint-disable quotes, quote-props */
(function () {
    window.localeStrings = ${localeString
        .trim()
        .split('\n')
        .map((line, index) => {
            if (index === 0) {
                return line;
            }

            return `    ${line}`;
        })
        .join('\n')};
}());
`;

        const directory = path.join(locale, '..', '..', '..', 'assets', 'js', 'scan', '_locales', language);
        const filename = path.join(directory, 'messages.js');

        await fsExtra.mkdirp(directory);

        await writeFileAsync(filename, content, 'utf-8');
    }
};

compile();
