interface EntriesProps {
  router: any;
  Link: any;
}

function Todo({ router, Link }: EntriesProps) {
  return (
    <div className="todo">
      <div>todo!!!!!</div>
      <div onClick={() => router.push('/calculator')}>계산기로 이동</div>
      <Link href="/">홈으로 이동(클라이언트사이드 라우팅)</Link>
      <div>
        <a href="/">홈 앵커!(서버사이드 라우팅)</a>
      </div>
    </div>
  );
}

export default Todo;
