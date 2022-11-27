# toybox-edge

## これはなに？

ToyBox にて、Nuxt の SSR を有効にせず動的 OGP を HTML 上に付与するために開発された Cloudflare Workers

フロントエンド(`toybox.compositecomputer.club`)の前段に置かれ、然るべきパスの HTTP ファイルリクエストが来た場合に、Workers から API を叩いて情報を取得し、HTML のメタタグを書き換えて返却する
