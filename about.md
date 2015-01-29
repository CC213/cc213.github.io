---
layout: page
title: About Me
permalink: /about/
---

## 工作经历

- 网易
	- 2013.04 至今
	- 杭研后台技术中心（大数据技术组），全职
- 微软亚太研发集体（北京）
	- 2012.06-2012.08
	- 微软亚洲互联网工程院，实习

## 学习经历

- 华中科技大学
	- 2010.09-2013.03，研究生
	- 计算机软件与理论
- 武汉理工大学
	- 2006.09-2010.06，本科
	- 计算机科学与技术

## 兴趣爱好

- 编程
- 篮球
- 电影
- 旅游
- 下厨

## Contact me

[phoenix.w.2010@gmail.com](mailto:phoenix.w.2010@gmail.com)

## 给我留言

{% include comments.md %}
<script type="text/javascript">
$(function(){
  $(document).keydown(function(e) {
    var url = false;
        if (e.which == 37 || e.which == 74) {  // Left arrow and J
            {% if page.previous %}
        url = '{{ site.url }}{{ page.previous.url }}';
        {% endif %}
        }
        else if (e.which == 39 || e.which == 75) {  // Right arrow and K
            {% if page.next %}
        url = '{{ site.url }}{{ page.next.url }}';
        {% endif %}
        }
        if (url) {
            window.location = url;
        }
  });
})
</script>