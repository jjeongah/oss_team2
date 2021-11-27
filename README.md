# Project - SBKU(습관을 꾸준하게) App

## A Brief Overview
-   사람이 한 가지 습관을 형성하는 데에는 평균 66일 정도가 소요된다고 합니다. 이처럼 좋은 습관을 형성하기 위해서는 꾸준함이 필요하지만 ‘작심삼일’이라는 사자성어처럼 목표를 계획할 때의 마음가짐이 실천까지 지속되기란 매우 어렵습니다. 
-   “습꾸”는 사용자가 좋은 습관 형성 목표를 꾸준히 실천할 수 있도록 도움을 주는 어플리케이션입니다. 유저는 “습꾸”를 사용해 현재 진행 중인 목표를 확인하고, 매일매일 그날의 실천 현황을 기록하면서 목표를 실천할 수 있습니다. 또한 기간 별 보상 설정을 통해 사용자에게 더욱 강한 동기부여를 제공할 것으로 기대됩니다.
<img src="https://user-images.githubusercontent.com/65378914/143661956-7ec1ee90-1de0-4f31-9685-cff4e5c447ca.png"  width="300" height="200"/>


## Example

- 메인 페이지
<img src="https://user-images.githubusercontent.com/65378914/143680765-a7df1c54-2f4e-47da-9d95-e53f7ec7b6c3.png"  width="80%"/>


- 추가하기 페이지
<img src="https://user-images.githubusercontent.com/65378914/143680767-c7216ca7-04cf-4d0d-b4ad-bc98887c0a5b.png"  width="80%"/>


- 세부 내용 및 기간 선택 페이지
<img src="https://user-images.githubusercontent.com/65378914/143680768-789b9655-f624-4e15-b703-98f27f2df5b7.png"  width="80%"/>


- 관리하기 페이지 (아래 사진은 습관을 등록하지 않았을 때의 화면입니다. 습관을 추가할 경우, 목록에 추가됩니다)
<img src="https://user-images.githubusercontent.com/65378914/143681090-8566b83c-2ca0-49d9-88e9-c67b0a49a575.png"  width="80%" height="30%"/>


- 오늘 기록 페이지
<img src="https://user-images.githubusercontent.com/65378914/143680762-36f5f5ac-9c7f-4120-9fa7-329103ba8d82.png"  width="80%"/>


- 보상추가 페이지
<img src="https://user-images.githubusercontent.com/65378914/143680763-1d16b7bf-a448-4e0f-b83e-1161d3b4bb70.png"  width="80%"/>


## Installation

- [GitHub Repo](https://github.com/jjeongah/oss_team2)에서 SPKU-win32-x64.zip 파일을 다운받으세요
- zip 파일의 압축을 해제하세요
- oss_team2-main.exe 파일을 실행하세요


## How to use

1. 새 습관 추가하기 버튼을 눌러 습관을 추가하세요.


   SBKU(습꾸)는 운동, 공부, 취미, 감정관리 카테고리마다 설정할 습관을 추천해줍니다.
2. 추가할 습관을 기록하고 기간을 선택하세요.(7일, 30일, 100일) 추가하기 버튼을 누르면 새로운 습관 추가가 완료됩니다.
5. 내 습관을 관리하기 위해 습관 관리하기 버튼을 누르세요.
6. 나의 습관에서 관리할 습관을 선택 후 오늘 기록 추가하기 / 보상 추가하기 버튼을 통해 내용을 작성할 수 있습니다.
7. 오늘 기록 추가하기에서 기분 스티커를 눌러 오늘 습관을 실행한 기분을 추가해보세요


## 1. Releases

-   v.1.0.0 - 습관 추가 및 관리 기능 추가


## 2. History

1. 필요한 기능을 정리하고 이에 따른 페이지 구성을 디자인한다.(완료)
<img src="https://user-images.githubusercontent.com/65378914/143661947-cc5a4844-e344-4909-8f15-1972ebeff856.jpg"  width="80%"/>

2. 페이지별로 파트를 나누고 각자 맡은 페이지의 HTML 문서 틀을 작성하고 CSS 파일을 제작한다.(완료)

3. CSS 디자인에 대한 피드백을 진행하고 이를 반영한다. 불필요한 기능은 제외한다.(완료)

4. 각자 맡은 파트의 기능을 js 문서를 통해 1차 구현한다.(완료) 
   electron 사용한 패키징과, 기능 작동 여부를 확인하려고 하였으나 오류로 설치가 불가했음.(이후에 해결 완료)
   
5. 구현한 기능을 디벨롭하고 사용자 환경에 따른 작동 여부를 확인한다. (완료)

6. Electron 패키징 오류를 해결하고 기능 작동여부를 확인한다. (완료)


## 3. Future

-   같은 기간에 습관이 여러 개 추가될 시 개별 표시하기 위한 기능을 추가해야 합니다.
-   스티커판이 7일 기간에만 제공되고 있습니다. 30일, 100일 스티커판도 추가할 예정입니다.


## 4. Code of Conduct

-   각자 코드를 작성한 후 테스팅 후에 main branch에 커밋하기 
    (이를 위해 개인별로 작업하는 페이지가 다르도록 코드 충돌이 없는 역할 분담을 진행하였음)
-   커밋 시 세부내용을 기술해주기
-   매주 화요일 9시 온라인 회의를 진행하며 진행상황 보고 및 피드백


## 5. Work

-   이정아:

> 1. main page, <관리하기> page 화면 개발
> 2. <세부내용 및 기간 선택> page: localstorage를 활용한 기능 구현
> 3. 전체적인 일정 조정 및 회의 관리, 역할 분담

-   김혜영:

> 1. <추가하기>, <세부내용 및 기간 선택> page 화면 개발
> 2. main page: localstorage를 활용한 기능 구현
> 3. desktop app으로 publish

-   김현성:

> 1.  <오늘기록>, <보상추가> page 화면 개발
> 2.  <오늘기록>, <보상추가> page: localstorage를 활용한 기능 구현
> 3. desktop app으로 publish


## 7. [License](https://github.com/jjeongah/oss_team2/blob/main/LICENSE)(Click it!)
