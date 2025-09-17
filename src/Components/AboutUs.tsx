import React from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { Form, Input, Button, Card, Typography } from "antd";
import developerPhoto from "../assets/personPhotos/profilePic.jpg";

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const AboutUs: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
    form.resetFields();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Profile Card */}
        <Card className="rounded-2xl shadow-lg">
          <div className="flex items-center gap-4">
            <img
              src={developerPhoto}
              alt="Developer"
              className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Rohit Ghatal
              </h3>
              <p className="text-gray-600">Full Stack Web Developer</p>
            </div>
          </div>

          <Paragraph className="mt-4 text-gray-700 leading-relaxed">
            A passionate developer with a knack for designing modern,
            user-friendly interfaces. My journey began with curiosity for web
            design and has evolved into a fulfilling career in full stack web
            development.
          </Paragraph>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-3">
              Follow me:
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/rohit.rohit.ghatal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/_rohit.ghatal_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/rohitghatal1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 text-white hover:bg-black transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </Card>

        {/* Contact Form */}
        <Card className="rounded-2xl shadow-lg">
          <Title level={3} className="text-gray-800 mb-4">
            Send Message
          </Title>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            autoComplete="off"
          >
            <Form.Item
              name="uName"
              label="Your Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>

            <Form.Item
              name="uEmail"
              label="Your Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email address" },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item name="uSubject" label="Subject">
              <Input placeholder="Subject" />
            </Form.Item>

            <Form.Item
              name="uMessage"
              label="Message"
              rules={[{ required: true, message: "Please enter a message" }]}
            >
              <TextArea rows={4} placeholder="Message" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                className="flex items-center justify-center"
              >
                Send
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
