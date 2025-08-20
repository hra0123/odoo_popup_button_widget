/** @odoo-module **/

import { Component } from "@odoo/owl";

export class NotePopupWidget extends Component {
    setup() {}

    onClose() {
        this.props.close();
    }
}

NotePopupWidget.template = "popup_button_widget.NotePopupWidget";