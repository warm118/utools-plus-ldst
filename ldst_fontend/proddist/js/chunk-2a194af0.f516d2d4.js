(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a194af0","chunk-2d20fe3b"],{5704:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",["staffVariation"==t.$route.name?e("mrc_ess_table",{attrs:{headers:t.headers,pageName:"addStaffVariation",paginationOptions:t.options,isLoading:t.loading,slotKey:["name","result_status","changeeffective"],hideAddBtn:!t.hasBtn("add-staff-movement"),items:t.desserts},on:{turnPage:t.getlist},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-card-title",{staticStyle:{height:"60px",position:"relative"}},[e("mrc_ess_searchInput",{staticStyle:{position:"absolute",right:"10px",top:"18px"},attrs:{isShow:!0}}),e("span",{staticStyle:{position:"absolute",right:"70px",top:"-50px"}},[e("mrc_ess_uploadBtn",{directives:[{name:"btnAuth",rawName:"v-btnAuth",value:["upload-staff-movement-template"],expression:"['upload-staff-movement-template']"}],staticStyle:{position:"absolute",left:"-100px"},attrs:{fn:t.fn,label:t.$t("label_Batch_Import"),uploadLoading:t.uploadLoading,resStatus:t.resStatus},on:{sendRequest:t.sendRequest,findError:t.findError}}),e("v-btn",{directives:[{name:"btnAuth",rawName:"v-btnAuth",value:["download-staff-movement-template"],expression:"['download-staff-movement-template']"}],staticClass:"ml-3",attrs:{rounded:"",color:"primary",dark:""},on:{click:function(n){t.dialog=!0}}},[t._v(t._s(t.$t("label_Download_the_template")))])],1)],1)]},proxy:!0},{key:"item.name",fn:function(t){var n=t.item;return[e("mrc_ess_staffSpan",{staticClass:"mt-3 mb-3",attrs:{list:n}})]}},{key:"item.changeeffective",fn:function(n){var a=n.item;return[e("span",[t._v(t._s(t._f("changeDate")(a.Change_effective)))])]}},{key:"item.result_status",fn:function(n){var a=n.item;return[""==a.result_status?e("v-btn",{attrs:{rounded:"",color:"#999999",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Unchanged")))]):t._e(),1==a.result_status?e("v-btn",{attrs:{rounded:"",color:"#13a671",dark:"","x-small":""}},[t._v(t._s(t.$t("label_Complete")))]):t._e(),2==a.result_status?e("v-btn",{attrs:{rounded:"",color:"#13a671",dark:"","x-small":""}},[t._v(t._s(t.$t("label_The_task_processing_is_complete")))]):t._e()]}},{key:"item.actions",fn:function(n){var a=n.item;return[e("menu-list",{attrs:{list:t.menulist},on:{handleClick:function(n){return t.handleClick(n,a)}},scopedSlots:t._u([{key:"showAction",fn:function(){return[e("v-icon",{directives:[{name:"btnAuth",rawName:"v-btnAuth",value:["view-staff-movement","edit-staff-movement","delete-staff-movement"],expression:"['view-staff-movement',\n                              'edit-staff-movement',\n                              'delete-staff-movement']"}]},[t._v("mdi-dots-vertical")])]},proxy:!0}],null,!0)})]}}],null,!1,1704155306)}):e("router-view"),e("mrc_ess_myDialog",{attrs:{title:t.$t("label_Upload_CVS"),width:"847",disabled:!1},model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[e("mrc_ess_myStep",{attrs:{list:t.stepList},scopedSlots:t._u([{key:"1",fn:function(){return[e("span",[t._v(" 文件 ")]),e("mrc_ess_brandupload",{attrs:{isShow:!1}}),e("mrc_ess_submitBtn",{attrs:{successText:t.$t("label_The_next_step")},on:{success:function(n){return t.changeIndex(2)},cancel:function(n){return t.changeIndex(0)}}})]},proxy:!0},{key:"2",fn:function(){return[e("mrc_ess_submitBtn",{attrs:{cancel:t.$t("label_The_previous_step")},on:{success:function(n){return t.changeIndex(3)},cancel:function(n){return t.changeIndex(1)}}})]},proxy:!0}]),model:{value:t.stepIndex,callback:function(n){t.stepIndex=n},expression:"stepIndex"}})],1)],1)},i=[],o=(e("b0c0"),e("4795"),e("96cf"),e("1da1")),s=e("b60a"),f={components:{},props:{},data:function(){return{fn:null,uploadLoading:null,resStatus:null,stepIndex:1,dialog:!1,disabled:!0,list:{},options:{pagesize:5,cpage:this.$store.state.cpage,totalCount:null,totalpage:null},loading:!1,desserts:[]}},beforeDestroy:function(){this.$store.commit("setCpage",1)},computed:{stepList:function(){return[{name:this.$t("label_Importing_files")},{name:this.$t("label_result")}]},menulist:function(){return[{name:this.$t("label_View"),show:this.hasBtn("view-staff-movement")},{name:this.$t("label_Edit"),show:this.hasBtn("edit-staff-movement")},{name:this.$t("label_delete"),show:this.hasBtn("delete-staff-movement")}]},headers:function(){return[{text:this.$t("label_Transfer_personnel"),align:"start",value:"name",sortable:!1},{text:this.$t("label_New_position"),value:"staff_post_uuid",sortable:!1},{text:this.$t("label_The_effective_date"),value:"changeeffective",sortable:!1},{text:this.$t("label_The_execution_status"),value:"result_status",sortable:!1},{text:"",value:"actions",sortable:!1,align:"end"}]}},created:function(){},watch:{$route:function(t){"staffVariation"==t.name&&this.getlist()}},mounted:function(){this.getlist()},methods:{findError:function(){this.fn=getStaffLeaveList},sendRequest:function(t){var n=this;this.uploadLoading=!0,setTimeout((function(){n.uploadLoading=!1,n.resStatus=!1}),2e3)},changeIndex:function(t){0==t?this.dialog=!1:3==t||(this.stepIndex=t)},getlist:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,1==this.desserts.length&&1!=this.options.cpage&&this.options.cpage--,n&&(n.cpage,n.pagesize,this.options=n),t.next=5,Object(s["getStaffVariationList"])({cpage:this.options.cpage,pagesize:this.options.pagesize});case 5:e=t.sent,200==e.code&&(this.desserts=e.data,this.options.totalCount=e.totalCount,this.options.totalpage=e.totalpage),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),addStaffLeave:function(){this.$store.commit("set_subPage_name",""),this.$store.commit("set_uuid",""),this.$store.commit("set_iconstatus",""),this.$router.push({name:"addStaffVariation"})},godetail:function(t){this.$store.commit("set_iconstatus",!0),this.$store.commit("set_uuid",t.uuid),this.$router.push({name:"detailStaffVariation"})},handleClick:function(t,n){var e=this,a=t.index;switch(a){case 0:this.godetail(n);break;case 1:this.$store.commit("set_iconstatus",!1),this.$store.commit("set_uuid",n.uuid),this.$router.push({name:"detailStaffVariation"});break;case 2:this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(t){Object(s["deleteStaffVariation"])({uuid:n.uuid}).then((function(t){"200"===t.code&&(e.$store.commit("newsTips",e.$t("message_The_deletion_was_successful")),(e.desserts.length=1)&&e.options.cpage--,e.getlist())}))}));break}},success:function(){},cancel:function(){}}},r=f,u=e("2877"),c=Object(u["a"])(r,a,i,!1,null,"813d8e84",null);n["default"]=c.exports},b60a:function(t,n,e){"use strict";e.r(n),e.d(n,"freezeStaff",(function(){return s})),e.d(n,"resetPassWord",(function(){return f})),e.d(n,"deleteStaff",(function(){return r})),e.d(n,"getStaffMsgList",(function(){return u})),e.d(n,"getStaffMsgDetail",(function(){return c})),e.d(n,"getStaffMsgUpdate",(function(){return l})),e.d(n,"getStaffPersonal",(function(){return d})),e.d(n,"getStaffPersonalUpdate",(function(){return h})),e.d(n,"getStaffJobDetail",(function(){return p})),e.d(n,"getStaffJobUpdate",(function(){return m})),e.d(n,"getStaffBank",(function(){return g})),e.d(n,"getStaffBankDetail",(function(){return _})),e.d(n,"getStaffBankUpdate",(function(){return b})),e.d(n,"getStaffTelList",(function(){return w})),e.d(n,"getStaffTelUpdate",(function(){return y})),e.d(n,"getStaffAddressUpdate",(function(){return S})),e.d(n,"getStaffLeaveList",(function(){return x})),e.d(n,"addStaffLeave",(function(){return $})),e.d(n,"updateStaffLeave",(function(){return k})),e.d(n,"deleteStaffLeave",(function(){return L})),e.d(n,"detailStaffLeave",(function(){return C})),e.d(n,"getHandoverList",(function(){return E})),e.d(n,"addHandover",(function(){return A})),e.d(n,"updateHandover",(function(){return V})),e.d(n,"deleteHandover",(function(){return B})),e.d(n,"detailHandover",(function(){return I})),e.d(n,"getStaffVariationList",(function(){return O})),e.d(n,"detailStaffVariation",(function(){return R})),e.d(n,"addStaffVariation",(function(){return U})),e.d(n,"updateStaffVariation",(function(){return D})),e.d(n,"deleteStaffVariation",(function(){return z})),e.d(n,"getStaffOfficialList",(function(){return N})),e.d(n,"detailStaffOfficial",(function(){return j})),e.d(n,"addStaffOfficial",(function(){return G})),e.d(n,"updateStaffOfficial",(function(){return J})),e.d(n,"deleteStaffOfficial",(function(){return q})),e.d(n,"getStaffCompanyGroupList",(function(){return W})),e.d(n,"addCompanyGroup",(function(){return K})),e.d(n,"detailCompanyGroup",(function(){return F})),e.d(n,"deleteCompanyGroup",(function(){return Q}));e("d3b7");var a=e("efc9"),i="mrbase_sys_staffs",o="mrbase_sys_staff_personal_info",s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-freezAccount/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_users",new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-resetPassWord/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-deleteStaff/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/list-staff/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staff/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/update-staff/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=o,new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staffPersonal/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=i,new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-personalAndAddress/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_employment_info",new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staffEmployment/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_employment_info",new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-employmentInfo/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},v="mrbase_sys_staff_bank_account",g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=v,new Promise((function(n,e){a["default"].post("/api/staff-manager/list-staffBank/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=v,new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staffBank/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staffs",new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-personalAndAddress/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_emergency_contact_info",new Promise((function(n,e){a["default"].post("/api/staff-manager/list-staffEmergencyContact/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staffs",new Promise((function(n,e){a["default"].post("/api/staff-manager/staff-Liaison/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]="mrbase_sys_staff_address",new Promise((function(n,e){a["default"].post("/api/staff-manager/find-staffAddress/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},P="mrbase_sys_change_dimission",x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/dimission/list-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/dimission/add-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/dimission/update-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/dimission/delete-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/dimission/find-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/handover/list-handover/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/dimission/add-dimission/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/handover/update-handover/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/handover/delete-handover/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=P,new Promise((function(n,e){a["default"].post("/api/handover/find-handover/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},T="mrbase_sys_staffs_change_cont",O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=T,new Promise((function(n,e){a["default"].post("/api/staffChange/list-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=T,new Promise((function(n,e){a["default"].post("/api/staffChange/find-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=T,new Promise((function(n,e){a["default"].post("/api/staffChange/add-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=T,new Promise((function(n,e){a["default"].post("/api/staffChange/update-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=T,new Promise((function(n,e){a["default"].post("/api/staffChange/delete-change/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},H="mrbase_sys_staff_regular_employee",N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=H,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/list-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=H,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/find-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=H,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/add-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=H,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/update-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=H,new Promise((function(n,e){a["default"].post("/api/staffRegularEmployee/delete-regularEmployee/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},M="mrbase_sys_group",W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=M,new Promise((function(n,e){a["default"].post("/api/select/list-company-group/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=M,new Promise((function(n,e){a["default"].post("/api/select/save-company-the-group/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=M,new Promise((function(n,e){a["default"].post("/api/select/get-company-group-info/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t["~table~"]=M,new Promise((function(n,e){a["default"].post("/api/select/delete-the-group/v1",t).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))}}}]);
//# sourceMappingURL=chunk-2a194af0.f516d2d4.js.map