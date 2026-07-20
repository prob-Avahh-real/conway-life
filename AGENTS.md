# 生命游戏 · Conway's Game of Life

康威生命游戏。经典 B3/S23 规则，触屏绘制 + 戒指/手杖控制。

## 目标平台

| 平台 | 方式 | 产出 |
|------|------|------|
| 🍎 iOS | Capacitor → Xcode | IPA |
| 🤖 Android | Capacitor → Gradle | APK |
| ⌚ 手表 | 触屏+窄屏 CSS | 同 APK |
| 💍 智能戒指 | DeviceOrientation 倾斜光标 / 甩动切换细胞 | 同 APK |
| 🦯 智能手杖 | DeviceMotion 轻点播放暂停 / 挥动单步 | 同 APK |

## 规则

- 活细胞：邻居 2 或 3 → 存活，否则死亡
- 死细胞：邻居恰好 3 → 诞生
- 网格环形边界（左右/上下相连）

## 操作

- 触屏：拖动画细胞
- 播放 / 单步 / 随机 / 清空 / 加速
- 预设：滑翔机、轻型飞船、蜂巢、脉冲星、蟾蜍、信标、高斯枪
- 键盘：Space 播放、N 单步、R 随机、C 清空、方向键移动、Enter 切换

## 构建

```bash
npm install
npm run build
npx cap add android   # 首次
npx cap sync
cd android && ./gradlew assembleDebug
```

改 `index.html` 后务必 `npm run build`（会同步到 `www/` 与 Android assets）。
