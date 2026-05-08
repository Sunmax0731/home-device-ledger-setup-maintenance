# Traceability Matrix

- Repo: `home-device-ledger-setup-maintenance`
- Domain: IoT
- Rank: 51 / P2 / Score 55
- Idea No: 7
- アイデア名: 家庭内デバイス台帳・設置・保守・初期設定
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

| 要件 | 仕様 | 実装 | テスト | docs/release |
| --- | --- | --- | --- | --- |
| 代表フロー | 利用者フロー | src/core, app | happy-path | README, user-guide |
| 必須不足検出 | データ仕様 | src/validators | missing-required | test-plan |
| 警告保持 | 安全境界 | src/report | warning, mixed-batch | security-privacy |
| closed alpha配布 | release checklist | scripts/validate | npm test | release-evidence |
| QCDS A-以上 | evaluation criteria | src/review-model | metrics validation | qcds docs |
