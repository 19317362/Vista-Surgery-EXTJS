/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('VistA.Surgery.view.info.Info', {
	extend: 'Ext.Panel',
	xtype: 'app-info',

	viewModel: 'User',	

    title: 'Information',
    margins: '5px 0 0 0',
    width: "20%",
	bind: {
		html: 
    '<table style=\"margin-left:1em;\">\
			<tr>\
			<td><i class=\"fa fa-user-md\" style=\"font-size:48px;\" aria-hidden=\"true\"><strong>⚕</strong></i></td>\
			<td>\
			<h3>User Information</h3>\
			{name}<br>Role: {role}\
			</td></tr>\
			<tr><td colspan=2>\
			<h3>Facility Information</h3>\
			Facility: {facility}\
			</td></tr>\
			</table>{loremIpsum}'
	},



});
