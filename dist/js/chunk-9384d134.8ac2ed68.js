(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9384d134"],{2429:function(t,e,i){"use strict";var a=i("8e2d"),s=i.n(a);s.a},4006:function(t,e,i){"use strict";var a=i("df06"),s=i.n(a);s.a},"7e55":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add"},[i("div",{staticClass:"header"},[i("span",{staticClass:"cancel",on:{click:t.goBack}},[t._v("取消")]),i("div",{staticClass:"date-select",on:{click:t.showDatePicker}},[t._v("\n      "+t._s(t.date[0]+"/"+t.date[1]+"/"+t.date[2])+"\n    ")]),i("span",{staticClass:"save",on:{click:t.saveDiary}},[t._v("保存")])]),i("div",{staticClass:"diary-content"},[i("div",{staticClass:"title"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTitle,expression:"inputTitle"}],attrs:{type:"text",maxlength:"16",placeholder:"Title"},domProps:{value:t.inputTitle},on:{input:function(e){e.target.composing||(t.inputTitle=e.target.value)}}})]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputContent,expression:"inputContent"}],staticClass:"main",attrs:{placeholder:"\n      记录一些有意思的事情，比如今天遇到一个笑话内容（下次说给女朋友听）、美味收获、电影观后感、或者对某个人的评价录一些有意思的有收获的事情，自己虚构的小说、自己想到一些有哲理的话、或者想看的书或者电影、也可以是一个亿的小目标，人生记录一些有意义的经验就好！记录一些生活的画面，\n      去年的今天前年的今天都能历历在目，你成长了，你的人生就不一样了！\n      开始你的第一篇日记吧\n      "},domProps:{value:t.inputContent},on:{input:[function(e){e.target.composing||(t.inputContent=e.target.value)},t.autosize]}})]),i("div",{staticClass:"option-bar"},[i("i",{staticClass:"iconfont",class:t.weather,on:{click:t.showPopup}}),i("i",{staticClass:"cubeic-select"})]),i("cube-popup",{ref:"weather",attrs:{type:"my-popup",position:"bottom",mask:!0,maskClosable:!0}},[i("div",{staticClass:"weather-icons"},[i("ul",t._l(t.weathers,function(e,a){return i("li",{key:a,on:{click:function(i){t.handleWeatherClick(e)}}},[i("i",{staticClass:"iconfont",class:e.icon}),i("span",[t._v(t._s(e.title))])])}),0)])])],1)},s=[],n=(i("a4ce"),{data:function(){return{weathers:[{icon:"icon-qingtian",title:"晴"},{icon:"icon-feng",title:"风"},{icon:"icon-yin",title:"阴"},{icon:"icon-xiaoyu",title:"小雨"},{icon:"icon-dayu",title:"大雨"},{icon:"icon-xue",title:"雪"},{icon:"icon-dian",title:"闪电"},{icon:"icon-wu",title:"雾"}],inputTitle:"",inputContent:"",weather:"icon-qingtian",date:""}},methods:{goBack:function(){this.$router.go(-1)},showPopup:function(){this.$refs.weather.show()},autosize:function(t){var e=t.target;e.style.height="auto",e.style.height=e.scrollHeight+"px"},showDatePicker:function(){this.datePicker||(this.datePicker=this.$createDatePicker({min:new Date(2018,7,8),max:new Date(2020,9,20),format:{year:"YYYY年",month:"MM月",date:"DD日"},value:new Date,onSelect:this.selectHandle})),this.datePicker.show()},selectHandle:function(t,e,i){this.$set(this.date,0,e[0]),this.$set(this.date,1,e[1]),this.$set(this.date,2,e[2])},handleWeatherClick:function(t){this.weather=t.icon,console.log("weather",this.weather),this.$refs.weather.hide()},isAllDataValid:function(){return this.inputTitle?this.inputContent?this.weather?!!this.date||(this.showToast("请选择日期"),!1):(this.showToast("请选择天气"),!1):(this.showToast("请输入日记内容"),!1):(this.showToast("请输入标题"),!1)},saveDiary:function(){var t=this,e=(Date.now(),this.isAllDataValid());if(e){console.log("get");var i=Date.now(),a=this.storage.load(),s=this.createDiary(i,this.inputTitle,this.inputContent,this.weather,this.date);a.push(s),this.storage.save(a),this.showToast("保存成功"),setTimeout(function(){t.$router.push({name:"home"})},500)}},getDateArr:function(t){var e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return[e,i,a]},createDiary:function(t,e,i,a,s){return{ts:t,title:e,content:i,weather:a,date:s}},initDate:function(){var t=this.store.get("addFrom");if("home"===t){var e=new Date;this.date=this.getDateArr(e)}else if(this.store.get("dateFromDate")){var i=this.store.get("dateFromDate"),a=new Date(i);this.date=this.getDateArr(a),console.log("date",this.date)}else{var s=new Date;this.date=this.getDateArr(s)}}},created:function(){console.log("this.addFrom",this.store.get("addFrom")),this.initDate()}}),o=n,c=(i("2429"),i("2877")),r=Object(c["a"])(o,a,s,!1,null,"d26d003c",null);e["default"]=r.exports},"8e2d":function(t,e,i){},a4ce:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"appheader"},[i("i",{staticClass:"cubeic-back",on:{click:t.goBack}}),i("span",[t._v(t._s(t.title))])])},s=[],n={name:"AppHeader",props:{title:String},methods:{goBack:function(){this.$router.go(-1)}}},o=n,c=(i("4006"),i("2877")),r=Object(c["a"])(o,a,s,!1,null,"6440450c",null);e["a"]=r.exports},df06:function(t,e,i){}}]);
//# sourceMappingURL=chunk-9384d134.8ac2ed68.js.map