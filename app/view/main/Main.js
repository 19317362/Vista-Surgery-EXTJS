/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('VistA.Surgery.view.main.Main', {
	extend: 'Ext.Panel',
	xtype: 'app-main',

    layout: "border",
    bodyBorder: false,
	defaults: {
	    collapsible: true
	    // split: true,
	    // bodyPadding: 15
	},
	items: [
		{
		    title: 'VistA Surgery',
		    region: 'north',
		    height: 25,
		    collapsible: false
		},

		{
			xtype: "app-info",
		    region: 'west',
		    store: "User"
		},

		{
			header: false,
		    region: 'east',
			xtype: "tabpanel",
		    margins: '5px 0 0 0',
		    width: "80%",
		    split: true,
			layout: "fit",
			// align: "stretch",
			// resizable: {
			// 	handles: "all",
			// 	pinned: true
			// },
			items: [
				{
					title: 'Surgical',
					xtype: "tabpanel",
					items: [
						{ title: "Status Monitoring"},
						{ title: "Needs Management"},
						{ title: "Prosthetics / Implant Information"},
						{ title: "PCSM"},
						{ title: "Post Proc CPT Codes"}
					]
				},
				{
					title   : 'Case Management',
					xtype: "tabpanel",
					items: [
						{ title: "View"},
						{ title: "Scheduling"}
					]
				},
				{	title   : 'Patient'				},
				{	title   : 'Reports'				},
				{	title   : 'Management'			}
			]
		},
		{
		    title: 'Footer',
		    region: 'south',
		    height: 25,
		    collapsible: false
		}		

	]
});
