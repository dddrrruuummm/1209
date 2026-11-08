# SALDY1209 L.L.C.

英文无人机企业官网，包含销售与租赁、飞手培训、低空物流、农业应用和邮件询价。

## 本地预览

需要 Node.js 22 或以上。

```sh
npm ci
npm run dev
```

打开 http://127.0.0.1:3042/。生产构建命令为 `npm run build`，静态页面输出到 `out/`。

## GitHub 与 Vercel

1. 将上传文件夹**里面的内容**放到仓库根目录，使 `package.json` 和 `app/` 位于同一级。使用 ZIP 时先解压。
2. 在 Vercel 导入仓库并选择 Next.js。构建命令使用默认的 `npm run build`，保持输出目录默认设置。
3. 在项目的 Domains 配置 `saldy1209.com`，按 Vercel 项目实际显示的 DNS 记录完成验证。
4. 准备公开收录后，在 Vercel Production 环境添加 `NEXT_PUBLIC_SITE_LIVE=true` 并重新部署。

## 内容配置

公司资料和联系方式在 `lib/site.ts`，四项业务和应用图库在 `lib/offerings.ts`。确认正式电话后，同时填写 `phone.display` 和带国家区号的 `phone.number`。现有号码是保留的虚构号码。联系表单生成邮件草稿，由访客在自己的邮件应用中发送。上线前请测试 `contact@saldy1209.com` 收信。应用图库中的图片为生成的场景示意，真实机型、服务范围、资质和案例应在核实后添加。

销售与租赁页的同行参考价、查询日期和来源链接可在 `components/equipment-pricing.tsx` 更新。SALDY1209 的正式报价通过询价确认。
