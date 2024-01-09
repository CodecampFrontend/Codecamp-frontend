import styled from "@emotion/styled";

export default function post() {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Input placeholder="이름을 적어주세요" />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input placeholder="비밀번호를 적어주세요" />
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Input placeholder="제목을 작성해주세요" />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <TextArea placeholder="내용을 작성해주세요" />
      </InputWrapper>
      <AddressWrapper>
        <Label>내용</Label>
        <AddressFindWrapper>
          <Input placeholder="07250" />
          <AddressBtn>우편번호 검색</AddressBtn>
        </AddressFindWrapper>

        <Input />
        <Input />
      </AddressWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <TextArea placeholder="링크를 복사해주세요" />
      </InputWrapper>
      <InputWrapper>
        <Label>사진첨부</Label>
      </InputWrapper>
      <InputWrapper>
        <Label>메인 설정</Label>
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1200px;
  padding: 102px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2``;

const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.h4``;
const Input = styled.input`
  height: 52px;
  width: 100%;
  border: 1px solid rgba(189, 189, 189, 1);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid rgba(189, 189, 189, 1);
`;
const AddressWrapper = styled.div`
  width: 100%;
  height: 242px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const AddressFindWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddressBtn = styled.button`
  width: 124px;
  height: 52px;
  background: rgba(0, 0, 0, 1);
  color: white;
`;
