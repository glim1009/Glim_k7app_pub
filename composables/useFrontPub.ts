


export function routePageGoBack() {
  const router = useRouter();
  //console.log('{ routePageGoBack }');
  console.log('{ router }', router);
  if (router) {
      router.go(-1);
  }
}
