var data = {
  list: [{
      name: "首页",
      url: "./index.html",
  }, {
      name: "博客",
      url: "http://taoquns.com"
  }, {
      name: "微博",
      url: "http://weibo.com/1654438844/profile?topnav=1&wvr=6"
  }, {
      name: "简书",
      url: "http://www.jianshu.com/users/633b8f612f8e/latest_articles"
  }, {
      name: "作品展示",
      url: "http://taoquns.com/mypage"
  }],
}

var header = Vue.extend({
  template:  '<div class="header">\
                        <div class="header-main">\
                            <ul>\
                                <li v-for="i in list">\
                                    <a v-bind:href="i.url">\
                                        {{i.name}}\
                                    </a>\
                                </li>\
                            </ul>\
                        </div>\
                    </div>',
    data: function() {
       return {
         list: [{
             name: "首页",
             url: "./index.html",
         }, {
             name: "博客",
             url: "http://taoquns.com"
         }, {
             name: "微博",
             url: "http://weibo.com/1654438844/profile?topnav=1&wvr=6"
         }, {
             name: "简书",
             url: "http://www.jianshu.com/users/633b8f612f8e/latest_articles"
         }, {
             name: "作品展示",
             url: "http://taoquns.com/mypage"
         }],
       }
    },
    props: {
      
    }
    methods: {
      show: function () {

      }
    }
})

Vue.component('tq-header', header)

new Vue({
  el: '#header'
})

// header.$mount($header);
