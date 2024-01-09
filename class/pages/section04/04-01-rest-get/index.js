import axios from "axios";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("https://kreanjson.com/posts/1");
    console.log(result); // Promise
  }

  //   async function onClickSync() {
  //     const result = await axios.get("https://kreanjson.com/posts/1"); =>  함수 중복 선언 문제
  //     console.log(result); // 제대호 된 결과 => {title:"....",}
  //   }

  const onClickSync = async () => {
    const result = await axios.get("https://kreanjson.com/posts/1");
    console.log(result); // 제대호 된 결과 => {title:"....",}
  };

  return (
    <div>
      <button>Rest-API(비동기) 요청하기</button>
      <button>Rest-API(동기) 요청하기</button>
    </div>
  );
}
