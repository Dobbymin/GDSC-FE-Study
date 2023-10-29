/** 객체 리터럴 방식 */
let currencyRatio = {
    USD: {
        KRW: 1356.22,
        USD: 1,
        VND: 24580.0,
        unit: '달러',
    },
    KRW: {
        KRW: 1,
        USD: 0.00074,
        VND: 18.12,
        unit: '원',
    },
    VND: {
        KRW: 0.055,
        USD: 0.000041,
        VND: 1,
        unit: '동',
    },
};

let fromCurrency = 'USD';

/** id 가 from-currency-list 인데, 그 안에서 a 태그들 */
document.querySelectorAll('#from-currency-list a').forEach((menu) =>
    menu.addEventListener('click', function () {
        // 1. 버튼을 가져온다
        // document.getElementById('from-button');
        // 2. 버튼의 값을 바꾼다.
        document.getElementById('from-button').textContent = this.textContent;
        // 3. 선택된 currency 값을 변수에 저장해둔다.
        fromCurrency = this.textContent;
        console.log(`fromCurrency는 ${fromCurrency}`);
    })
);

let toCurrency = 'USD';

/** id 가 to-currency-list 인데, 그 안에서 a 태그들 */
document.querySelectorAll('#to-currency-list a').forEach((menu) =>
    menu.addEventListener('click', function () {
        // 1. 버튼을 가져온다
        // document.getElementById('from-button');
        // 2. 버튼의 값을 바꾼다.
        document.getElementById('to-button').textContent = this.textContent;
        // 3. 선택된 currency 값을 변수에 저장해둔다.
        toCurrency = this.textContent;
        console.log(`toCurrency는 ${toCurrency}`);
    })
);
// document.querySelectorAll('#to-currency-list a');

// console.log(document.querySelectorAll('#from-currency-list a'));
