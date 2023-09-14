# DevCoop TeamPage

### 실핼방법

```
git clone https://github.com/DevCoopBSM/DevCoop_TeamPage_front.git
yarn
yarn start
```


### Commit Convention
```
SET : 프로젝트 세팅
FEAT : 새로운 기능, 특징 추가
FIX : 수정, 버그 수정
DOCS : 문서에 관련된 내용, 문서 수정
STYLE : 코드 포맷, 세미콜론 누락, 코드 변경이 없을 경우
REFACTOR : 리팩토링
TEST : 테스트 코드 수정, 누락된 테스트를 추가할 때, 리팩토링 테스트 추가
CHORE : 빌드 업무 수정, 패키지 매니저 수정
```

### Git FLow 전략
```
master : 제품으로 출시될 수 있는 브랜치***
develop : 다음 출시 버전을 개발하는 브랜치
feature : 기능을 개발하는 브랜치
release : 이번 출시 버전을 준비하는 브랜치
hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치
```

### 브랜치 생성 후 커밋
```
git checkout -b [브랜치명]
git add .
git commit -m [커밋 컨벤션]
git push origin [브랜치명]
```

### 브랜치 명 예시
```
ex. 로그인 기능 개발
- feature/login

ex2. 로그인 기능 버그 수정
- hotfix/login
```
