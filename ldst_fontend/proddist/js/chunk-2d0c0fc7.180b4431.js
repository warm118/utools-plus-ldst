(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0fc7"],{"43b4":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mrc_ess_iconGroup",{attrs:{is_disabled:t.readonly,showReturn:!1,showEdit:t.hasBtn("edit-staff-termination"),show_del:t.hasBtn("delete-staff-termination")},on:{handleEdit:t.handleEdit,handleDel:t.handleDel}}),n("staffLeave",{attrs:{disabled:t.readonly}})],1)},a=[],o=n("b60a"),i=n("c945"),d={components:{staffLeave:i["default"]},props:{},data:function(){return{readonly:!1,list:{}}},computed:{},created:function(){},watch:{},mounted:function(){this.readonly=this.$store.state.iconstatus,this.$route.meta.title=this.$store.getters.subPage_name},beforeDestroy:function(){},methods:{handleEdit:function(){this.readonly=!this.readonly,this.$store.commit("set_iconstatus",this.readonly)},handleDel:function(){var t=this;this.$myConfirm({content:this.$t("message_Confirm_the_deletion")}).then((function(e){Object(o["deleteStaffLeave"])({uuid:t.$store.state.uuid}).then((function(e){"200"===e.code&&(t.$store.commit("newsTips",t.$t("message_The_deletion_was_successful")),t.$router.push({name:"staffLeave"}))}))}))}}},r=d,c=n("2877"),u=Object(c["a"])(r,s,a,!1,null,"cbcc9518",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c0fc7.180b4431.js.map