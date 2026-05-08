export const productProfile = {
  "repo": "home-device-ledger-setup-maintenance",
  "title": "家庭内デバイス台帳・設置・保守・初期設定",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 51,
  "tier": "P2",
  "score": 55,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "家庭内デバイスの名前、設置場所、配線、写真、電池交換、点検予定、PiやM5Stackの初期設定手順を管理する。",
  "problem": "デバイスが増えると、設置場所、配線、点検日、初期設定手順が分からなくなりやすい。",
  "differentiation": "家庭内で再利用できる設置・保守・初期設定手順をデバイス台帳にまとめる。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
