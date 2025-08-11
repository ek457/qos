// Header
document.getElementById("header").innerHTML = `
<b><a href="https://ek457.github.io/">OakStudio</a></b>
<div class="header-right">
    <a href="https://ek457.github.io/qos/">首页</a>
    <a href="https://ek457.github.io/qos/docs/">文档</a>
    <a href="#sidebar">展开目录</a>
</div>
`;

// Sidebar
document.getElementById("sidebar").innerHTML = `
<h3>目录</h3>
<ul>
    <li><a href="#">帮助文档：主页面</a></li>
    <ul>
        <li><a href="https://ek457.github.io/qos/docs/">官网文档</a></li>
        <li><a href="https://github.com/ElofHew/QOS/wiki/Home/" target="_blank">GitHub Wiki</a></li>
        <li><a href="https://gitee.com/ElofHew/QOS/wikis/Home/" target="_blank">Gitee Wiki</a></li>
    </ul>
    <li><a href="#">配置环境帮助文档</a></li>
    <ul>
        <li><a href="1-1.html">安装Python3</a></li>
        <li><a href="1-2.html">配置虚拟环境</a></li>
        <li><a href="1-3.html">更换pip镜像源</a></li>
    </ul>
    <li><a href="#">用户使用帮助文档</a></li>
    <ul>
        <li><a href="2-1.html">快速入门</a></li>
        <li><a href="2-2.html">激活帮助</a></li>
        <li><a href="2-3.html">命令帮助</a></li>
    </ul>
</ul>
<h3>仓库</h3>
<ul>
    <li><a href="https://github.com/ElofHew/QOS" target="_blank">GitHub</a></li>
    <li><a href="https://gitee.com/ElofHew/QOS" target="_blank">Gitee</a></li>
</ul>
`;

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggleLink = document.querySelector('a[href="#sidebar"]');
    const sidebar = document.getElementById('sidebar');
    const container = document.querySelector('.container');

    function adjustSidebarAndContainerOnLoad() {
        if (window.innerWidth > 800) {3
            sidebar.style.display = 'block';
            sidebarToggleLink.innerHTML = '收起目录';
            container.style.marginLeft = '260px';
        } else {
            sidebar.style.display = 'none';
            sidebarToggleLink.innerHTML = '展开目录';
            container.style.marginLeft = '0';
        }
    }

    // 只在页面加载时调整一遍
    adjustSidebarAndContainerOnLoad();

    sidebarToggleLink.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认跳转行为

        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'block';
            sidebarToggleLink.innerHTML = '收起目录';
            if (window.innerWidth > 800) {
                container.style.marginLeft = '260px';
            }
        } else {
            sidebar.style.display = 'none';
            sidebarToggleLink.innerHTML = '展开目录';
            container.style.marginLeft = '0';
        }
    });

    // 为了确保在窗口大小改变时也能正确调整container的左边距，但不改变侧边栏的显示状态
    window.addEventListener('resize', function() {
        if (sidebar.style.display === 'block') {
            if (window.innerWidth > 800) {
                container.style.marginLeft = '260px';
            } else {
                container.style.marginLeft = '0';
            }
        } else {
            container.style.marginLeft = '0';
        }
    });
});
