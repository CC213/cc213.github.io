



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jekyll-table-of-contents/toc.js at master · ghiculescu/jekyll-table-of-contents</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="ghiculescu/jekyll-table-of-contents" name="twitter:title" /><meta content="jekyll-table-of-contents - A simple JavaScript table of contents, designed for Jekyll (or similar) sites." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/509837?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/509837?v=3&amp;s=400" property="og:image" /><meta content="ghiculescu/jekyll-table-of-contents" property="og:title" /><meta content="https://github.com/ghiculescu/jekyll-table-of-contents" property="og:url" /><meta content="jekyll-table-of-contents - A simple JavaScript table of contents, designed for Jekyll (or similar) sites." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="B4969A5A:1D6C:CB976A9:54C5F30D" name="octolytics-dimension-request_id" /><meta content="4716761" name="octolytics-actor-id" /><meta content="CC213" name="octolytics-actor-login" /><meta content="6cd690eddceb275a4ae0780485d6950edb64fe985affdfc14e3ca5c7e39a7bf7" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="s8Z0DruXxhByrITgK4iDrb3VEc8aCqIwMc5qBZIK38pUEpO6Nx1oH+MOl6cbRVQOdyW8R8rSBxKVlTtaI3X4CA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-3b24b9ac37e087c9b13ad8d84820250a93a4fd610eb6e7535e8b12d0cb87836d.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-1203ee5b00e494008d0b0c430766b6d838a5f9eff614e5345fdb47a96476cc7d.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="f59bd5d91b846e6463184dd1a8e9c2d9">

      
  <meta name="description" content="jekyll-table-of-contents - A simple JavaScript table of contents, designed for Jekyll (or similar) sites.">
  <meta name="go-import" content="github.com/ghiculescu/jekyll-table-of-contents git https://github.com/ghiculescu/jekyll-table-of-contents.git">

  <meta content="509837" name="octolytics-dimension-user_id" /><meta content="ghiculescu" name="octolytics-dimension-user_login" /><meta content="8119591" name="octolytics-dimension-repository_id" /><meta content="ghiculescu/jekyll-table-of-contents" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8119591" name="octolytics-dimension-repository_network_root_id" /><meta content="ghiculescu/jekyll-table-of-contents" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master.atom" rel="alternate" title="Recent Commits to jekyll-table-of-contents:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/ghiculescu/jekyll-table-of-contents/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/ghiculescu/jekyll-table-of-contents/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/CC213" data-ga-click="Header, go to profile, text:username">
      <img alt="Jianyi Wang" class="avatar" data-user="4716761" height="20" src="https://avatars3.githubusercontent.com/u/4716761?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">CC213</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="ghiculescu/jekyll-table-of-contents">This repository</span>
    </li>
      <li>
        <a href="/ghiculescu/jekyll-table-of-contents/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tR1WzLLae7BTd4ZNINIS7aAmFhfZ1eKNDav0hJ4i+GuTjQPDS+QuwdhGuRzdKHZ7VxKJNgmyTMOXEW5NPyO43w==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ZkRuR0pO6nIG83D5wfnjlXzDHm9PjqfMhrlKXxIjylBJcAhiZwkKPCh57eAQmdNRPQOY7Fu9lsfg4NCTPZnbHQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="8119591" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/ghiculescu/jekyll-table-of-contents/watchers">
        4
      </a>
      <a href="/ghiculescu/jekyll-table-of-contents/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/ghiculescu/jekyll-table-of-contents/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dnij0LwB5YBv9fFiPZUIqGmLw8YFIRT5c/ujxBEYy8lIf14li5bV5c8pp7/9LbaV8NXGq1cDEk+guXNa0K7Abw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar ghiculescu/jekyll-table-of-contents">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/ghiculescu/jekyll-table-of-contents/stargazers">
          39
        </a>
