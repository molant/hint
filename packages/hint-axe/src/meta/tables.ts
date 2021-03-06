// autogenerated by scripts/create/create-metas.js
import { Category } from 'hint/dist/src/lib/enums/category';
import { HintScope } from 'hint/dist/src/lib/enums/hint-scope';
import { HintMetadata } from 'hint/dist/src/lib/types';

import { getMessage } from '../i18n.import';

const meta: HintMetadata = {
    docs: {
        category: Category.accessibility,
        description: getMessage('tables_description', 'en'),
        name: getMessage('tables_name', 'en')
    },
    /* istanbul ignore next */
    getDescription(language: string) {
        return getMessage('tables_description', language);
    },
    /* istanbul ignore next */
    getName(language: string) {
        return getMessage('tables_name', language);
    },
    id: 'axe/tables',
    schema: [{
        additionalProperties: false,
        properties: {
            'scope-attr-valid': { enum: ['off', 'warning', 'error'], type: 'string' },
            'table-duplicate-name': { enum: ['off', 'warning', 'error'], type: 'string' },
            'table-fake-caption': { enum: ['off', 'warning', 'error'], type: 'string' },
            'td-has-header': { enum: ['off', 'warning', 'error'], type: 'string' },
            'td-headers-attr': { enum: ['off', 'warning', 'error'], type: 'string' },
            'th-has-data-cells': { enum: ['off', 'warning', 'error'], type: 'string' }
        }
    }],
    scope: HintScope.any
};

export default meta;
