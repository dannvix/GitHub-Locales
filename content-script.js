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
        ["h1.entry-title span.fork-flag > span.text", "func", function(el){el.html("分支自 " + el.find("a")[0].outerHTML)}], /* Forked from {repo_name} */
        ["ul.pagehead-actions span.octicon-eye-watch", "func", function(el){el.parent().html(el[0].outerHTML + " 關注")}], /* Watch */
        ["ul.pagehead-actions span.octicon-eye-unwatch", "func", function(el){el.parent().html(el[0].outerHTML + " 取消關注")}], /* Unwatch */
        ["ul.pagehead-actions form.js-social-container span.select-menu-title", "", "通知選項"], /* Notification status */
        ["ul.pagehead-actions form.js-social-container input[value*=included] + h4", "", "沒有關注"], /* Not watching */
        ["ul.pagehead-actions form.js-social-container input[value*=included] ~ span.description", "", "當您參與討論或被提及時才會收到通知。"], /* You only receive notifications for discussions in which you participate or are @mentioned. */
        ["ul.pagehead-actions form.js-social-container input[value*=subscribed] + h4", "", "關注中"], /* Watching */
        ["ul.pagehead-actions form.js-social-container input[value*=subscribed] ~ span.description", "", "您會收到這個專案所有討論的通知。"], /* You receive notifications for all discussions in this repository. */
        ["ul.pagehead-actions form.js-social-container input[value*=ignore] + h4", "", "完全忽略"], /* Ignoring */
        ["ul.pagehead-actions span.octicon-star + span.text", "", "收藏"], /* Star */
        ["ul.pagehead-actions form.js-social-container input[value*=ignore] ~ span.description", "", "您將不會收到這個專案的任何通知。"], /* You do not receive any notifications for discussions in this repository. */
        ["ul.pagehead-actions span.octicon-git-branch-create + span.text", "", "建立分支"], /* Fork */

      ],
      
      /* dashboard page */
      "^http[s]?:\/\/github.com[\/]+$": [
        /* right sidebar */
        ["div.dashboard-sidebar h3.box-title:first", "", "您參與的專案"], /* Repositories you contribute to */
        ["div.dashboard-sidebar h3.box-title:last", "func", function(el){el.html("您的專案 " + el.find("span.box-title-count")[0].outerHTML)}], /* Your repositories */
        ["div.dashboard-sidebar div.box-header a[href*=new]", "func", function(el){el.html(el.find(" > span")[0].outerHTML + " 新建專案")}], /* New repository */
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
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title=Pulse] span.full-word", "", "專案脈動"], /* Pulse */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title=Graphs] span.full-word", "", "統計圖表"], /* Graphs */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title=Network] span.full-word", "","分支網路"], /* Network */
        ["div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title=Settings] span.full-word", "","專案設定"], /* Settings */
        ["div.repository-sidebar div.only-with-full-nav a[href*=zip]", "func", function(el){el.html($("div.repository-sidebar div.only-with-full-nav a[href*=zip] > span")[0].outerHTML + " 打包下載 ZIP 檔")}], /* Download ZIP */

        /* repository file viewer */
        ["div.repo-container div.file-navigation span.octicon-git-branch + i", "", "目前分支："], /* Branch: */
        ["div.repo-container div.file-navigation > div.breadcrumb form", "original-title", "在此新建檔案"] /* Create a new file here */
      ],

      /* respository subordinate pages, e.g. issues, pulse… */
      "http[s]?:\/\/github.com\/[^\/]+\/[^\/]+/[^\/]+": [
        /* right sidebar icon navigations */
        ["div.repo-nav ul.repo-menu li:has(a[aria-label=Code])", "original-title", "程式碼"], /* Code */
        ["div.repo-nav ul.repo-menu li:has(a[aria-label=Issues])", "original-title", "議題"], /* Issues */
        ["div.repo-nav ul.repo-menu li:has(a[aria-label='Pull Requests'])", "original-title", "收用請求"], /* Pull Requests */
        ["div.repo-nav ul.repo-menu li:has(a[aria-label=Pulse])", "original-title", "專案脈動"], /* Pulse */
        ["div.repo-nav ul.repo-menu li:has(a[aria-label=Graphs])", "original-title", "統計圖表"], /* Graphs */
        ["div.repo-nav ul.repo-menu li:has(a[aria-label=Network])", "original-title", "分支網路"], /* Network */
        ["div.repo-nav ul.repo-menu li:has(a[aria-label=Settings])", "original-title", "專案設定"], /* Settings */
      ],

      /* repository issues overview, e.g. https://github.com/dannvix/GitHub-Locales/issues */
      "http[s]?:\/\/github.com\/[^\/]+\/[^\/]+\/issues": [
        /* tab navigation */
        ["div#issues_next > div.tabnav a[href$=issues]", "", "議題總覽"], /* Browse Issues */
        ["div#issues_next > div.tabnav a[href$=milestones]", "", "里程碑"], /* Milestones */
        ["div#issues_next div.tabnav a[href*=new]", "", "新建議題"], /* New Issue */

        /* left sidebar */
        ["div#issues_next ul.filter-list a[href*=issues]:first", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*=issues]:first span.count")[0].outerHTML + " 所有議題")}], /* Everyone's Issues */
        ["div#issues_next ul.filter-list a[href*='issues/milestones'][href*=open]", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*='issues/milestones'][href*=open] span.count")[0].outerHTML + " 進行中的里程碑")}], /* Open Issues */
        ["div#issues_next ul.filter-list a[href*='issues/milestones'][href*=closed]", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*='issues/milestones'][href*=closed] span.count")[0].outerHTML + " 已達成的里程碑")}], /* Closed Issues */
        ["div#issues_next ul.filter-list a[href*=assigned]:first", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*=assigned]:first span.count")[0].outerHTML + " 指派給您的")}], /* Assigned to you */
        ["div#issues_next ul.filter-list a[href*=created_by]:first", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*=created_by]:first span.count")[0].outerHTML + " 您所建立的")}], /* Created by you */
        ["div#issues_next ul.filter-list a[href*=mentioned]:first", "func", function(el){el.html($("div#issues_next ul.filter-list a[href*=mentioned]:first span.count")[0].outerHTML + " 提及您的")}], /* Mentioned you */

        /* list options */
        ["div#issues_next div.issues-list-options a[href*=open]:first", "func", function(el){el.text(parseInt(el.text()) + " 進行中")}], /* {open_count} Open */
        ["div#issues_next div.issues-list-options a[href*=closed]:first", "func", function(el){el.text(parseInt(el.text()) + " 已結案")}], /* {closed_count} Closed */

        /* issue labels */
        ["span[data-name=bug]", "", "缺失"], /* bug */
        ["span[data-name=enhancement]", "", "改進"], /* enhancement */
        ["span[data-name=duplicate]", "", "重覆回報"], /* duplicate */
        ["span[data-name=invalid]", "", "無效"], /* invalid */
        ["span[data-name=question]", "", "釋疑"], /* question */
        ["span[data-name=wontfix]", "", "不會處理"], /* wontfix */

        /* filter lists */
        ["div#issues_next ul.filter-list a[data-label=bug] span.name", "", "缺失"], /* bug */
        ["div#issues_next ul.filter-list a[data-label=enhancement] span.name", "", "改進"], /* enhancement */
        ["div#issues_next ul.filter-list a[data-label=duplicate] span.name", "", "重覆回報"], /* duplicate */
        ["div#issues_next ul.filter-list a[data-label=invalid] span.name", "", "無效"], /* invalid */
        ["div#issues_next ul.filter-list a[data-label=question] span.name", "", "釋疑"], /* question */
        ["div#issues_next ul.filter-list a[data-label=wontfix] span.name", "", "不會處理"], /* wontfix */
        ["div#issues_next div.js-editable-labels-container > a", "", "管理標籤"], /* Manage Labels */
        ["div#issues_next div.js-editable-labels-container > div > h4.new-label-form-title", "", "新建標籤"], /* New label */
        ["div#issues_next div.js-editable-labels-container > div > form > input[type=text]", "placeholder", "新標籤名稱"], /* New label name */

        /* issues meta */
        ["div#issues_next ul.issue-list-group ul.list-group-item-meta li:first-child", "func", function(el){el.find("time").text(moment(el.find("time").attr("datetime")).fromNow()); el.html(el.find("time")[0].outerHTML + "由 " + el.find("a")[0].outerHTML + " 建立")}], /* Open by {user_id} {relative_time} ago */
        ["div#issues_next ul.issue-list-group ul.list-group-item-meta li > span.octicon-comment-discussion + a", "func", function(el){el.text(parseInt(el.text()) + " 則討論")}], /* {comment_count} Comments */
      ],

      /* new issue, e.g. https://github.com/dannvix/GitHub-Locales/issues/new */
      "http[s]?:\/\/github.com\/[^\/]+\/[^\/]+\/issues\/new[\/]?": [
        /* new issue button */
        ["div#issues_next div.tabnav div.tabnav-right a", "", "新建議題"], /* New Issues */

        /* form */
        ["div#issues_next > form#new_issue input#issue_title", "placeholder", "標題"], /* Title */
        ["div#issues_next div.assignee > span.text:has(a)", "func", function(el){el.html("將指派給 " + el.find("a")[0].outerHTML)}], /* {user_id} will be assigned */
        ["div#issues_next div.assignee > span.text:not(:has(a))", "", "目前沒有人被指派"], /* No one will be assigned */
        ["div#issues_next form#new_issue div.assignee span.select-menu-title", "", "指派某人負責這個議題"], /* Assign someone to this issue */
        ["div#issues_next form#new_issue div.assignee div.select-menu-text-filter input#assignee-filter-field", "placeholder", "搜尋使用者"], /* Filter people */
        ["div#issues_next form#new_issue div.assignee div.js-clear-assignee > div.select-menu-item-text", "", "取消指派"], /* Clear assignee */
        ["div#issues_next form#new_issue div.comment-form-head a.write-tab", "", "撰寫內文"], /* Write */
        ["div#issues_next form#new_issue div.comment-form-head a.preview-tab", "", "預覽議題"], /* Preview */
        ["div#issues_next form#new_issue div.comment-form-head span.tabnav-right > span.text", "func", function(el){el.html("內文格式遵循 " + el.find("a")[0].outerHTML + " 語法")}], /* Comments are parsed with GitHub Flavored Markdown */
        ["div#issues_next form#new_issue div.write-content textarea", "placeholder", "請輸入內文"], /* Leave a commnet */
        ["div#issues_next form#new_issue div.write-content p.drag-and-drop span.default", "func", function(el){el.find("a").text("選擇檔案"); el.html("您可以透過拖曳、" + el.find("input")[0].outerHTML + el.find("a")[0].outerHTML + "、或從剪貼簿貼上來插入圖片。")}], /* Attach images by dragging & dropping,  selecting them, or pasting from the clipboard. */
        ["div#issues_next form#new_issue div.form-actions > button", "", "提交此議題"], /* Submit new issue */

        /* right sidebar (labels) */
        ["div#issues_next form#new_issue div.sidebar > h3", "","加入標籤"], /* Add Labels */
        ["div#issues_next form#new_issue div.sidebar > ul.filter-list li[data-name=bug] span.name", "", "缺失"], /* bug */
        ["div#issues_next form#new_issue div.sidebar > ul.filter-list li[data-name=duplicate] span.name", "", "重覆回報"], /* duplicate */
        ["div#issues_next form#new_issue div.sidebar > ul.filter-list li[data-name=enhancement] span.name", "", "改進"], /* enhancement */
        ["div#issues_next form#new_issue div.sidebar > ul.filter-list li[data-name=invalid] span.name", "", "無效"], /* invalid */
        ["div#issues_next form#new_issue div.sidebar > ul.filter-list li[data-name=question] span.name", "", "釋疑"], /* question */
        ["div#issues_next form#new_issue div.sidebar > ul.filter-list li[data-name=wontfix] span.name", "", "不會處理"], /* wontfix */
      ],
    }
  };

  /* set Moment.js locale */
  moment.lang(locale.toLowerCase());

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
            $.each(el, function(idx, element) {
              rule[2]($(element));
            });
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


var appendFooter = function(locale) {
  var locales = {
    "zh-TW": '非官方正體中文翻譯由 <a href="https://github.com/dannvix/GitHub-Locales">GitHub-Locales 專案</a> 提供',
  };
  $("div.site-footer").append('<div style="clear: both; text-align: center; margin-top: 50px;">' + locales[locale] + '</div>');
};


var main = function() {
  appendFooter("zh-TW");
  GitHubLocales("zh-TW");
  registerObserver(function(){GitHubLocales("zh-TW");});
};
main();
