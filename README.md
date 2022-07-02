# Next + Module Federation

webpack module federation 환경에서, next를 얼마나 써먹을 수 있을까

## 설계

- [ ] Next에서 페이지 하나당 single entry를 가지는 federated module과 SSG/ISR fallback
- [ ] (될까?) 적당(?)하게 공통 의존성 들고있기
- [ ] (될까?) SSR 사용
- [ ] 공통요소를 배포하는 것으로 변경사항 적용하기
- [ ] 봐줄만한 DX

## 느낀점

- 모듈 공유의 난이도가 수직상승한다........
- 호스트에서 리모트 주소를 dev, prod에 따라 바꿔치우면 될듯
- Next를 동원하는 fast refresh에 좀 애로가 있을듯함. "그 라이브러리" 쓰면 해결될 수도 있긴 함
  - 근데 또... 어찌어찌 해서 한 모듈(react app)만 수정할 수 있는 환경을 만들어주면 또 어찌어찌..?
    - 이런 경우에 요청에 필요한 쿠키 등의 정보는 또 손으로 넣어줘야하는디
  - 여러가지 모듈이 호스트앱에 어떻게 붙는지를 보고 싶다면 fast-refresh 포기해야함
  - 배포 단위를 하나의 앱만 수정할 수 있을... 니즈를 가지고 진행되어야 하면 좋을 것 같음
- Next는 청킹할때 React, React-dom을 묶어서 framework 번들로 만들어내는데, 그 아래 federation는 이 번들을 사용할 수 있나?
  - 딱 봤을때는 못하는거같긴한데, React를 두번 불러오지는 또 않는것 같아서
  - 뭔가 module federation만의 번들 불러오는 그런 무언가가 있나 싶음

## 대안..?

## 의문점

- next는 어디까지 역할을 할까?
- remote앱들 굳이 package의 형태를 취해야 할까? 혹은 하나하나가 배포단위라고 보면?
- next에서 잘 있을 수 있게 즉당한 구조를 가질 수 있게 해야한다.
