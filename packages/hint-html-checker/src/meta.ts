import { Category, HintMetadata, HintScope } from 'hint';

import { getMessage } from './i18n.import';

const meta: HintMetadata = {
    docs: {
        category: Category.compatibility,
        description: getMessage('description', 'en'),
        name: getMessage('name', 'en')
    },
    /* istanbul ignore next */
    getDescription(language: string) {
        return getMessage('description', language);
    },
    /* istanbul ignore next */
    getName(language: string) {
        return getMessage('name', language);
    },
    id: 'html-checker',
    schema: [{
        properties: {
            details: { type: 'boolean' },
            ignore: {
                anyOf: [
                    {
                        items: { type: 'string' },
                        type: 'array'
                    }, { type: 'string' }
                ]
            },
            validator: {
                pattern: '^(http|https)://',
                type: 'string'
            }
        }
    }],
    scope: HintScope.any
};

export default meta;
