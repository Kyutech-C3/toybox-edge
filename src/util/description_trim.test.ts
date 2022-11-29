import { trimDescription } from "./description_trim";

test("test", () => {
  const original =
    "# GoWithMe\n作曲：鳩屋敷\n作詞：[Shikaki](https://shikaki.diatonic.codes)\n\n## 概要\n\n大学3年の春に，J-POPみたいなフルの曲を作りたいなと思いチャレンジ．なんか勢いで書き進めたら手が進んでくれたので完成しました．\nAIきりたんを勉強したら意外と簡単に作れたのでShikakiというサービスで作詞しAIきりたんに歌わせました．\n人工知能様様ですね．\n\n## 歌詞\n\n太陽の光が照らす\n大きく息を吸い込んでいる\nキミと見た青空の下\n魔法のメロディー\nGo With Me\n\n追憶の音が 耳に響く\n真昼の太陽 目指して飛び立とう\n世界の果てまで 風が運ぶ\nまばゆく輝く 季節の中で\n\nハッピーエンドロール 呼べるように 時は過ぎてゆく\nこの地球の果てで 出会えるから\nだから あきらめず\n\n太陽の光が照らす\n大きく息を吸い込んでいる\nキミと見た青空の下\n魔法のメロディー\nGo With Me\n\n元気でいますか?\nずっとずっと 歌っているから\n繋がっているから\nいつまでもずっと 待ち続けて\n明日へ続く道 思い出すから\n\nさよならは言わないで そばにいるよ\nキミがいなくても 歌い続けているよ 聞こえますか?\n笑おう 果てない空\n\nまぶしい光が照らすよ 命を燃やし続けているよ\nどこまでも続いてゆくよ 大切なメロディ Go With Me\n\n飛んでゆくよ 世界の果てまで Go\n\n空高く羽ばたいてゆく\n小さく息を吸い込んでいる\n諦めない夢の続きを\nいつまでもいつまでも\n\n(※)太陽の光が照らす\n大きく息を吸い込んでいる\nキミと見た青空の下\n魔法のメロディー\nGo With Me\n\n(※繰り返し)\n\n奏で続けている Go With Me\n";
  const shouldBe = `# GoWithMe
作曲：鳩屋敷
作詞：[Shikaki](https://shikaki.diatonic.codes)

## 概要

人工知能様様ですね．

## 歌詞

太陽の光が照らす...`;
  expect(trimDescription(original)).toBe(shouldBe);
});
