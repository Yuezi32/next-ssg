# next-ssg: 基于Next.js的SSR/SSG项目脚手架演示

传统的React项目开发非常快捷，但不利于SEO的缺点越来越明显。本教材详细讲述了如何基于Next.js构建SSR/SSG项目。如果你有网页静态化的开发需求，本教程将非常适合。学习一个新框架的最佳方法就是结合项目边做边学。本文将手把手带你从零开始实战SSR/SSG，通俗易懂，千万别错过！

## className规范

1. 全局公用级别（不需要模块化）的className，用G-xxx。例如G-autocut(截字)、G-color-red(文字红色)。
2. 页面级别的className，用P-xxx。
3. 模块级别的className，用M-xxx。

## Next.js SSR/SSG超详细教程

该脚手架有超详细的教程，从零开始，逐步讲述Next.js SSR/SSG，新手也能快速掌握。

【教程目录】
```
1 创建Next.js项目
• 1.1 安装Next.js
• 1.2 设置项目目录
• 1.3 项目入口文件
• 1.4 精简项目
2 配置项目
• 2.1 设置路径别名
• 2.2 配置SourceMap（不建议设置）
• 2.3 设置页面title
• 2.4 设置HTML框架代码
• 2.5 以SSR模式运行项目
• 2.6 设置404/500页面
3 CSS预处理及使用
• 3.1 集成Sass/Scss
• 3.2 集成Less（选读）
• 3.3 集成Stylus（选读）
• 3.4 关于样式命名规范
• 3.5 配置全局样式
• 3.6 配置页面（pages）样式
4 页面路由
• 4.1 优化index页面和样式文件的存放位置
• 4.1.1 方法一：通过next.config.js配置
• 4.1.2 方法二：通过组件引入（推荐）
• 4.2 创建About页面
• 4.3 使用next/router和next/link构建导航组件
5 图片引用
• 5.1 方法一：使用原生<img>标签引入图片
• 5.2 方法二：使用next/image引用图片
6 生成静态化网站（SSG）
• 6.1 设置SSG的export命令
• 6.2 设置静态资源的basePath
• 6.3 设置SSG export输出的目录名称
7 接口请求
• 7.1 CSR/SSR/SSG 三种API请求方式
• 7.2 搭建服务端API服务
• 7.3 构建Profile页面
• 7.4 getServerSideProps和getStaticProps小节
• 7.5 搭建Next.js API Routers服务（选读）
8 动态路由
9 使用CLI命令动态生成目录
10 其他说明
11 项目Git源码
```
## 原文及微信公众号

教程原文请关注我的公众号【卧梅又闻花】，如有问题欢迎在微信公众号私信交流。

查阅文章《看了就会的Next.js SSR/SSG 教程》

![image](https://wx3.sinaimg.cn/large/475dd357ly1gbh774dw0dj210n0ku443.jpg)

