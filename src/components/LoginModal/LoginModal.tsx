import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Modal, Form, Input, Button } from "antd";

import { ImGoogle2, ImFacebook2, ImTwitter, ImAppleinc } from "react-icons/im";

import { useLoginModalAtom } from "@/atoms/loginModalOpenAtom";

import * as S from "./LoginModal.styled";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function LoginModal() {
  const [isModalOpen, setIsModalOpen] = useAtom(useLoginModalAtom);

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <Modal
      title="로그인"
      open={mounted && isModalOpen}
      footer={null}
      closable={true}
      width={350}
      onCancel={() => setIsModalOpen(false)}
      destroyOnClose
      centered
    >
      <S.FormWrapper>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
          autoComplete="on"
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item<FieldType>
            label=""
            name="email"
            rules={[{ required: true, message: "이메일 주소를 입력해 주세요" }]}
          >
            <Input placeholder="이메일 주소를 입력하세요" />
          </Form.Item>

          <Form.Item<FieldType>
            label=""
            name="password"
            rules={[{ required: true, message: "패스워드를 입력해 주세요" }]}
          >
            <Input.Password placeholder="패스워드를 입력하세요" />
          </Form.Item>

          <Form.Item className="button-wrapper">
            <Button type="primary" htmlType="submit">
              로그인
            </Button>
            <Button
              type="default"
              htmlType="submit"
              onClick={() => setIsModalOpen(false)}
            >
              취소
            </Button>
          </Form.Item>
        </Form>
      </S.FormWrapper>

      <S.SnsLoginWrapper>
        <ImGoogle2 id="google" />
        <ImFacebook2 id="facebook" />
        <ImTwitter id="twitter" />
        <ImAppleinc id="apple" />
      </S.SnsLoginWrapper>
    </Modal>
  );
}

export default LoginModal;
