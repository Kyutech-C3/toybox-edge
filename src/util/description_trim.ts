/**
 *
 * @param description 短縮する前の説明文
 * @param length 最大文字数
 */
export function trimDescription(
  description: string,
  maxLength: number = 100,
  extension: string = "..."
) {
  const lines = description.split("\n");

  let isTrimed = false;
  let trimed = lines.reduce((prev, current) => {
    if (prev.length + current.length > maxLength - extension.length) {
      isTrimed = true;
      return prev;
    }
    return prev + "\n" + current;
  });

  // 文字がオーバーしていたらextensionを付加する
  return isTrimed ? trimed + extension : trimed;
}
