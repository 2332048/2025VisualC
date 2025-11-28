// 税率を定数として定義
const TAX_RATE = 0.10;

// 計算処理をまとめた関数
function calculate() {
    // 1. HTML要素から値を取得
    const coursePrice = Number(document.getElementById('course').value);
    const personCount = Number(document.getElementById('person-count').value);
    
    // 必須入力項目のチェック
    if (personCount === 0 || isNaN(personCount)) {
        alert("人数を正しく入力してください。");
        return;
    }

    // 2. 基本料金の計算
    let totalPrice = coursePrice * personCount;

    // 3. オプション料金の加算
    
    // 飲み放題 (人数分)
    if (document.getElementById('nomihodai').checked) {
        const nomihodaiPrice = Number(document.getElementById('nomihodai').value);
        totalPrice += nomihodaiPrice * personCount;
    }
    
    // サプライズプレート (テーブル単位)
    if (document.getElementById('surprise').checked) {
        const surprisePrice = Number(document.getElementById('surprise').value);
        totalPrice += surprisePrice;
    }

    // 4. 税抜・税込の計算
    const totalTaxExcluded = totalPrice;
    // 小数点以下を切り捨て/四捨五入して整数にする（お店の計算ルールによる）
    const totalTaxIncluded = Math.round(totalTaxExcluded * (1 + TAX_RATE));
    
    // 5. 一人あたりの計算
    const perPersonPrice = Math.round(totalTaxIncluded / personCount);

    // 6. 結果の表示 (HTMLの要素を更新)
    document.getElementById('total-price-tax-excluded').textContent = totalTaxExcluded.toLocaleString();
    document.getElementById('total-price').textContent = totalTaxIncluded.toLocaleString();
    document.getElementById('per-person-price').textContent = perPersonPrice.toLocaleString();
}

// ページロード時に一度計算を実行 (初期値を表示するため)
// 講義資料の例（onclick="tasu()"）と同様に、ボタン押下時にも実行される
window.onload = calculate;