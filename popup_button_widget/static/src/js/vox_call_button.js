/** @odoo-module **/

import {_t} from "@web/core/l10n/translation";
import {useService} from "@web/core/utils/hooks";
import {Component, status} from "@odoo/owl";
import {loadJS} from "@web/core/assets";

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
        const phone = this.props.record.data[this.props.name];

        if (!phone) {
            console.warn("No phone number found on the record.");
            return;
        }

        console.log("Initiating Vox call to:", phone);

        // Method 1: Try to find existing Voxtron iframe and use its SDK
        const voxtronIframe = this.findVoxtronIframe();

        if (voxtronIframe) {
            try {
                // Use the SDK that's already loaded in the iframe
                if (voxtronIframe.contentWindow &&
                    voxtronIframe.contentWindow.bpspat &&
                    voxtronIframe.contentWindow.bpspat.api &&
                    typeof voxtronIframe.contentWindow.bpspat.api.dialNumber === "function") {

                    console.log("✅ Using existing Voxtron iframe SDK");
                    voxtronIframe.contentWindow.bpspat.api.dialNumber(phone);
                    return;
                }
            } catch (error) {
                console.warn("Direct iframe access failed:", error);
            }

        }

    }

// Add this helper method to find Voxtron iframe
    findVoxtronIframe() {
        const iframes = document.querySelectorAll('iframe');
        for (const iframe of iframes) {
            try {
                if (iframe.src && (
                    iframe.src.includes('voxtron') ||
                    iframe.src.includes('voxvantage') ||
                    iframe.src.includes('agentdesktop')
                )) {
                    return iframe;
                }
            } catch (error) {
                continue;
            }
        }
        return null;
    }

}

VoxCallButton.template = "popup_button_widget.VoxCallButton";
VoxCallButton.props = ["*"];