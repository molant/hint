// autogenerated by scripts/create/create-metas.js
import { Category } from 'hint/dist/src/lib/enums/category';
import { HintScope } from 'hint/dist/src/lib/enums/hint-scope';
import { HintMetadata } from 'hint/dist/src/lib/types';

import { getMessage } from '../i18n.import';

const meta: HintMetadata = {
    docs: {
        category: Category.accessibility,
        description: getMessage('language_description', 'en'),
        name: getMessage('language_name', 'en')
    },
    /* istanbul ignore next */
    getDescription(language: string) {
        return getMessage('language_description', language);
    },
    /* istanbul ignore next */
    getName(language: string) {
        return getMessage('language_name', language);
    },
    id: 'axe/language',
    schema: [{
        additionalProperties: false,
        properties: {
            'html-has-lang': { enum: ['off', 'warning', 'error'], type: 'string' },
            'html-lang-valid': { enum: ['off', 'warning', 'error'], type: 'string' },
            'html-xml-lang-mismatch': { enum: ['off', 'warning', 'error'], type: 'string' },
            'valid-lang': { enum: ['off', 'warning', 'error'], type: 'string' }
        }
    }],
    scope: HintScope.any
};

export default meta;
