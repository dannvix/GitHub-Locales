var GitHubLocales = function(locale) {
  var locales = {
    "zh-TW": {
      /* global */
      ".*github.com.*": [
        /* top nav-bar */
        ["ul.top-nav > li.explore > a", "", "探索"], /* Explorer */
        ["ul.top-nav > li.features > a", "", "功能"], /* Features */
        ["ul.top-nav > li.enterprise > a", "", "企業用戶"], /* Enterprise */
        ["ul.top-nav > li.blog > a", "", "官方部落格"], /* Blog */
        ["ul.top-nav > li > a[href*=blog]", "", "部落格"], /* Blog */
        ["ul.top-nav > li > a[href*=help]", "", "說明"], /* Help */

        /* top search form */
        ["#top_search_form span.js-select-button", "", "目前專案"], /* This repository */
        ["#top_search_form input[type=radio].js-search-this-repository + div.js-select-button-text", "", "目前專案"], /* This repository */
        ["#top_search_form input[type=radio][value=global] + div.js-select-button-text", "", "所有專案"], /* All repository */
        ["div.command-bar input#js-command-bar-field", "placeholder", "輸入搜尋關鍵字或指令"], /* Search or type a command */
        ["div.command-bar span.help", "original-title", "顯示指令說明文件"], /* Show command bar help */

        /* along-logo notification indicator */
        ["div.header a[href*=notifications]", "original-title", "您有未讀的通知"], /* You have unread notifications */

        /* user links (login required) */
        ["ul#user-links a#new_repo", "original-title", "新建專案"], /* Create a new repo */
        ["ul#user-links a#account_settings", "original-title", "帳號設定"], /* Account settings */
        ["ul#user-links a#logout", "original-title", "登出"], /* Sign out */

        /* header actions (guest session) */
        ["div.header-actions > a[href*=signup]", "", "註冊"], /* Sign up */
        ["div.header-actions > a[href*=login]", "", "登入"], /* Sign in */

        /* navigation menubar */
        ["ul.dashboard-tabs > li > a[href='/']", "", "動態消息"], /* News Feed */
        ["ul.dashboard-tabs > li > a[href*=pulls]", "", "收用請求"], /* Pull Requests */
        ["ul.dashboard-tabs > li > a[href*=issues]", "", "議題列表"], /* Issues */
        ["ul.dashboard-tabs > li > a[href*=stars]", "", "收藏列表"], /* Stars */

        /* repository title bar */
        ["h1.entry-title.public > span.repo-label > span", "", "公開專案"], /* Public */
        ["h1.entry-title span.fork-flag > span.text", "func", function(el){el.html("分支自 " + $("h1.entry-title span.fork-flag > span.text > a")[0].outerHTML)}], /* Forked from {repo_name} */
        ["ul.pagehead-actions span.octicon-eye-watch", "func", function(el){el.parent().html($("ul.pagehead-actions span.octicon-eye-watch")[0].outerHTML + " 關注")}], /* Watch */
        ["ul.pagehead-actions span.octicon-eye-unwatch", "func", function(el){el.parent().html($("ul.pagehead-actions span.octicon-eye-unwatch")[0].outerHTML + " 取消關注")}], /* Unwatch */
        ["ul.pagehead-actions span.octicon-star + span.text", "", "收藏"], /* Star */
        ["ul.pagehead-actions span.octicon-git-branch-create + span.text", "", "建立分支"], /* Fork */
      ],
      
      /* dashboard page */
      "^http[s]?:\/\/github.com[\/]+$": [
        /* right sidebar */
        ["div.dashboard-sidebar h3.box-title:first", "", "您參與的專案"], /* Repositories you contribute to */
        ["div.dashboard-sidebar h3.box-title:last", "func", function(el){el.html("您的專案 " + $("div.dashboard-sidebar h3.box-title:last span.box-title-count")[0].outerHTML)}], /* Your repositories */
        ["div.dashboard-sidebar div.box-header a[href*=new]", "func", function(el){el.html($("div.dashboard-sidebar div.box-header a[href*=new] > span")[0].outerHTML + " 新建專案")}], /* New repository */
      ],
      
      /* issues dashboard */
      "http[s]?:\/\/github.com\/dashboard\/issues": [
        /* left sidebar */
        ["div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues']:first", "func", function(el){el.html($("div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues']:first span")[0].outerHTML + " 在您的專案中")}], /* In your repositories */
        ["div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues/assigned']:first", "func", function(el){el.html($("div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues/assigned']:first span")[0].outerHTML + " 指派給您的")}], /* Assigned to you */
        ["div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues/created_by']:first", "func", function(el){el.html($("div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues/created_by']:first span")[0].outerHTML + " 您所建立的")}], /* Created by you */

        /* filter options */
        ["div.issues-list-options a.minibutton[href*=open]", "", "進行中"], /* Open */
        ["div.issues-list-options a.minibutton[href*=closed]", "", "已結案"], /* Closed */
      ],

      /* repository dashboard page, e.g. https://github.com/dannvix/GitHub-Locales */
      "^http[s]?:\/\/github.com\/[^\/]+\/[^\/]+[\/]?$": [
        /* repository meta */
        ["div.repository-meta > span.edit-link > a", "", "編輯"], /* Edit */
        ["div.overall-summary ul.numbers-summary > li.commits > a", "func", function(el){el.html($("div.overall-summary ul.numbers-summary > li.commits > a span.num")[0].outerHTML + " 次提交")}], /* {commits_count} Commits */
        ["div.overall-summary ul.numbers-summary > li > a[href*=branches]", "func", function(el){el.html($("div.overall-summary ul.numbers-summary > li > a[href*=branches] span.num")[0].outerHTML + " 個分支")}], /* {branches_count} Branches */
        ["div.overall-summary ul.numbers-summary > li > a[href*=releases]", "func", function(el){el.html($("div.overall-summary ul.numbers-summary > li > a[href*=releases] span.num")[0].outerHTML + " 個發佈")}], /* {releases_count} Releases */
        ["div.overall-summary ul.numbers-summary > li > a[href*=contributors]", "func", function(el){el.html($("div.overall-summary ul.numbers-summary > li > a[href*=contributors] span.num")[0].outerHTML + " 位貢獻者")}], /* {contributors_count} Contributors */
        ["div.repo-container a.repository-lang-stats-graph", "original-title", "顯示程式語言統計"], /* Show language statistics */

        /* repository sidebar menu */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title=Code] span.full-word", "", "程式碼"], /* Code */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title=Issues] span.full-word", "" ,"議題"], /* Issues */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Pull Requests'] span.full-word", "", "收用請求"], /* Pull Request */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Pulse'] span.full-word", "", "專案脈動"], /* Pulse */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Graphs'] span.full-word", "", "統計圖表"], /* Graphs */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Network'] span.full-word", "","分支網路"], /* Network */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Settings'] span.full-word", "","專案設定"], /* Settings */
        ["div.repository-sidebar div.only-with-full-nav a[href*=zip]", "func", function(el){el.html($("div.repository-sidebar div.only-with-full-nav a[href*=zip] > span")[0].outerHTML + " 打包下載 ZIP 檔")}], /* Download ZIP */
      ],

      /* repository issues, e.g. https://github.com/dannvix/GitHub-Locales/issues */
      "http[s]?:\/\/github.com\/[^\/]+\/[^\/]+\/issues": [
        /* tab navigation */
        ["div#issues_next > div.tabnav a[href$=issues]", "", "議題一覽"], /* Browse Issues */
        ["div#issues_next > div.tabnav a[href$=milestones]", "", "里程碑"], /* Milestones */
        ["div#issues_next div.tabnav a[href*=new]", "", "新建議題"], /* New Issue */

        /* left sidebar */
        ["div#issues_next ul.filter-list a[href*=issues]:first", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*=issues]:first span.count")[0].outerHTML + " 所有議題")}], /* Everyone's Issues */
        ["div#issues_next ul.filter-list a[href*='issues/milestones'][href*=open]", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*='issues/milestones'][href*=open] span.count")[0].outerHTML + " 進行中的里程碑")}], /* Open Issues */
        ["div#issues_next ul.filter-list a[href*='issues/milestones'][href*=closed]", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*='issues/milestones'][href*=closed] span.count")[0].outerHTML + " 已達成的里程碑")}], /* Closed Issues */
        ["div#issues_next ul.filter-list a[href*=assigned]:first", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*=assigned]:first span.count")[0].outerHTML + " 指派給您的")}], /* Assigned to you */
        ["div#issues_next ul.filter-list a[href*=created_by]:first", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*=created_by]:first span.count")[0].outerHTML + " 您所建立的")}], /* Created by you */
        ["div#issues_next ul.filter-list a[href*=mentioned]:first", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*=mentioned]:first span.count")[0].outerHTML + " 提及您的")}], /* Mentioned you */
      ]
    }
  };

  $.each(locales[locale], function(scope, rules) {
    if (window.location.href.match(new RegExp(scope))) {
      $.each(rules, function(idx, rule) {
        var el = $(rule[0]);
        if (el.length) {
          switch(rule[1]) {
          /* text replacement */
          case "":
            el.text(rule[2]);
            break;
          /* function execution */
          case "func":
            rule[2](el);
            break;
          /* attribute replacement */
          default:
            el.attr(rule[1], rule[2]);
          }
        }
      });
    }
  });
};


var registerObserver = function(callback) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  var mutationObserverConfig = {
    target: document.getElementsByTagName("body")[0],
    config: {
      attributes: true,
      childList: true,
      characterData: true
    }
  };
  var mutationObserver = new MutationObserver(function(mutations) {
    callback();
  });
  mutationObserver.observe(mutationObserverConfig.target, mutationObserverConfig.config);
};


var appendFooter = function() {
  $("div.site-footer").append('<div style="clear: both; text-align: center; margin-top: 50px;">非官方正體中文翻譯由 <a href="https://github.com/dannvix/GitHub-Locales">GitHub-Locales 專案</a> 提供</div>');
};


var main = function() {
  appendFooter();

  GitHubLocales("zh-TW");
  registerObserver(function(){GitHubLocales("zh-TW");});
};
main();
