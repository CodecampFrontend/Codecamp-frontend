import { useMutation, gql } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { 나의그래프큐엘세팅, UPDATE_BOARD } from "./BoardWrite.queries"; // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; // export default로 한개만 가져오기
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyvarialbes } from "./BoardWrite.types";

// import Qqqqqqqqqqq from "./BoardWrite.presenter"; // export default로 이름 바꿔서 가져오기
// import Qqqqqqqqqqq,{apple} from "./BoardWrite.presenter"; // export default와 export 함께 가져오기
// import * as S from './BoardWrite.styles'  // export 한방에 다 가져오기
// //S.BlueButton    S.RedButton 이런 식으로 사용

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(
      `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myvariables: IMyvarialbes = {
      number: Number(router.query.number),
    };

    if (writer) {
      myvariables.writer = writer;
    }
    if (title) {
      myvariables.title = title;
    }
    if (contents) {
      myvariables.contents = contents;
    }

    const result = await updateBoard({
      variables: myvariables,
    });
    router.push(
      `/section10/10-02-typescript-boards${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data} // undefined이거나 , data이거나 둘 중 하나
    />
  );
}
