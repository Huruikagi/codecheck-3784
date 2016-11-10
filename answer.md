## 振り返り
fizzbuzzを書いたことがあったので、だいたいそれと同じ感じで実装しました。

#### どのように実装手順を考えたか
分岐するべき条件を確認して、実装しました。

#### 実装の際に注意した点、工夫した点
特にありません。

#### 発生した問題や難しかった箇所、及びその対処
Localの開発環境で`codecheck`コマンドが正常に実行できませんでした。
ビルド時に以下のようなエラーが発生します。npm installでこけているようです。

```
C:\Users\tkita\dev\IdeaProjects\codecheck-3784>codecheck
codecheck version 0.6.0
codecheck: appCommand: node index.js
codecheck: testCommand: mocha -R tap
Start build: npm install
Error: npm install
{ Error: spawn npm ENOENT
    at exports._errnoException (util.js:1026:11)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:193:32)
    at onErrorNT (internal/child_process.js:359:16)
    at _combinedTickCallback (internal/process/next_tick.js:74:11)
    at process._tickCallback (internal/process/next_tick.js:98:9)
    at Module.runMain (module.js:609:11)
    at run (bootstrap_node.js:382:7)
    at startup (bootstrap_node.js:137:9)
    at bootstrap_node.js:497:3
  code: 'ENOENT',
  errno: 'ENOENT',
  syscall: 'spawn npm',
  path: 'npm',
  spawnargs: [ 'install' ] }
Unhandled rejection Error: spawn npm ENOENT
    at exports._errnoException (util.js:1026:11)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:193:32)
    at onErrorNT (internal/child_process.js:359:16)
    at _combinedTickCallback (internal/process/next_tick.js:74:11)
    at process._tickCallback (internal/process/next_tick.js:98:9)
    at Module.runMain (module.js:609:11)
    at run (bootstrap_node.js:382:7)
    at startup (bootstrap_node.js:137:9)
    at bootstrap_node.js:497:3
Fail build: npm install
```

まず何らかの操作で管理者権限が要求されている可能性を疑い、
管理者権限でコマンドプロンプトを起動し、その中でコマンドを実行してみました。
しかし同様のエラーが発生します。

次に、開発環境で使用しているNode.jsのバージョンが指定されていたv4.5.0ではなく、
v7.0.0だったことが原因ではないかと思い、そのアンインストール及びv4.5.0のインストールを行いました。
特に変化はありませんでした。

Windows独自のエラーであることを疑い、丁度仮想環境でUbuntuが動いていたので、
そちらの方にプロジェクトをクローンして実行してみようとしました。
同様のエラーが発生しました。

最終的に、「多分ここ時間かけるとこと違うな」と思ったので、
Webエディタ内のテストツールでテストを走らせたところ、問題なく完走したため、とりあえず提出します。

#### その他
