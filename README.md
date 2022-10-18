
<div align="center">

  <h3>우아한테크캠프 KIOSK 프로젝트</h3>


 [![title](https://img.shields.io/badge/DEVELOPER-전별-blue)](https://github.com/jstella96)
  
 **데모링크**  http://52.79.251.179  
 **개발기간** 2022.08.01 ~ 2022.08.12 (리팩터링 기간 제외)

</div>


## 시연 화면

### 슬라이드
![kiosk-2](https://user-images.githubusercontent.com/76844355/196424552-1638758c-7e70-4349-9f85-37f06b462986.gif)
### 장바구니
![kiosk-1](https://user-images.githubusercontent.com/76844355/196424498-64629251-8a84-428c-b581-7447cbc47659.gif)
### 에러화면
![kiosk-3](https://user-images.githubusercontent.com/76844355/196424571-31d99c09-7e10-46c3-83b5-bd668db1c91b.gif)

### 주문 및 결제 


## Getting Started

### 1. Clone & Install Packages

```
git clone https://github.com/woowa-techcamp-2022/web-moneybook-03.git

cd client
npm install

cd ../server
npm install

cd ../graphql
npm install
```

### 2. Setup Environment Variables

```bash
# client root에 .env 파일 생성

##rest api server
REACT_APP_BACK_BASE_URL= 
##graphql server
REACT_APP_GRAPHQL_URL= 

```

```bash

# server root에 .env 파일 생성

MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_PORT=
PORT=
```

### 3. Run Application

```bash
# ./client
npm run start:dev

# ./server
npm run start

# ./graphql
npm run dev
```


## ERD
![image](https://user-images.githubusercontent.com/76844355/182856873-57c756b2-19c3-4e16-8ddc-94bc05ce5320.png)
