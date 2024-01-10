import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘세팅 } from "./BoardWrite.queries"; // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; // export default로 한개만 가져오기

// import Qqqqqqqqqqq from "./BoardWrite.presenter"; // export default로 이름 바꿔서 가져오기
// import Qqqqqqqqqqq,{apple} from "./BoardWrite.presenter"; // export default와 export 함께 가져오기
// import * as S from './BoardWrite.styles'  // export 한방에 다 가져오기
// //S.BlueButton    S.RedButton 이런 식으로 사용

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      $: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setIsActive(true);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    }
  };
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
    />
  );
}
