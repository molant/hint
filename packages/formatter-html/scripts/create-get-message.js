const fs = require('fs');
const path = require('path');

const { format } = require('@hint/utils/dist/src/i18n/format');

const filename = path.join(process.cwd(), 'src', 'assets', 'js', 'scan', 'get-message.js');

/**
 * This will create a get-message.js that will be used by the browser
 * to show localized strings.
 *
 * The formatter-html will use this file in the CLI and in the online
 * service.
 *
 * The generated file will use `window.localeStrings` which is initialize
 * for the `messages.js` generated by `compile-locales.js`.
 */
const content = `// Autogenerated by scripts/create-get-message.js

(function () {

    /* eslint-disable padding-line-between-statements, no-var, prefer-arrow-callback */
    var format = ${format.toString().split('\n')
        .map((line, index) => {
            if (index === 0) {
                return line;
            }

            return `    ${line}`;
        })
        .join('\n')};
    /* eslint-enable padding-line-between-statements */

    window.getMessage = function (key, substitutions) {
        var localeString = window.localeStrings && window.localeStrings[key];

        if (!localeString) {
            return key;
        }

        return format(localeString.message, substitutions);
    };
}());
`;


fs.writeFile(filename, content, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`Created: ${filename} `);
    }
});
