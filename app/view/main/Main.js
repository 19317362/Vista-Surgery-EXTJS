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
		    region: 'north',
		    height: 25,
		    collapsible: false,
		    title: 'VistA Surgery',
			tools: [
			    {
			        type: 'search',
			        handler: function (panel) {
			            // do search
			            panel.down('#refresh').show();
			        },
				     listeners: {
				         afterrender: function(me) {
				             Ext.tip.QuickTipManager.register({
				                 target: me.getId(), // Target button's ID
				                 title : 'Search',  // QuickTip Header
				                 text  : 'Brings up a modal dialog box to assist in searching' // Tip content
				             });
				         }
				     }			        
			    },
				{
			        type: 'help',
			        handler: function() {
			            // show help here
			        }
			    }, 
			    {
			        itemId: 'refresh',
			        type: 'refresh',
			        handler: function () {
			            // do refresh
			        }
			    }
		    ]
			    // html: "<div style=\"float:right; margin-top:-3px;\">\
			    // <input type=\"text\" /><i class=\"fa fa-search\" aria-hidden=\"true\"></i>\
			    // <a href=\"#\">Logout</a>"

		},

		{
			xtype: "app-info",
			id: "SurgeryInfoPanel",
		    region: 'west',
		    store: "User",
		    border: '15px 0 0 0'
		},

		{
			header: false,
		    region: 'east',
			xtype: "tabpanel",
		    border: '15px 0 0 0',
		    width: "80%",
		    // split: true,
			layout: "fit",
			// align: "stretch",
			// resizable: {
			// 	handles: "all",
			// 	pinned: true
			// },
			items: [
				{
					title: 'Surgery Monitoring',
					xtype: "tabpanel",
					items: [
						{ title: "Waiting List"},
						{ title: "List Operation Requests"},
						{ title: "List Scheduled Operations"}
					]
				},
				{
					title   : 'Operation Requests',
					xtype: "tabpanel",
					items: [
						{ title: "Display Availability"},
						{ title: "Make Operation Requests"},
						{ title: "Delete or Update Operation Requests"},
						{ title: "Make a Request from the Waiting List"},
						{ title: "Make a Request for Concurrent Cases"},
						{ title: "Review Request Information"},
						{ title: "Operation Requests for a Day"},
						{ title: "Requests by Ward"}
					]
				},
				{	title   : 'Schedule Operations',
					xtype: "tabpanel",
					items: [
{ title: "Display Availability"},
{ title: "Schedule Requested Operations"},
{ title: "Schedule Unrequested Operations"},
{ title: "Schedule Unrequested Concurrent Cases"},
{ title: "Reschedule or Update a Scheduled Operation"},
{ title: "Cancel Scheduled Operation"},
{ title: "Update Cancellation Reason"},
{ title: "Schedule Anesthesia Personnel"},
{ title: "Create Service Blockout"},
{ title: "Delete Service Blockout"},
{ title: "Schedule of Operations (Prints Schedule)"}
					]
				},

				{	title   : 'Operations'
				},

				{	title   : 'Anesthesia',
					xtype: "tabpanel",
					items: [

{ title: "Anesthesia Data Entry Menu"},
{ title: "Anesthesia Report"},
{ title: "Schedule Anesthesia Personnel"}
					]
				},
				{	title   : 'Perioperative Occurrences',
					xtype: "tabpanel",
					items: [
{ title: "Intraoperative Occurrences"},
{ title: "Postoperative Occurrences"},
{ title: "Update Status of Returns Within 30 Days"},
{ title: "Morbidity & Mortality Reports"}

					]
				},
				{	title   : 'Non-O.R. Procedures',
					xtype: "tabpanel",
					items: [

{ title: "Non-O.R. Procedures (Enter/Edit)"},
{ title: "Annual Report of Non-O.R. Procedures"},
{ title: "Report of Non-O.R. Procedures"}


					]
				},
				{	title   : 'Patient Management',
					xtype: "tabpanel",
					items: [


{ title: "Comments"},
{ title: "Lookup Patient, Return Case, Enter Progress Note (TIU)"},
{ title: "Laboratory Interim Report"},
{ title: "Lookup Patient, Return Lab data"}



					]
				},
				{	title   : 'Reports'},
				{	title   : 'Surgery Risk Assessment Menu',
					xtype: "tabpanel",
					items: [

{ title: "Non-Cardiac Assessment Information"},
{ title: "Cardiac Risk Assessment Information"},
{ title: "Print a Surgery Risk Assessment"},
{ title: "Update Assessment Completed/Transmitted in Error"},
{ title: "List of Surgery Risk Assessments"},
{ title: "Print 30 Day Follow-up Letters"},
{ title: "Exclusion Criteria"},
{ title: "Monthly Surgical Case Workload Report"},
{ title: "M&M Verification Report"},
{ title: "Update 1-Liner Case"},
{ title: "Queue Assessment Transmissions"},
{ title: "Alert Coder Regarding Coding Issues"},
{ title: "Risk Model Lab Test"}






					]
				},
				{	title   : 'Chief of Surgery Menu',
					xtype: "tabpanel",
					items: [
	
{ title: "View Patient Perioperative Occurrences"},
{ title: "Management Reports"},
{ title: "Unlock a Case for Editing"},
{ title: "Update Status of Returns Within 30 Days"},
{ title: "Update Cancelled Case"},
{ title: "Update Operations as Unrelated/Related to Death"},
{ title: "Update/Verify Procedure/Diagnosis Codes"}


					]
				},
				{	title   : 'Surgery Package Management Menu',
					xtype: "tabpanel",
					items: [
{ title: "Surgery Site Parameters"},
{ title: "Operating Room Information"},
{ title: "Surgery Utilization Menu"},
{ title: "Person Field Restrictions Menu"},
{ title: "Update O.R. Schedule Devices"},
{ title: "Update Staff Surgeon Information"},
{ title: "Flag Drugs for Use as Anesthesia Agents"},
{ title: "Update Site Configurable Files"},
{ title: "Backfill Order File With Surgical Cases"},


						{ title: "Surgery Interface Management Menu"},
						{ title: "Make Reports Viewable in CPRS"}
					]
				},
				{	title   : 'CPT/ICD Coding Menu',
					xtype: "tabpanel",
					items: [
						{ title: "Edit Codes"}
					]
				},
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
