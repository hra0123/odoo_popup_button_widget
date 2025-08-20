/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { patch } from "@web/core/utils/patch";
import { PhoneField, phoneField, formPhoneField } from "@web/views/fields/phone/phone_field";
import { VoxCallButton } from '@popup_button_widget/js/vox_call_button';
patch(PhoneField, {
    components: {
        ...PhoneField.components,
        VoxCallButton
    },
    defaultProps: {
        ...PhoneField.defaultProps,
        enableButton: true,
    },
    props: {
        ...PhoneField.props,
        enableButton: { type: Boolean, optional: true },
    },
});

const patchDescr = () => ({
    extractProps({ options }) {
        const props = super.extractProps(...arguments);
        props.enableButton = options.enable_sms;
        return props;
    },
    supportedOptions: [{
        label: _t("Enable SMS"),
        name: "enable_sms",
        type: "boolean",
        default: true,
    }],
});

patch(phoneField, patchDescr());
patch(formPhoneField, patchDescr());