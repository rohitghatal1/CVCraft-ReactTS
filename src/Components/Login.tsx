/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Spin } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import notificationShow, { showErrorMessage } from "../utils/notificationShow";
import BizforceLogo from "../../public/logo.png";

const Login = () => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const [showBizforceLogoOnly, setShowBizforceLogoOnly] =
    useState<boolean>(true);

  useEffect(() => {
    const isWeb = window.location.href.includes("https://web");
    setShowBizforceLogoOnly(isWeb);
  }, []);

  useEffect(() => {
    let apikey = localStorage.getItem("api");
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) window.location.href = "/customers";

    if (!apikey) {
      const myAddr = window.location.hostname;

      if (myAddr.includes("cvcraft")) {
        localStorage.setItem("api", "https://api.bizforce360.com");
      } else {
        localStorage.setItem("api", `http://${myAddr}:8882`);
      }

      apikey = "https://api.bizforce360.com";
      location.replace("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-[36rem] space-y-8">
        {!window.location.hostname.includes("cartlyo") && (
          <div className="flex flex-col items-center">
            <img
              src={BizforceLogo}
              alt="CV craft Logo"
              className="h-16 w-auto mb-2"
            />
            {!showBizforceLogoOnly && (
              <div className="text-center">
                <h2 className="text-lg font-medium text-blue-800">CV Craft</h2>
              </div>
            )}
          </div>
        )}

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Log in to your account
          </h1>

          <Form
            autoComplete="off"
            size="middle"
            layout="vertical"
            form={form}
            className="space-y-4"
            onFinish={async (values) => {
              try {
                setLoading(true);
                await form.validateFields();

                const response = await axiosInstance.post(
                  "/users/login",
                  values
                );
                localStorage.setItem("accessToken", response.data.accessToken);

                notificationShow({
                  type: "success",
                  content: "User logged in successfully",
                });

                form.resetFields();
                window.location.href = "/dashboard";
              } catch (error: any) {
                showErrorMessage(error?.response?.data?.message);
              } finally {
                setLoading(false);
              }
            }}
          >
            <Form.Item
              name="number"
              label={
                <span className="text-gray-700 font-medium">Mobile Number</span>
              }
              rules={[
                { required: true, message: "Contact number is required" },
              ]}
            >
              <Input
                type="number"
                className="h-10 rounded-md"
                placeholder="Enter your mobile number"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={
                <span className="text-gray-700 font-medium">Password</span>
              }
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password
                className="h-10 rounded-md"
                placeholder="Enter your password"
              />
            </Form.Item>

            <div className="flex justify-end text-sm">
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <Form.Item className="mt-2">
              <Spin spinning={loading}>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Log in
                </button>
              </Spin>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
