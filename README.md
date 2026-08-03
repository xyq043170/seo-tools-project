# Smart Tool Matrix Website Inspection（二次开发版）

本仓库是基于 Alicia Sykes 的
[Web-Check](https://github.com/Lissy93/web-check)，作为
[Smart Tool Matrix](https://www.gotoolmatrix.com/) 的网站检测服务部署。
DNS、TLS、HTTP、页面元数据、技术栈、robots、sitemap 等分析能力来自上游 Web-Check；
本仓库主要完成产品界面、统一域名路由、部署和来源说明方面的二次开发。

## 本仓库相对上游的改动

### UI 与交互重构

- 重构首页信息层级、输入区、按钮、卡片、导航、进度条和结果页配色。
- Astro 基础布局增加统一的 64px Smart Tool Matrix 品牌栏、Website Inspection 分区和返回检测入口；所有页面共用，嵌入模式自动隐藏。
- 与 PDF、图片和开发者子站统一暖灰背景、蓝色主操作色、边框层级和 16px 卡片圆角，检测状态继续使用语义化成功、警告和错误色。
- 使用 Smart Tool Matrix 的设计变量统一浅色/深色背景、边框、强调色和表单状态。
- 优化窄屏布局、首页说明区、检测入口与结果视图的间距和可读性。
- 在 Astro 基础布局中增加部署级页头、来源说明和统一页脚。

### 同源路由与子路径部署

- 将客户端任务创建、状态轮询和结果跳转改为兼容 Smart Tool Matrix 同源代理。
- 修复 `/seo/` 页面、API 请求、进度页和动态 `/check/[...target]` 路径在统一域名下不一致的问题。
- 调整 Astro `base`、客户端入口和导航链接，支持直接部署与主站代理两种场景。
- 主站为 `/seo` 与 `/seo/` 配置显式入口代理，并将 `/seo/*` 与 `/seo-api/*` 分别转发到页面和检测 API；Render 冷启动仍可能使首次访问变慢。

### SEO / GEO 与来源透明度

- 增强 Astro MetaTags，补充 title、description、canonical、Open Graph 和部署级 URL。
- 增加 `robots.txt`、`llms.txt` 和来源/引用指导。
- 明确披露 Alicia Sykes / Web-Check 上游关系以及当前部署仓库。
- 明确检测结果是某一时间点的自动观察，不是渗透测试、合规认证、排名保证或完整安全审计。

## 二次开发边界

- 当前派生版本没有新增 Web-Check 分析模块，也没有把上游检测规则重新声明为自研。
- 没有发布未经持续测量的响应速度、可用率或检测准确率数据。
- 本仓库的原创增量主要是 UI、同源任务路由、主站集成、部署配置和 SEO/GEO 信息架构。
- 原项目 MIT 许可证与 Alicia Sykes 的版权声明保留在 `LICENSE`。

## 检测内容

当前部署继承 Web-Check 的公开信息检查能力，包括但不限于：

- DNS 与域名相关公开记录
- TLS 证书与 HTTPS 信息
- HTTP 状态、重定向和响应头
- 页面标题、描述、社交元数据和链接
- robots.txt 与 sitemap
- 公开技术栈线索

技术指纹和单次网络结果可能误判或随时间变化，重要结论应使用专业工具复核。

## 开发

要求：

- Node.js 22+
- Yarn 1.22

```bash
corepack enable
yarn install
yarn dev
```

生产构建：

```bash
yarn install
yarn build
yarn start
```

默认监听 <http://localhost:3000>。环境变量和可选集成见 `.env.sample`。

## 仓库与反馈

- 当前部署源码：<https://github.com/xyq043170/seo-tools-project>
- 上游源码：<https://github.com/Lissy93/web-check>
- 主站说明：<https://www.gotoolmatrix.com/website-inspection>
- 问题反馈：<https://github.com/xyq043170/seo-tools-project/issues>
