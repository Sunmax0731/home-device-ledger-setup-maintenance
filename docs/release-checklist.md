# リリース前チェックリスト

- Repo: `home-device-ledger-setup-maintenance`
- Domain: IoT
- Rank: 51 / P2 / Score 55
- Idea No: 7
- アイデア名: 家庭内デバイス台帳・設置・保守・初期設定
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

- [x] `npm test`で代表suiteを検証する。
- [x] Web smoke相当で非blank、主要要素、主要操作を確認する。
- [x] docs ZIPを生成する。
- [x] QCDS全観点A-以上、手動未実施上限S-を守る。
- [ ] GitHub prerelease `v0.1.0-alpha.1` を `--prerelease --latest=false` で作成する。
- [ ] asset 3件を添付する。
- [ ] API確認後にrelease evidenceを更新し、docs ZIP再生成、tag push、asset再アップロードを行う。
