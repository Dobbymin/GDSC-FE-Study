# Hello HTML5

: 1
날짜: 2023년 9월 22일

# 1. HTML5

HTML (HyperText Markup Language)은 웹페이지를 기술하기 위한 마크업 언어이다.

내용(content)과 구조(structure)을 담당하는 언어.

# 2. Hello HTML5

-   `<head>` 와 `</head>` 사이에는 document title, 외부 파일의 참조, 메타데이터의 설정 등이 위치하며 이 정보들은 브라우저에 표시 X
-   웹브라우저에 출력되는 모든 요소는 `<body>`와 `</body>` 사이에 위치한다.

```html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello World</title>
    </head>
    <body>
        <h1>안녕하세요!</h1>
        <p>안녕하세요! HTML5</p>
    </body>
</html>
```

![스크린샷 2023-09-22 오후 8.39.07.png](./Hello%20HTML5/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-22_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_8.39.07.png)

# 3. HTML5의 기본 문법

## 3.1 요소 (Element)

### 3.1.2 빈 요소 (Empty Element)

content를 가질 수 없는 요소를 빈 요소라 한다. 아래의 예와 같이 빈 요소는 content가 없으며(필요가 없다) 어트리뷰트(Attribute)만을 가질 수 있다.

```html
<meta charset="utf-8" />
```

빈 요소 중 대표적인 요소는 아래와 같다.

-   br
-   hr
-   img
-   input
-   link
-   meta

## 3.2 어트리뷰트 (Attribute)

어드리뷰트 : 요소의 성질, 특징을 정의하는 명세.

-   어트리뷰트는 요소에 추가적 정보 (이미지파일의 경로, 크기 등) 을 제공한다.

![Untitled](./Hello%20HTML5/Untitled.png)

```html
<img src="html.jpg" width="104" height="142" />
```

`src` : 이미지 파일의 경로와 파일명, `width` : 이미지의 너비, `height` : 이미지의 높이 정보

### 3.2.1 글로벌 어트리뷰트

| Attribute | Description                                                                                |
| :-------: | ------------------------------------------------------------------------------------------ |
| id        | 유일한 식별자(id)를 요소에 지정한다. 중복 지정 X                                           |
| class     | 스타일시트에 정의된 class를 요소에 지정한다. 중복 지정 O                                   |
| hidden    | css의 hidden과는 다르게 의미상으로도 브라우저에 노출되지 않게 된다.                        |
| lang      | 지정된 요소의 언어를 지정한다. 검색엔진의 크롤링 시 웹페이지의 언어를 인식할 수 있게 한다. |
| style     | 요소에 인라인 스타일을 지정한다.                                                           |
| tabindex  | 사용자가 키보드로 페이지를 네비게이션 시 이동 순서를 지정한다.                             |
| title     | 요소에 관한 제목을 지정한다.                                                               |

[HTML5: Global attributes](https://www.w3.org/TR/2010/WD-html-markup-20101019/global-attributes.html)

Global attibutes
