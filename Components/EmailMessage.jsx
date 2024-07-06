import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

const MessageUsEmail = ({ name, email, message, tel }) => {
  const previewText = "Xettle Technologies";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Heading className="text-black text-[20px] font-normal text-left">
              <strong>New Message from Xettle Webform,</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Name: {name}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              E-mail: {email}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Contact No.: {tel}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Message: {message}
            </Text>
            <Hr className="my-[16px] mx-0 w-full" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessageUsEmail;
