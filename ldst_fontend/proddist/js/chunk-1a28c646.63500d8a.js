(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a28c646","chunk-2d0b2d16"],{"159a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["admin_account_manage"==t.$route.name?n("mrc_ess_table",{attrs:{headers:t.headers,hideAddBtn:!t.hasBtn("add-corporate-administrator"),pageName:"admin_account_add",paginationOptions:t.paginationOptions,slotKey:["org_level_name","status"],isLoading:t.loading,items:t.items},on:{turnPage:t.getList},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",sm:"4","offset-sm":"7"}},[n("mrc_ess_searchInput",{attrs:{"prepend-icon":"mdi-magnify"}})],1)],1)]},proxy:!0},{key:"item.org_level_name",fn:function(e){var a=e.item;return[n("div",{staticClass:"d-flex align-center",staticStyle:{"max-width":"500px","white-space":"nowrap",overflow:"hidden"}},[n("div",{staticStyle:{"max-width":"450px","white-space":"nowrap",overflow:"hidden"}},t._l(a.org_level_name,(function(e,i){return n("v-chip",{directives:[{name:"show",rawName:"v-show",value:a.org_level_name.length>0,expression:"item.org_level_name.length > 0"}],key:i,staticStyle:{"font-size":"12px",height:"28px"}},[t._v(t._s(e))])})),1)]),n("span",{directives:[{name:"show",rawName:"v-show",value:a.org_level_name.length<=0,expression:"item.org_level_name.length <= 0"}]})]}},{key:"item.status",fn:function(e){var a=e.item;return[n("span",{staticClass:"status",class:{is_used:!a.status}},[t._v(t._s(a.status?t.$t("label_Working"):t.$t("label_Frozen")))])]}},{key:"item.actions",fn:function(e){var a=e.item;return[n("menu-list",{attrs:{list:[{name:t.$t("label_View"),type:"view",show:t.hasBtn("view-corporate-administrator")},{name:t.$t("label_Edit"),type:"edit",show:t.hasBtn("edit-corporate-administrator")},{name:t.$t("label_To_reset_your_password"),type:"resetPassword",show:t.hasBtn("reset-corporate-administrator-password")},{name:t.$t("label_delete"),type:"del",show:t.hasBtn("delete-corporate-administrator")}]},on:{handleClick:function(e){return t.handleClick(e,a)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[n("v-icon",{directives:[{name:"btnAuth",rawName:"v-btnAuth",value:["view-corporate-administrator","edit-corporate-administrator","reset-corporate-administrator","delete-corporate-administrator"],expression:"['view-corporate-administrator','edit-corporate-administrator','reset-corporate-administrator','delete-corporate-administrator']"}]},[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,2148512783)}):n("router-view")],1)},i=[],r=(n("c975"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),o=n("2673"),s={components:{},props:{},data:function(){return{loading:!1,items:[],paginationOptions:{pagesize:this.$store.state.pageSize,cpage:this.$store.state.cpage,totalCount:0,totalpage:0}}},validations:{},computed:{headers:function(){return[{text:this.$t("label_The_login_name"),value:"user_account"},{text:this.$t("label_Associated_with_the_unit"),value:"org_level_name",width:"500px"},{text:this.$t("label_state"),value:"status"},{text:"actions",value:"actions"}]}},created:function(){},watch:{$route:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("admin_account_manage"!=e.name){t.next=4;break}return t.next=3,this.getList(this.paginationOptions);case 3:this.$store.commit("setTab",0);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getList(this.paginationOptions);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){this.$store.commit("setCpage",1)},methods:{handleClick:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var a,i,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.item,e.index,"view"==a.type&&(this.$store.commit("set_uuid",n.uuid),this.$store.commit("set_subPage_name",n.user_account),this.$store.commit("set_iconstatus",!0),this.$router.push({name:"admin_account_detail",params:{uuid:n.uuid,name:n.user_account}})),"edit"==a.type&&(this.$store.commit("set_uuid",n.uuid),this.$store.commit("set_subPage_name",n.user_account),this.$store.commit("set_iconstatus",!1),this.$router.push({name:"admin_account_detail",params:{uuid:n.uuid,name:n.user_account}})),"del"==a.type&&this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then(Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["admin_account_del"])({uuid:n.uuid});case 2:if(e=t.sent,200!=e.code){t.next=8;break}return s.$Message({text:s.$t("message_The_deletion_was_successful")}),s.paginationOptions.cpage>1&&1==s.items.length&&s.paginationOptions.cpage--,t.next=8,s.getList(s.paginationOptions);case 8:case"end":return t.stop()}}),t,this)}))))["catch"]((function(t){})),"resetPassword"!=a.type){t.next=12;break}return t.next=7,mrc_admin_reset({uuid:n.uuid});case 7:if(i=t.sent,200!=i.code){t.next=12;break}return this.$Message({text:this.$t("message_The_operation_was_successful")}),t.next=12,this.getList(this.paginationOptions);case 12:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,n=e.cpage,a=e.pagesize,this.paginationOptions=e,t.next=5,Object(o["admin_account_list"])({cpage:n,pagesize:a,org_level_uuid:this.$store.state.currentCompany});case 5:i=t.sent,(i.code=200)&&(this.items=i.data.map((function(t){return t.org_level_name?t.org_level_name=t.org_level_name.indexOf(",")>-1?t.org_level_name.split(","):[t.org_level_name]:t.org_level_name=[],t})),this.paginationOptions.totalCount=i.totalCount,this.paginationOptions.totalpage=i.totalpage),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},u=s,c=n("2877"),l=Object(c["a"])(u,a,i,!1,null,"5373e78b",null);e["default"]=l.exports},2673:function(t,e,n){"use strict";n.r(e),n.d(e,"admin_account_list",(function(){return r})),n.d(e,"admin_account_add",(function(){return o})),n.d(e,"admin_account_update",(function(){return s})),n.d(e,"admin_account_reset",(function(){return u})),n.d(e,"admin_account_disable",(function(){return c})),n.d(e,"admin_account_info",(function(){return l})),n.d(e,"admin_account_del",(function(){return d})),n.d(e,"func_list",(function(){return m})),n.d(e,"takeout_customer",(function(){return p}));n("d3b7");var a=n("efc9"),i="mrbase_sys_users",r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/management/list-user/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/management/add-user/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/management/update-user/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/management/update-reset-password/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/management/update-disable-account/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/management/find-user/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(e,n){a["default"].post("/api/management/delete-user/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_role",new Promise((function(e,n){a["default"].post("/api/role/list-function_role-clients/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staffs",new Promise((function(e,n){a["default"].post("/api/management/find-staff-user/v1",t).then((function(t){e(t)}))["catch"]((function(t){n(t)}))}))}}}]);
//# sourceMappingURL=chunk-1a28c646.63500d8a.js.map