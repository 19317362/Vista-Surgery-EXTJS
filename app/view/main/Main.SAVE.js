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

    layout: {
        type: 'hbox'
    },	

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'VistA.Surgery.view.main.MainController',
		'VistA.Surgery.view.main.MainModel',
		'VistA.Surgery.view.main.List'
	],

	controller: 'main',
	viewModel: 'main',

	ui: 'navigation',

	// tabBarHeaderPosition: 1,
	// titleRotation: 0,
	// tabRotation: 0,

	header: {
		layout: {
			align: 'stretchmax'
		},
		title: {
			bind: {
				text: '{name}'
			},
			flex: 0
		},
		iconCls: 'fa-th-list'
	},

	// tabBar: {
	// 	flex: 1,
	// 	layout: {
	// 		align: 'stretch',
	// 		overflowHandler: 'none'
	// 	}
	// },

	// responsiveConfig: {
	//     tall: {
	//         headerPosition: 'top'
	//     },
	//     wide: {
	//         headerPosition: 'left'
	//     }
	// },

	defaults: {
		bodyPadding: "1px 5px 1px 1px;"
		// tabConfig: {
		// 	plugins: 'responsive',
		// 	responsiveConfig: {
		// 		wide: {
		// 			iconAlign: 'left',
		// 			textAlign: 'left'
		// 		},
		// 		tall: {
		// 			iconAlign: 'top',
		// 			textAlign: 'center',
		// 			width: 120
		// 		}
		// 	}
		// }
	},

	// items: [{
	// 	title: 'Home',
	// 	iconCls: 'fa-home',
	// 	// The following grid shares a store with the classic version's grid as well!
		items: [
		{
			xtype: "panel",
			layout: "fit",
			align: "stretch",
	        resizable: {
	            handles: 'all',
	            pinned: true
	        },
		    margin: "0 5px 0 0",
            border: true,

            draggable: false,
            width:"20%",
			html: "<table style=\"margin-left:1em;\">\
			<tr>\
			<td><i class=\"fa fa-user-md\" style=\"font-size:48px;\" aria-hidden=\"true\"><strong>⚕</strong></i></td>\
			<td>\
			<h3>User Information</h3>\
			Cobblepot, Oswald\<br>Role: Surgeon\
			</td></tr>\
			<tr><td colspan=2>\
			<h3>Facility Information</h3>\
			</td></tr>\
			</table>"
		},
		{
			xtype: "tabpanel",
            width:"80%",
        	layout: "fit",
			align: "stretch",
            resizable: {
            	handles: "all",
	            pinned: true
            },  			
		    margin: "0 5px 0 0",
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
				{					title   : 'Patient'				},
				{					title   : 'Reports'				},
				{					title   : 'Management'			}
			]
		}]
	// }

	// , {
	// 	title: 'Users',
	// 	iconCls: 'fa-user',
	// 	bind: {
	// 		html: '{loremIpsum}'
	// 	}
	// }, {
	// 	title: 'Groups',
	// 	iconCls: 'fa-users',
	// 	bind: {
	// 		html: '{loremIpsum}'
	// 	}
	// }, {
	// 	title: 'Settings',
	// 	iconCls: 'fa-cog',
	// 	bind: {
	// 		html: '{loremIpsum}'
	// 	}
	// }

	// ]
});
