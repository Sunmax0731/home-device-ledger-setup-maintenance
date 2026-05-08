# テスト計画

- Repo: `home-device-ledger-setup-maintenance`
- Domain: IoT
- Rank: 51 / P2 / Score 55
- Idea No: 7
- アイデア名: 家庭内デバイス台帳・設置・保守・初期設定
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\home-device-ledger-setup-maintenance`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/home-device-ledger-setup-maintenance-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
