/** @odoo-module **/

import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { NotePopupWidget } from "./note_popup_widget";

export class NoteSystrayButton extends Component {
    static template = "popup_button_widget.NoteSystrayButton";

    setup() {
        this.dialog = useService("dialog");
    }

    openNotePopup() {
        this.dialog.add(NotePopupWidget, {});
    }
}