# Next + Module Federation

webpack module federation 환경에서, next를 얼마나 써먹을 수 있을까

## 설계

- [ ] Next에서 페이지 하나당 single entry를 가지는 federated module과 SSG/ISR fallback
- [ ] (될까?) 적당(?)하게 공통 의존성 들고있기
- [ ] (될까?) SSR 사용
- [ ] 공통요소를 배포하는 것으로 변경사항 적용하기
- [ ] 봐줄만한 DX

## 의문점

- next는 어디까지 역할을 할까?
- remote앱들 굳이 package의 형태를 취해야 할까? 혹은 하나하나가 배포단위라고 보면?
- next에서 잘 있을 수 있게 즉당한 구조를 가질 수 있게 해야한다.
