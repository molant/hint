// autogenerated by scripts/create/create-hints.js
import { HintContext } from 'hint/dist/src/lib/hint-context';
import { IHint } from 'hint/dist/src/lib/types';
import { register } from './util/axe';

import meta from './meta/aria';

export default class AxeHint implements IHint {
    public static readonly meta = meta;
    public constructor(context: HintContext) {
        register(context, ['aria-allowed-attr', 'aria-allowed-role', 'aria-dpub-role-fallback', 'aria-hidden-body', 'aria-input-field-name', 'aria-required-attr', 'aria-required-children', 'aria-required-parent', 'aria-roles', 'aria-toggle-field-name', 'aria-valid-attr', 'aria-valid-attr-value'], ['aria-allowed-role']);
    }
}
