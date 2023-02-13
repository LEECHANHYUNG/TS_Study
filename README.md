### Typescript - 자동 실행 구성

### npm 설치

```
npm init -y
```

### Typescript 설치

```
npm init -g typescript
```

### tsconfig.json 파일 생성

```
tsc --init
```

### tsconig.json에서 입출력 파일 위치 지정

```
"rootDir": "./src" /* Specify the root folder within your source files. */,
    ...
"outDir": "./build" /* Specify an output folder for all emitted files. */,
```

### 자동 실행 설정

```
npm i nodemon concurrently
```

**nodemon** : 코드 변경 시, 서버 자동 재실행
**concurrently** : 동시에 여러 명령을 실행

### scripts 구성

```
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```
