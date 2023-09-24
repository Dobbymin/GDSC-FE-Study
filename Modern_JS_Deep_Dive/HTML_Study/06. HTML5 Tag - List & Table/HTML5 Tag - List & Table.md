# HTML5 Tag - List & Table

# 1. 목록 (List)

## 1.1 순서없는 목록 (Unordered List)

```html
<!DOCTYPE html>
<html>
    <body>
        <h2>순서없는 목록 (Unordered List)</h2>
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
    </body>
</html>
```

![스크린샷 2023-09-24 오후 11.32.31.png](./img/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-24_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.32.31.png)

## **1.2 순서있는 목록 (Ordered List)**

```html
<!DOCTYPE html>
<html>
    <body>
        <h2>순서있는 목록 (Ordered List)</h2>
        <ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ol>
    </body>
</html>
```

![스크린샷 2023-09-24 오후 11.32.57.png](./img/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-24_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.32.57.png)

-   **type** 어트리뷰트를 사용하여 순서를 나타내는 문자를 지정할 수 있다
    | Value | Description |
    | ----- | --------------- |
    | “1” | 숫자 (기본값) |
    | “A” | 대문자 알파벳 |
    | “a” | 소문자 알파벳 |
    | “I” | 대문자 로마숫자 |
    | “i” | 소문자 로마숫자 |

```html
<ol type="I">
    <li value="2">Coffee</li>
    <li value="4">Tea</li>
    <li>Milk</li>
</ol>
```

![스크린샷 2023-09-24 오후 11.33.45.png](./img/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-24_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.33.45.png)

-   **start** 어트리뷰트로 리스트의 시작값을 지정할 수 있다.

```html
<ol start="3">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>
```

![스크린샷 2023-09-24 오후 11.34.40.png](./img/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-24_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.34.40.png)

-   **reversed** 어트리뷰트를 지정하면 리스트의 순서값을 역으로 표현한다.

```html
<ol reversed>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>
```

![스크린샷 2023-09-24 오후 11.35.49.png](./img/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-24_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.35.49.png)

## **1.3 중첩 목록**

```html
<!DOCTYPE html>
<html>
    <body>
        <h2>중첩 목록</h2>
        <ul>
            <li>Coffee</li>
            <li>
                Tea
                <ol>
                    <li>Black tea</li>
                    <li>Green tea</li>
                </ol>
            </li>
            <li>Milk</li>
        </ul>
    </body>
</html>
```

![스크린샷 2023-09-24 오후 11.36.34.png](./img/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-24_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.36.34.png)

# **2. 테이블**

-   표(table)를 만들 때 사용하는 태그이다.
-   과거에는 테이블 태그를 사용하여 레이아웃을 구성하기도 하였으나 모던 웹에서는 주로 공간 분할 태그인 div 태그를 사용하여 레이아웃을 구성한다.

| tag   | Description                       |
| ----- | --------------------------------- |
| table | 표를 감싸는 태그                  |
| tr    | 표 내부의 행 (table row)          |
| th    | 행 내부의 제목 셀 (table heading) |
| td    | 행 내부의 일반 셀 (table data)    |

![https://poiemaweb.com/img/html_table_structure.gif](https://poiemaweb.com/img/html_table_structure.gif)

```html
<!DOCTYPE html>
<html>
    <body>
        <table border="1">
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
            </tr>
            <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
            </tr>
            <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
            </tr>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>80</td>
            </tr>
        </table>
    </body>
</html>
```

테이블 태그의 어트리뷰트는 아래와 같다.

| attribute | Description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| border    | 표 테두리 두께 지정. (CSS border property를 사용하는 것이 더 나은 방법이다.) |
| rowspan   | 해당 셀이 점유하는 행의 수 지정                                              |
| colspan   | 해당 셀이 점유하는 열의 수 지정                                              |

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            table,
            th,
            td {
                border: 1px solid black;
                border-collapse: collapse;
            }
            th,
            td {
                padding: 15px;
            }
        </style>
    </head>
    <body>
        <h2>2개의 culumn을 span</h2>
        <table>
            <tr>
                <th>Name</th>
                <th colspan="2">Telephone</th>
            </tr>
            <tr>
                <td>Bill Gates</td>
                <td>555 77 854</td>
                <td>555 77 855</td>
            </tr>
        </table>

        <h2>2개의 row를 span</h2>
        <table>
            <tr>
                <th>Name:</th>
                <td>Bill Gates</td>
            </tr>
            <tr>
                <th rowspan="2">Telephone:</th>
                <td>555 77 854</td>
            </tr>
            <tr>
                <td>555 77 855</td>
            </tr>
        </table>
    </body>
</html>
```
