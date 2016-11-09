"use strict";



/**
 * コマンドラインで入力された値を引数に、各値について処理を行います。
 * 実際の処理はcheckString関数で行います。
 *
 * @param argv {string[]} コマンドライン引数の配列
 */
function main(argv) {
    argv.forEach(v => checkString(v));
}



/**
 * ひとつの文字列について検査を行い、結果を出力します。
 *
 * @param value {string} 検査対象の値
 */
function checkString(value) {

    // numberにパースしてみる
    const numValue = Number(value);

    // ちゃんと変換できたかどうか
    const isNumber = !isNaN(numValue);

    if (isNumber) {
        // 数値にはなったとき

        // 3の倍数かどうか
        const multipleOfThree = numValue % 3 === 0;

        // 3がつくかどうか
        let hasThree = false;
        for (let i = 0; i < value.length; i++) {
            if (value.charAt(i) === '3') {
                hasThree = true;
                break;
            }
        }

        if (multipleOfThree && hasThree) {
            // 3の倍数でかつ3のつく数のとき
            console.log('dumb');

        } else if (multipleOfThree) {
            // 3の倍数のとき
            console.log('idiot');

        } else if (hasThree) {
            // 3のつく数のとき
            console.log('stupid');

        } else {
            // その他の数値のとき
            console.log('smart');

        }

    } else {
        // 数値ではないとき
        console.log('invalid');

    }

}



module.exports = main;
