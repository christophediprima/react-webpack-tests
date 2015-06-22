'use strict';

var LayoutConstants = {
	default: {
		name: 'DefaultLayout',
		layoutTransitionName: 'from-left',
    pageTransitionName: 'from-left',
	},
	property: {
		name: 'DeadEndLayout',
		layoutTransitionName: 'from-right',
    pageTransitionName: 'from-left',
	}
};

module.exports = LayoutConstants;