</form>
    <form accept-charset="UTF-8" action="/ghiculescu/jekyll-table-of-contents/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="IlHzdqoUWRsLLpFqKWSLdPELTiqCxRw5wgA/JVgvCyNOOvQe2ga0BiraHCMDcuyd9Lsv3FDpKJKl7t+Ysa/9RA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star ghiculescu/jekyll-table-of-contents">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/ghiculescu/jekyll-table-of-contents/stargazers">
          39
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/ghiculescu/jekyll-table-of-contents/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of ghiculescu/jekyll-table-of-contents to your account" aria-label="Fork your own copy of ghiculescu/jekyll-table-of-contents to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/ghiculescu/jekyll-table-of-contents/network" class="social-count">13</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/ghiculescu" class="url fn" itemprop="url" rel="author"><span itemprop="title">ghiculescu</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/ghiculescu/jekyll-table-of-contents" class="js-current-repository" data-pjax="#js-repo-pjax-container">jekyll-table-of-contents</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/ghiculescu/jekyll-table-of-contents/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/ghiculescu/jekyll-table-of-contents" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /ghiculescu/jekyll-table-of-contents">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/ghiculescu/jekyll-table-of-contents/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /ghiculescu/jekyll-table-of-contents/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/ghiculescu/jekyll-table-of-contents/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /ghiculescu/jekyll-table-of-contents/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/ghiculescu/jekyll-table-of-contents/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /ghiculescu/jekyll-table-of-contents/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/ghiculescu/jekyll-table-of-contents/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /ghiculescu/jekyll-table-of-contents/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/ghiculescu/jekyll-table-of-contents/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /ghiculescu/jekyll-table-of-contents/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/ghiculescu/jekyll-table-of-contents.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:ghiculescu/jekyll-table-of-contents.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/ghiculescu/jekyll-table-of-contents" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/ghiculescu/jekyll-table-of-contents" class="minibutton sidebar-button" title="Save ghiculescu/jekyll-table-of-contents to your computer and use it in GitHub Desktop." aria-label="Save ghiculescu/jekyll-table-of-contents to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/ghiculescu/jekyll-table-of-contents/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of ghiculescu/jekyll-table-of-contents as a zip file"
                   title="Download the contents of ghiculescu/jekyll-table-of-contents as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/ghiculescu/jekyll-table-of-contents/blob/e59fd60c95dc5cfb1db9c906e3bc37394e8b940e/toc.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:4e8ef762030e96d5a1f0477993752dd6 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/ghiculescu/jekyll-table-of-contents/blob/master/toc.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/ghiculescu/jekyll-table-of-contents/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ghiculescu/jekyll-table-of-contents" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jekyll-table-of-contents</span></a></span></span><span class="separator">/</span><strong class="final-path">toc.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="eksperimental" class="avatar" data-user="9133420" height="24" src="https://avatars0.githubusercontent.com/u/9133420?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/eksperimental" rel="contributor">eksperimental</a></span>
        <time datetime="2015-01-02T04:41:09Z" is="relative-time">Jan 2, 2015</time>
        <div class="commit-title">
            <a href="/ghiculescu/jekyll-table-of-contents/commit/13c91f87a456b604ef7ce849caaaca22e6b134b6" class="message" data-pjax="true" title="add  setting. README.md updated">add setting. README.md updated</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>6</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="heristop" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=heristop"><img alt="Alexandre Mogère" class="avatar" data-user="206870" height="20" src="https://avatars1.githubusercontent.com/u/206870?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ghiculescu" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=ghiculescu"><img alt="Alex Ghiculescu" class="avatar" data-user="509837" height="20" src="https://avatars1.githubusercontent.com/u/509837?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="antoine-richard" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=antoine-richard"><img alt="Antoine Richard" class="avatar" data-user="1552897" height="20" src="https://avatars1.githubusercontent.com/u/1552897?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="drewcrawford" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=drewcrawford"><img alt="Drew Crawford" class="avatar" data-user="183400" height="20" src="https://avatars3.githubusercontent.com/u/183400?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Anthodev" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=Anthodev"><img alt="Cédric Anthony" class="avatar" data-user="1784889" height="20" src="https://avatars1.githubusercontent.com/u/1784889?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="eksperimental" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=eksperimental"><img alt="eksperimental" class="avatar" data-user="9133420" height="20" src="https://avatars2.githubusercontent.com/u/9133420?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Alexandre Mogère" data-user="206870" height="24" src="https://avatars3.githubusercontent.com/u/206870?v=3&amp;s=48" width="24" />
            <a href="/heristop">heristop</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alex Ghiculescu" data-user="509837" height="24" src="https://avatars3.githubusercontent.com/u/509837?v=3&amp;s=48" width="24" />
            <a href="/ghiculescu">ghiculescu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Antoine Richard" data-user="1552897" height="24" src="https://avatars3.githubusercontent.com/u/1552897?v=3&amp;s=48" width="24" />
            <a href="/antoine-richard">antoine-richard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Drew Crawford" data-user="183400" height="24" src="https://avatars1.githubusercontent.com/u/183400?v=3&amp;s=48" width="24" />
            <a href="/drewcrawford">drewcrawford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Cédric Anthony" data-user="1784889" height="24" src="https://avatars3.githubusercontent.com/u/1784889?v=3&amp;s=48" width="24" />
            <a href="/Anthodev">Anthodev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="eksperimental" data-user="9133420" height="24" src="https://avatars0.githubusercontent.com/u/9133420?v=3&amp;s=48" width="24" />
            <a href="/eksperimental">eksperimental</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>83 lines (76 sloc)</span>
          <span class="meta-divider"></span>
        <span>3.136 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/ghiculescu/jekyll-table-of-contents/raw/master/toc.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/ghiculescu/jekyll-table-of-contents/blame/master/toc.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="github-windows://openRepo/https://github.com/ghiculescu/jekyll-table-of-contents?branch=master&amp;filepath=toc.js" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/ghiculescu/jekyll-table-of-contents/edit/master/toc.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/ghiculescu/jekyll-table-of-contents/delete/master/toc.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">// https://github.com/ghiculescu/jekyll-table-of-contents</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">(<span class="pl-st">function</span>(<span class="pl-vpf">$</span>){</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">toc</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">    <span class="pl-s">var</span> defaults <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">      noBackToTopLinks<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">      title<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;i&gt;Jump to...&lt;/i&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">      minimumHeaders<span class="pl-k">:</span> <span class="pl-c1">3</span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">      headers<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>h1, h2, h3, h4, h5, h6<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">      listType<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>ol<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// values: [ol|ul]</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">      showEffect<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// values: [show|slideDown|fadeIn|none]</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">      showSpeed<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>slow<span class="pl-pds">&#39;</span></span> <span class="pl-c">// set to 0 to deactivate effect</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">    settings <span class="pl-k">=</span> $.extend(defaults, options);</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">    <span class="pl-s">var</span> headers <span class="pl-k">=</span> $(settings.<span class="pl-sc">headers</span>).filter(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">      <span class="pl-c">// get all headers with an ID</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">      <span class="pl-s">var</span> previousSiblingName <span class="pl-k">=</span> $(<span class="pl-v">this</span>).prev().attr( <span class="pl-s1"><span class="pl-pds">&quot;</span>name<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">id</span> <span class="pl-k">&amp;&amp;</span> previousSiblingName) {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">        <span class="pl-v">this</span>.<span class="pl-sc">id</span> <span class="pl-k">=</span> $(<span class="pl-v">this</span>).attr( <span class="pl-s1"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>, previousSiblingName.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>) );</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-sc">id</span>;</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    }), output <span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>headers.<span class="pl-sc">length</span> <span class="pl-k">||</span> headers.<span class="pl-sc">length</span> <span class="pl-k">&lt;</span> settings.minimumHeaders <span class="pl-k">||</span> <span class="pl-k">!</span>output.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">0</span> <span class="pl-k">===</span> settings.showSpeed) {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">      settings.showEffect <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">    <span class="pl-s">var</span> render <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">      <span class="pl-en">show</span>: <span class="pl-st">function</span>() { output.hide().html(html).show(settings.showSpeed); },</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">      <span class="pl-en">slideDown</span>: <span class="pl-st">function</span>() { output.hide().html(html).slideDown(settings.showSpeed); },</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">      <span class="pl-en">fadeIn</span>: <span class="pl-st">function</span>() { output.hide().html(html).fadeIn(settings.showSpeed); },</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">      <span class="pl-en">none</span>: <span class="pl-st">function</span>() { output.html(html); }</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">    <span class="pl-s">var</span> <span class="pl-en">get_level</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">ele</span>) { <span class="pl-k">return</span> <span class="pl-s3">parseInt</span>(ele.<span class="pl-sc">nodeName</span>.<span class="pl-s3">replace</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>H<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), <span class="pl-c1">10</span>); }</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">    <span class="pl-s">var</span> highest_level <span class="pl-k">=</span> headers.map(<span class="pl-st">function</span>(<span class="pl-vpf">_</span>, <span class="pl-vpf">ele</span>) { <span class="pl-k">return</span> get_level(ele); }).get().<span class="pl-s3">sort</span>()[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">    <span class="pl-s">var</span> return_to_top <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;i class=&quot;icon-arrow-up back-to-top&quot;&gt; &lt;/i&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">    <span class="pl-s">var</span> level <span class="pl-k">=</span> get_level(headers[<span class="pl-c1">0</span>]),</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">      this_level,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">      html <span class="pl-k">=</span> settings.<span class="pl-sc">title</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> &lt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>settings.listType<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">    headers.on(<span class="pl-s1"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>settings.noBackToTopLinks) {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">        <span class="pl-s3">window</span>.<span class="pl-sc">location</span>.<span class="pl-sc">hash</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">id</span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">    .addClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>clickable-header<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">    .each(<span class="pl-st">function</span>(<span class="pl-vpf">_</span>, <span class="pl-vpf">header</span>) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">      this_level <span class="pl-k">=</span> get_level(header);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>settings.noBackToTopLinks <span class="pl-k">&amp;&amp;</span> this_level <span class="pl-k">===</span> highest_level) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">        $(header).addClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>top-level-header<span class="pl-pds">&#39;</span></span>).after(return_to_top);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">      <span class="pl-k">if</span> (this_level <span class="pl-k">===</span> level) <span class="pl-c">// same level as before; same indenting</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">        html <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;li&gt;&lt;a href=&#39;#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> header.<span class="pl-sc">id</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> header.innerHTML <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/a&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (this_level <span class="pl-k">&lt;=</span> level){ <span class="pl-c">// higher level than before; end parent ol</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">        <span class="pl-k">for</span>(i <span class="pl-k">=</span> this_level; i <span class="pl-k">&lt;</span> level; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/li&gt;&lt;/<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>settings.listType<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">        html <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;li&gt;&lt;a href=&#39;#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> header.<span class="pl-sc">id</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> header.innerHTML <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/a&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (this_level <span class="pl-k">&gt;</span> level) { <span class="pl-c">// lower level than before; expand the previous to contain a ol</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">        <span class="pl-k">for</span>(i <span class="pl-k">=</span> this_level; i <span class="pl-k">&gt;</span> level; i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>settings.listType<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&gt;&lt;li&gt;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">        html <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;a href=&#39;#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> header.<span class="pl-sc">id</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> header.innerHTML <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/a&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">      level <span class="pl-k">=</span> this_level; <span class="pl-c">// update for the next one</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">    html <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>settings.listType<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>settings.noBackToTopLinks) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">      $(<span class="pl-s3">document</span>).on(<span class="pl-s1"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>.back-to-top<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">        $(<span class="pl-s3">window</span>).scrollTop(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">        <span class="pl-s3">window</span>.<span class="pl-sc">location</span>.<span class="pl-sc">hash</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">    render[settings.showEffect]();</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">})(jQuery);</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05204s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-af95b05cb14b7a29b0457c26b4a1d24151f4a47842c8e74bd556622f347b9d3d.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-60c7ab07eabe8804b73ad90fdadf8b31efc896954f39bd84c8816438844631cb.js" type="text/javascript"></script>
      
      
  </body>
</html>
