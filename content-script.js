var GitHubLocales = function(locale) {
  var locales = {
    "zh-TW": function() {
      /* top nav-bar */
      $("ul.top-nav > li.explore > a").text("探索"); /* Explorer */
      $("ul.top-nav > li.features > a").text("功能"); /* Features */
      $("ul.top-nav > li.enterprise > a").text("企業用戶"); /* Enterprise */
      $("ul.top-nav > li.blog > a").text("官方部落格"); /* Blog */
      $("ul.top-nav > li > a[href*=blog]").text("部落格"); /* Blog */
      $("ul.top-nav > li > a[href*=help]").text("說明"); /* Help */

      /* top search form */
      $("#top_search_form span.js-select-button").text("目前專案"); /* This repository */
      $("#top_search_form input[type=radio].js-search-this-repository + div.js-select-button-text").text("目前專案"); /* This repository */
      $("#top_search_form input[type=radio][value=global] + div.js-select-button-text").text("所有專案"); /* All repository */
      $("div.command-bar input#js-command-bar-field").attr("placeholder", "輸入搜尋關鍵字或指令"); /* Search or type a command */
      $("div.command-bar span.help").attr("original-title", "顯示指令說明文件"); /* Show command bar help */

      /* along-logo notification indicator */
      $("div.header a[href*=notifications]").attr("original-title", "您有未讀的通知"); /* You have unread notifications */

      /* user links (login required) */
      $("ul#user-links a#new_repo").attr("original-title", "新建專案"); /* Create a new repo */
      $("ul#user-links a#account_settings").attr("original-title", "帳號設定"); /* Account settings */
      $("ul#user-links a#logout").attr("original-title", "登出"); /* Sign out */

      /* header actions (guest session) */
      $("div.header-actions > a[href*=signup]").text("註冊"); /* Sign up */
      $("div.header-actions > a[href*=login]").text("登入"); /* Sign in */

      /* navigation menubar */
      $("ul.dashboard-tabs > li > a[href='/']").text("動態消息"); /* News Feed */
      $("ul.dashboard-tabs > li > a[href*=pulls]").text("收用請求"); /* Pull Requests */
      $("ul.dashboard-tabs > li > a[href*=issues]").text("議題列表"); /* Issues */
      $("ul.dashboard-tabs > li > a[href*=stars]").text("收藏列表"); /* Stars */

      /* repository title bar */
      $("h1.entry-title.public > span.repo-label > span").text("公開專案"); /* Public */
      $("h1.entry-title span.fork-flag > span.text").html("分支自 " + $("h1.entry-title span.fork-flag > span.text > a")[0].outerHTML); /* Forked from {repo_name} */
      $("ul.pagehead-actions span.octicon-eye-watch").parent().html($("ul.pagehead-actions span.octicon-eye-watch")[0].outerHTML + " 關注"); /* Watch */
      $("ul.pagehead-actions span.octicon-eye-unwatch").parent().html($("ul.pagehead-actions span.octicon-eye-unwatch")[0].outerHTML + " 取消關注"); /* Unwatch */
      $("ul.pagehead-actions span.octicon-star + span.text").text("收藏"); /* Star */
      $("ul.pagehead-actions span.octicon-git-branch-create + span.text").text("建立分支"); /* Fork */

      /* dashboard page */
      if (window.location.href.match(/^http[s]?:\/\/github.com[\/]+$/) && $("body.logged_in").length) {
        /* right sidebar */
        $("div.dashboard-sidebar h3.box-title:first").text("您參與的專案"); /* Repositories you contribute to */
        $("div.dashboard-sidebar h3.box-title:last").html("您的專案 " + $("div.dashboard-sidebar h3.box-title:last span.box-title-count")[0].outerHTML); /* Your repositories */
        $("div.dashboard-sidebar div.box-header a[href*=new]").html($("div.dashboard-sidebar div.box-header a[href*=new] > span")[0].outerHTML + " 新建專案"); /* New repository */
      }

      /* issues dashboard */
      if (window.location.href.match(/http[s]?:\/\/github.com\/dashboard\/issues/)) {
        /* left sidebar */
        $("div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues']:first").html($("div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues']:first span")[0].outerHTML + " 在您的專案中"); /* In your repositories */
        $("div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues/assigned']:first").html($("div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues/assigned']:first span")[0].outerHTML + " 指派給您的"); /* Assigned to you */
        $("div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues/created_by']:first").html($("div#issues-dashboard div.sidebar ul.filter-list a[href*='/dashboard/issues/created_by']:first span")[0].outerHTML + " 您所建立的"); /* Created by you */

        /* filter options */
        $("div.issues-list-options a.minibutton[href*=open]").text("未結案"); /* Open */
        $("div.issues-list-options a.minibutton[href*=closed]").text("已結案"); /* Closed */
      }

      /* repository dashboard page, e.g. https://github.com/dannvix/GitHub-Locales */
      if (window.location.href.match(/^http[s]?:\/\/github.com\/[^\/]+\/[^\/]+[\/]?$/)) {
        /* repository meta */
        $("div.repository-meta > span.edit-link > a").text("編輯"); /* Edit */
        $("div.overall-summary ul.numbers-summary > li.commits > a").html($("div.overall-summary ul.numbers-summary > li.commits > a span.num")[0].outerHTML + " 次提交"); /* {commits_count} Commits */
        $("div.overall-summary ul.numbers-summary > li > a[href*=branches]").html($("div.overall-summary ul.numbers-summary > li > a[href*=branches] span.num")[0].outerHTML + " 個分支"); /* {branches_count} Branches */
        $("div.overall-summary ul.numbers-summary > li > a[href*=releases]").html($("div.overall-summary ul.numbers-summary > li > a[href*=releases] span.num")[0].outerHTML + " 個發佈"); /* {releases_count} Releases */
        $("div.overall-summary ul.numbers-summary > li > a[href*=contributors]").html($("div.overall-summary ul.numbers-summary > li > a[href*=contributors] span.num")[0].outerHTML + " 位貢獻者"); /* {contributors_count} Contributors */
        $("div.repo-container a.repository-lang-stats-graph").attr("original-title", "顯示程式語言統計"); /* Show language statistics */

        /* repository sidebar menu */
        $("div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title=Code] span.full-word").text("程式碼"); /* Code */
        $("div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title=Issues] span.full-word").text("議題"); /* Issues */
        $("div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Pull Requests'] span.full-word").text("收用請求"); /* Pull Request */
        $("div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Pulse'] span.full-word").text("專案脈動"); /* Pulse */
        $("div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Graphs'] span.full-word").text("統計圖表"); /* Graphs */
        $("div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Network'] span.full-word").text("分支網路"); /* Network */
        $("div.repository-sidebar div.repo-nav-contents ul.repo-menu li[original-title='Settings'] span.full-word").text("專案設定"); /* Settings */
        $("div.repository-sidebar div.only-with-full-nav a[href*=zip]").html($("div.repository-sidebar div.only-with-full-nav a[href*=zip] > span")[0].outerHTML + " 打包下載 ZIP 檔"); /* Download ZIP */
      }

      /* repository issues, e.g. https://github.com/dannvix/GitHub-Locales/issues */
      if (window.location.href.match(/http[s]?:\/\/github.com\/[^\/]+\/[^\/]+\/issues/)) {
        /* tab navigation */
        $("div#issues_next > div.tabnav a[href$=issues]").text("議題一覽"); /* Browse Issues */
        $("div#issues_next > div.tabnav a[href$=milestones]").text("里程碑"); /* Milestones */
        $("div#issues_next div.tabnav a[href*=new]").text("提新議題"); /* New Issue */

        console.log("Hello");

        /* left sidebar */
        $("div#issues_next ul.filter-list a[href*=issues]:first").html($("div#issues_next ul.filter-list a[href*=issues]:first span.count")[0].outerHTML + " 所有議題"); /* Everyone's Issues */
        $("div#issues_next ul.filter-list a[href*='issues/milestones'][href*=open]").html($("div#issues_next ul.filter-list a[href*='issues/milestones'][href*=open] span.count")[0].outerHTML + " 未達成的里程碑"); /* Open Issues */
        $("div#issues_next ul.filter-list a[href*='issues/milestones'][href*=closed]").html($("div#issues_next ul.filter-list a[href*='issues/milestones'][href*=closed] span.count")[0].outerHTML + " 已達成的里程碑"); /* Closed Issues */
        $("div#issues_next ul.filter-list a[href*=assigned]:first").html($("div#issues_next ul.filter-list a[href*=assigned]:first span.count")[0].outerHTML + " 指派給您的"); /* Assigned to you */
        $("div#issues_next ul.filter-list a[href*=created_by]:first").html($("div#issues_next ul.filter-list a[href*=created_by]:first span.count")[0].outerHTML + " 您所建立的"); /* Created by you */
        $("div#issues_next ul.filter-list a[href*=mentioned]:first").html($("div#issues_next ul.filter-list a[href*=mentioned]:first span.count")[0].outerHTML + " 提及您的"); /* Mentioned you */

        console.log("World");
      }

      /* footer */
      $("div.site-footer").append('<div style="clear: both; text-align: center; margin-top: 50px;">非官方正體中文翻譯由 <a href="https://github.com/dannvix/GitHub-Locales">GitHub-Locales 專案</a> 提供</div>');
    }
  };

  locales[locale]();
};


var main = function() {
  GitHubLocales("zh-TW");
};
main();
