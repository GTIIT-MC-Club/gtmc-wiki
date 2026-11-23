# 加入服务器

游玩社团提供的服务器不需要正版登录。但是为了验证身份，我们需要使用社团提供的 **GTMC 皮肤站** 提供验证服务。整个注册流程大约 5 分钟。

**你需要准备：** 

1. 一个 `@gtiit.edu.cn` 校园邮箱
2. 一个支持 **第三方登录** 的启动器。例如 *PCL2(Windows)* 或者 *Axolotl(MacOS)*

## 第一步：注册 GTMC 账号

1. 点击 [auth.gtmc.top/signup](https://auth.gtmc.top/signup) 跳转到注册页
2. 目前只支持 `@gtiit.edu.cn` 学校邮箱，其他邮箱会被拒绝
3. 去邮箱获取六位数邮箱验证吗（如果没有，请检查垃圾邮件）

请牢记密码，该账号可同时用于登录 [GTMC 论坛](https://forum.gtmc.top/) 和 [GTMC 皮肤站](https://skin.gtmc.top/)

## 第二步：在皮肤站建角色

1. 打开 [skin.gtmc.top](https://skin.gtmc.top)，点击右上角 **登录**。
2. 在[「用户中心」](https://skin.gtmc.top/user)的侧边栏找到[「角色管理」](https://skin.gtmc.top/user/player)，添加新角色。角色名就是你在服务器里的游戏名。
3. 更改皮肤(可选) ，在[「我的衣柜」](https://skin.gtmc.top/user/closet)上传材质，或在[「皮肤库」](https://skin.gtmc.top/skinlib?filter=skin&sort=time&page=1)挑一个，然后应用到角色上。

::: warning 老玩家注意：名字要一模一样
以前在服务器玩过的话，新建角色时**名字要和原来的游戏名完全一致，大小写也一样**，
这样原来的存档、背包和进度才能保留。如果你想改名，确保你已经在每个服务器中，将背包中的物品存入箱子中。
:::

## 第三步：配置启动器

直接拖动 <button id="ygg-dnd-button" class="btn btn-primary" draggable="true" data-clipboard-text="https://skin.gtmc.top/api/yggdrasil">这个魔法按钮</button> 到任意启动器，即可快速添加认证服务器

如果无事发生，你也可以复制 `https://skin.gtmc.top/api/yggdrasil` 并手动设置认证服务器


在启动器里添加一个「外置登录」或「authlib-injector」账户，服务器地址填：

```text
https://skin.gtmc.top/api/yggdrasil
```

账号和密码就是 GTMC 账号的**邮箱**和**密码**。登录后选择你在第二步建的角色。

常见启动器都支持外置登录，名称略有不同：

| 启动器 | 在哪里添加 |
| --- | --- |
| HMCL | 账户 → 添加账户 → 外置登录（authlib-injector） |
| PCL | 启动 → 登录方式选「第三方登录（Authlib Injector）」 |
| Prism Launcher | 账户 → 添加 authlib-injector |

::: tip 地址可以直接拖
部分启动器支持把皮肤站页面上的 authlib-injector 地址直接拖进账户窗口，效果和手动填一样。
:::


## 第四步：进服

在 [GTMC 论坛](https://forum.gtmc.top/) 首页右栏的「服务器」面板里复制想加入服的地址，在启动器下载对应的版本，
在游戏里「多人游戏 → 添加服务器」填进去。

## 进不去？

**提示「无效的会话」或「未通过验证」。**
启动游戏用的不是外置登录账户，或者登录过期了。回启动器重新登录外置账户再试。

**皮肤没显示。**
确认皮肤已经应用到你用的那个角色上。改完皮肤后重进服务器才会刷新。

**注册时提示邮箱不被允许。**
只接受 `@gtiit.edu.cn`。用的确实是校园邮箱仍被拒，在群里找管理员。
