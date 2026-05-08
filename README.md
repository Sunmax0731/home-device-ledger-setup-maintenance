# home-device-ledger-setup-maintenance

家庭内デバイス台帳・設置・保守・初期設定 の closed alpha prototype。家庭内デバイスの名前、設置場所、配線、写真、電池交換、点検予定、PiやM5Stackの初期設定手順を管理する。

## Status

- Version: 0.1.0-alpha.1
- Rank: 51 / P2 / Score 55
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
