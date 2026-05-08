# 要件定義

- Repo: `home-device-ledger-setup-maintenance`
- Domain: IoT
- Rank: 51 / P2 / Score 55
- Idea No: 7
- アイデア名: 家庭内デバイス台帳・設置・保守・初期設定
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
家庭内デバイスの名前、設置場所、配線、写真、電池交換、点検予定、PiやM5Stackの初期設定手順を管理する。

## 課題
デバイスが増えると、設置場所、配線、点検日、初期設定手順が分からなくなりやすい。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
