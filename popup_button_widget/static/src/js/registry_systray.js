/** @odoo-module **/

import { registry } from "@web/core/registry";
import { NoteSystrayButton } from "./popup_systray_button";

registry.category("systray").add("popup_button_widget.NoteSystrayButton", {
    Component: NoteSystrayButton,
}, { sequence: 120 });