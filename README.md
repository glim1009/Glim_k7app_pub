# shadcn component 추가

```shell
npx shadcn-vue@latest add {컴포넌트명}
```

만일 [GET] "https://www.shadcn-vue.com/registry/styles/index.json": <no response> fetch failed 오류가 발생하면 다음 옵션을 추가 한 후 다시 실행하면 됩니다.

- cmd
```shell
set NODE_TLS_REJECT_UNAUTHORIZED=0
```

- powershell
```powershell
$Env:NODE_TLS_REJECT_UNAUTHORIZED=0
```