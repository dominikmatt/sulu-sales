define([],function(){"use strict";return{initialize:function(){if(this.bindCustomEvents(),this.bindSidebarEvents(),this.account=null,this.accountType=null,this.accountTypes=null,"list"===this.options.display)this.renderList();else if("form"!==this.options.display)throw"display type wrong"},bindCustomEvents:function(){},bindSidebarEvents:function(){},del:function(){},save:function(){},renderList:function(){var a=this.sandbox.dom.createElement('<div id="accounts-list-container"/>');this.html(a),this.sandbox.start([{name:"accounts/components/list@sulucontact",options:{el:a,accountType:this.options.accountType?this.options.accountType:null}}])},renderForm:function(){},showDeleteConfirmation:function(a,b){0!==a.length&&(1===a.length?this.confirmSingleDeleteDialog(a[0],b):this.confirmMultipleDeleteDialog(a,b))},confirmSingleDeleteDialog:function(a,b){var c="/admin/api/accounts/"+a+"/deleteinfo";this.sandbox.util.ajax({headers:{"Content-Type":"application/json"},context:this,type:"GET",url:c,success:function(c){this.showConfirmSingleDeleteDialog(c,a,b)}.bind(this),error:function(a,b,c){this.sandbox.logger.error("error during get request: "+b,c)}.bind(this)})}}});