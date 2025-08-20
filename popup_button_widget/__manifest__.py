# -*- coding: utf-8 -*-
{
    'name': 'Popup Button Widget',
    'version': '17.0.1.0.0',
    'category': 'Web',
    'summary': 'Add a reusable popup button to the systray using OWL',
    'description': """
Popup Button Widget
====================

This module adds a customizable popup button to the systray using OWL components.
""",
    'author': 'Muhammed Aslam',
    'contributors': [
        'Muhammed Aslam',
    ],
    'depends': ['web'],
    'data': [],
    'assets': {
        'web.assets_backend': [
            # 'popup_button_widget/static/src/js/voxtron_sdk.js',
            'popup_button_widget/static/src/js/note_popup_widget.js',
            'popup_button_widget/static/src/js/popup_systray_button.js',
            'popup_button_widget/static/src/js/registry_systray.js',
            'popup_button_widget/static/src/xml/note_popup_template.xml',
            'popup_button_widget/static/src/xml/popup_systray_button.xml',
            'popup_button_widget/static/src/js/phone_field.js',
            'popup_button_widget/static/src/xml/phone_field.xml',
            'popup_button_widget/static/src/xml/vox_call_button.xml',
            'popup_button_widget/static/src/js/vox_call_button.js',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'AGPL-3',
}
