window.rnwWidget = window.rnwWidget || {};
window.rnwWidget.configureWidget = window.rnwWidget.configureWidget || [];
window.rnwWidget.configureWidget.push(function(options) {

    options.translations.step_amount.onetime_amounts = [{
        text: '30',
        value: '3000'
    }, {
        text: '50',
        value: '5000'
    }, {
        text: '100',
        value: '10000'
    }, {
        text: '500',
        value: '50000'
    }]
    options.translations.step_amount.recurring_amounts = [{
        text: '5',
        value: '500'
    }, {
        text: '65',
        value: '6500'
    }, {
        text: '160',
        value: '16000'
    }, {
        text: '480',
        value: '48000'
    }];
    options.defaults['stored_customer_email_permission'] = 'true';
    options.defaults['stored_customer_donation_receipt'] = 'true';
    options.defaults['ui_onetime_amount_default'] = '5000';
    options.defaults['ui_recurring_amount_default'] = '500';
    options.defaults['stored_campaign_id'] = '20210927';
    options.defaults['stored_campaign_subid'] = 'Born to be wild';
    options.defaults['stored_rnw_purpose_text'] = 'Born to be wild';
    options.widget.on(window.rnwWidget.constants.events.WIDGET_LOADED, function(event) {
        event.widget.hideStep('donation-target');
    })
});