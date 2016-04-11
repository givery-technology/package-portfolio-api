# ポートフォリオを作ろう！（API実装）
ポートフォリオに載せるプロジェクトの管理をするための Web API を実装しよう！

## 前提条件
このチャレンジは実装されたサーバーが、インターネット上に公開されている事を前提とします。

## データベース
以下が今回のチャレンジで必要となるデータベースの情報です。
[database.sql](./specifications/database.sql)にファイルが提供されています。

```sql
-- SQLite3 のフォーマットで書かれています。
-- 使うデータベースによっては一部修正が必要な場合があります。
create table projects (
    id integer PRIMARY KEY AUTOINCREMENT,
    url varchar(255) NULL,
    title varchar(255) NOT NULL,
    description text NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
```

## Step 1: Edit server.json
[server.json](./server.json)の `hostname` の値に今回ホスティングしたサーバーのドメインもしくはIPアドレスを入力してください。

```json
{
  "hostname": "hosted-server.domain.com"
}
```
`hosted-server.domain.com` の部分ホストしてあるサーバー、もしくはドメインを書き換えてください。

## ステップ 2: テストを実行しつつ、サーバーを実装しよう！
実装が必要なエンドポイントは次の4つです。  
このAPIが満たすべき仕様の詳細については [api-first-spec](https://github.com/shunjikonishi/api-first-spec) によって表記されています。仕様が書かれたファイルへのリンクもあるので実際に確認してみてください。

- GET /api/projects
  - データの取得に成功した場合、HTTP Status Code は正常系 (2XX) を返すこと
  - [GET /api/projects spec](./specifications/localhost/GET-api-projects.spec.js)
- POST /api/projects
  - データの生成に成功した場合、HTTP Status Code は正常系 (2XX) を返すこと
  - title と description のどちらかが空の場合、HTTP Status Code はクライアントエラー (4XX) を返すこと
  - [POST /api/projects spec](./specifications/localhost/POST-api-projects.spec.js)
- GET /api/projects/:id
  - データの取得に成功した場合、HTTP Status Code は正常系 (2XX) を返すこと
  - データが取得できなかった場合、HTTP Status Code はクライアントエラー (4XX) を返すこと
  - [GET /api/projects/:id spec](./specifications/localhost/GET-api-projects_id.spec.js)
- DELETE /api/projects/:id
  - データの削除に成功した場合、HTTP Status Code は正常系 (2XX) を返すこと
  - 削除するデータが取得できなかった場合、HTTP Status Code はクライアントエラー (4XX) を返すこと
  - [GET /api/projects/:id spec](./specifications/localhost/DELETE-api-projects_id.spec.js)

### テストの実行  
次のコマンドをターミナル上で実行することでローカル環境でのテストが可能です。

```bash
$ npm install                                # モジュールのインストール (初回のみ実行)
$ $(npm bin)/mocha specifications/localhost  # ローカル環境でのテストの実行
```

実装前は下のように `failing` 状態のテストがあるので、全てのテストを `passing` の状態にできるようにサーバーを実装して下さい。

```
42 passing (16s)
6 failing
```
