import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  padding: 15px 0;

  .ant-form {
    display: flex;
    flex-direction: column;
    gap: 18px;

    .ant-form-item {
      margin-bottom: 0;

      &.button-wrapper {
        display: flex;
        justify-content: end;
        align-items: center;

        .ant-form-item-control-input-content {
          display: flex;
          gap: 10px;
        }
      }

      .ant-form-item-explain-error {
        margin-top: 5px;
      }
    }
  }
`;

export const SnsLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 20px;
  padding-top: 18px;
  border-top: 1px solid #e6e6e6;

  svg {
    margin: auto;
    width: 35px;
    height: 35px;
    cursor: pointer;

    &:hover {
      background-color: #f0f1f1;
    }
  }

  #google {
    fill: #4285f4;
  }

  #facebook {
    fill: #4267b2;
  }

  #twitter {
    fill: #1da1f2;
  }

  #apple {
    fill: #000000;
  }
`;
