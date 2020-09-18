(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{386:function(e,v,_){"use strict";_.r(v);var t=_(2),o=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"docker-相关命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#docker-相关命令"}},[e._v("#")]),e._v(" docker 相关命令")]),e._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/Linux/centOS/docker/command.html"}},[e._v("相关命令")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/Linux/centOS/docker/install.html"}},[e._v("安装使用（nginx，tomcat，mysql，oracle 11g）")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/Linux/centOS/docker/container-usage.html"}},[e._v("容器使用")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/Linux/centOS/docker/image-usage.html"}},[e._v("镜像使用")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/Linux/centOS/docker/container-connection.html"}},[e._v("容器链接")])],1)]),e._v(" "),_("h3",{attrs:{id:"run-命令说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#run-命令说明"}},[e._v("#")]),e._v(" run 命令说明：")]),e._v(" "),_("p",[e._v("语法")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\n")])])]),_("p",[e._v("OPTIONS说明：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("--name 容器名称")]),e._v(": 为容器指定一个名称")]),e._v(" "),_("li",[_("code",[e._v("-p 主机端口:容器端口")]),e._v(": 端口映射，格式为：主机(宿主)端口:容器端口")]),e._v(" "),_("li",[_("code",[e._v("-d")]),e._v(": 后台运行容器，并返回容器ID")]),e._v(" "),_("li",[_("code",[e._v("-v 本机路径:容器路径")]),e._v("：将 主机本机路 径目录挂载到容器的 容器路径（"),_("strong",[e._v("可以是多个-v")]),e._v("）")]),e._v(" "),_("li",[_("code",[e._v("-a stdin")]),e._v(": 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；")]),e._v(" "),_("li",[_("code",[e._v("-i")]),e._v(": 以交互模式运行容器，通常与 -t 同时使用；")]),e._v(" "),_("li",[_("code",[e._v("-t")]),e._v(": 为容器重新分配一个伪输入终端，通常与 -i 同时使用；")]),e._v(" "),_("li",[_("code",[e._v("--dns 8.8.8.8")]),e._v(": 指定容器使用的DNS服务器，默认和宿主一致；")]),e._v(" "),_("li",[_("code",[e._v("--dns-search example.com")]),e._v(": 指定容器DNS搜索域名，默认和宿主一致；")]),e._v(" "),_("li",[_("code",[e._v('-h "mars"')]),e._v(": 指定容器的hostname；")]),e._v(" "),_("li",[_("code",[e._v('-e username="ritchie"')]),e._v(": 设置环境变量；")]),e._v(" "),_("li",[_("code",[e._v("--env-file=[]")]),e._v(": 从指定文件读入环境变量；")]),e._v(" "),_("li",[_("code",[e._v('--cpuset="0-2" or --cpuset="0,1,2"')]),e._v(": 绑定容器到指定CPU运行；")]),e._v(" "),_("li",[_("code",[e._v("-m")]),e._v(" :设置容器使用内存最大值；")]),e._v(" "),_("li",[_("code",[e._v('--net="bridge"')]),e._v(": 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；")]),e._v(" "),_("li",[_("code",[e._v("--link=[]")]),e._v(": 添加链接到另一个容器；")]),e._v(" "),_("li",[_("code",[e._v("--expose=[]")]),e._v(": 开放一个端口或一组端口；")])]),e._v(" "),_("h3",{attrs:{id:"容器-命令说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#容器-命令说明"}},[e._v("#")]),e._v(" 容器 命令说明")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("docker start")]),e._v(": 启动一个或多个已经被停止的容器")]),e._v(" "),_("li",[_("code",[e._v("docker stop")]),e._v(": 停止一个运行中的容器")]),e._v(" "),_("li",[_("code",[e._v("docker restart")]),e._v(": 重启容器")]),e._v(" "),_("li",[_("code",[e._v("docker kill")]),e._v(": 杀死")]),e._v(" "),_("li",[_("code",[e._v("docker rm")]),e._v(": 删除")]),e._v(" "),_("li",[_("code",[e._v("docker exec")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("-d")]),e._v(" :分离模式;在后台运行")]),e._v(" "),_("li",[_("code",[e._v("-i")]),e._v(" :即使没有附加也保持 STDIN 打开")]),e._v(" "),_("li",[_("code",[e._v("-t")]),e._v(" :分配一个伪终端")])])]),e._v(" "),_("li",[_("code",[e._v("docker pause")]),e._v(" :暂停容器中所有的进程")]),e._v(" "),_("li",[_("code",[e._v("docker unpause")]),e._v(" :恢复容器中所有的进程")]),e._v(" "),_("li",[_("code",[e._v("docker create")]),e._v(" ：创建一个新的容器但不启动它")])])])}),[],!1,null,null,null);v.default=o.exports}}]);