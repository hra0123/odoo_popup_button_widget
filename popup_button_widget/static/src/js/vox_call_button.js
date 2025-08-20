/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { useService } from "@web/core/utils/hooks";
import { Component, status } from "@odoo/owl";
import { loadJS } from "@web/core/assets";

export class VoxCallButton extends Component {
    setup() {
        this.action = useService("action");
        this.user = useService("user");
        this.title = _t("Send SMS Text Message");
    }
    get phoneHref() {
        return "sms:" + this.props.record.data[this.props.name].replace(/\s+/g, "");
    }

    async willStart() {
    if (!window.bpspatScriptLoaded) {
        // await loadJS("https://cdn.jsdelivr.net/npm/chart.js");
        // await loadJS("/popup_button_widget/static/src/js/voxtron_sdk.js");
        await loadJS("https://voxtronsandbox.voxvantage.com/agentdesktop/libs/servicepattern-sdk-v1.js");
        window.bpspatScriptLoaded = true;
    }
}
    async onClick() {
        debugger;
        console.log("before loaddddddddddddddddddddd");

        // await loadJS("/popup_button_widget/static/src/js/voxtron_sdk.js");
        await loadJS("https://voxtronsandbox.voxvantage.com/agentdesktop/libs/servicepattern-sdk-v1.js");
        console.log("afterrrrrrrrrrrrrrrrr loaddddddddddddddddddddd");
        window.bpspatScriptLoaded = true;
        const phone = this.props.record.data[this.props.name];  // e.g. "mobile"
        console.log("phone",phone);
        if (!phone) {
            console.warn("No phone number found on the record.");
            return;
        }
        console.log(window);
        console.log(window.bpspat);
        console.log(window.bpspat.api.dialNumber);
        if (
            window.bpspat &&
            window.bpspat.api &&
            typeof window.bpspat.api.dialNumber === "function"
        ) {
            console.log("calllllllllllllllll");
            console.log(window.bpspat.api.dialNumber);
            window.bpspat.api.dialNumber(phone);
        } else {
            console.error("❌ Voxtron SDK is loaded but dialNumber is not available.");
        }
    }
}
VoxCallButton.template = "popup_button_widget.VoxCallButton";
VoxCallButton.props = ["*"];