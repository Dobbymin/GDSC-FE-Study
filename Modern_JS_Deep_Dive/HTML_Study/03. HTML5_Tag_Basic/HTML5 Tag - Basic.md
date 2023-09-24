# HTML5 Tag - Basic

: 3
날짜: 2023년 9월 24일

# 1. head tag

### head 요소

-   메타데이터를 포함하기 위한 요소
    -   메타데이터 : HTML 문서의 title, style, link, script에 대한 데이터로, 화면 표시 X
-   웹페이지에 단 하나만 존재한다.
-   메타데이터 이외의 화면에 표시되는 일체의 요소 포함 X

## 1-1. title tag

### title 요소

-   문서의 제목을 정의
-   정의된 제목은 브라우저의 탭에 표시된다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>문서 제목</title>
    </head>
    <body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </body>
</html>
```

### style tag

-   HTML 문서를 위한 style 정보를 정의한다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>문서 제목</title>
        <style>
            body {
                background-color: yellow;
                color: blue;
            }
        </style>
    </head>
    <body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </body>
</html>
```

![스크린샷 2023-09-24 오후 1.02.32.png](./img/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-24_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_1.02.32.png)

### link tag

-   외부 리소스와의 연계 정보를 정의한다.
-   주로 HTML과 외부 CSS 파일을 연계에 사용된다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>문서 제목</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </body>
</html>
```

### **script tag**

-   client-side JavaScript를 정의한다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <script>
            document.addEventListener('click', function () {
                alert('Clicked!');
            });
        </script>
    </head>
    <body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </body>
</html>
```

![스크린샷 2023-09-24 오후 1.09.52.png](./img/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-24_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_1.09.52.png)

-   src 어트리뷰트를 사용하면 외부 JavaScript 파일을 로드할 수 있다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <script src="main.js"></script>
    </head>
    <body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </body>
</html>
```

### **meta tag**

-   description, keywords, author, 기타 메타데이터 정의에 사용된다.
-   메타데이터는 브라우저, 검색엔진(keywords) 등에 의해 사용된다.
-   charset 어트리뷰트는 브라우저가 사용할 문자셋을 정의한다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
    </head>
    <body>
        <p>안녕하세요</p>
        <p>Hello</p>
        <p>こんにちは</p>
        <p>你好</p>
        <p>שלום</p>
        <p>สวัสดี</p>
    </body>
</html>
```

![스크린샷 2023-09-24 오후 2.06.43.png](./img/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-09-24_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_2.06.43.png)

-   SEO(검색엔진 최적화)를 위해 검색엔진이 사용할 keywords을 정의한다.

```html
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript" />
```

-   웹페이지의 설명을 정의한다.

```html
<meta name="description" content="Web tutorials on HTML and CSS" />
```

-   웹페이지의 저자을 명기한다.

```html
<meta name="author" content="John Doe" />
```

-   웹페이지를 30초 마다 Refresh한다.

```html
<meta http-equiv="refresh" content="30" />
```

# 2. body tag

-   HTML 문서의 내용을 나타내며 웹페이지에 단 하나만 존재한다.
-   메타데이터를 제외한 웹페이지를 구성하는 대부분의 요소가 body 요소 내에 기술된다.

```html
<html>
    <head>
        <meta charset="utf-8" />
        <title>문서 제목</title>
    </head>
    <body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </body>
</html>
```
